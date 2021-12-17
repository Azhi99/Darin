const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const db = require('../DB/config');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: path.join(__dirname, '../../static/itemImages'),
    filename: (req, file, cb) => {
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        if(['image/jpg', 'image/jpeg', 'image/png'].includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(null, false);
            cb(new Error('Invalid file type'));
        }
    }
}).single('itemImage');

router.post('/addItem', (req, res) => {
    try {
        upload(req, res, async (err) => {
            if(!err) {
                const [itemID] = await db('tbl_items').insert({
                    itemName: req.body.itemName,
                    categoryID: req.body.categoryID,
                    price: req.body.price,
                    image: req.file ? req.file.filename : 'default.png'
                });
                res.status(200).send({
                    itemID,
                    image: req.file ? req.file.filename : 'default.png'
                });
            }
        })
    } catch (error) {
        res.status(500).send(error);
    }
});

router.patch('/updateItem/:itemID', async (req, res) => {
    try {
        await db('tbl_items').where('itemID', req.params.itemID).update({
            itemName: req.body.itemName,
            categoryID: req.body.categoryID,
            price: req.body.price
        });
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.patch('/updateImage/:itemID', async (req, res) => {
    try {
        const [{oldImage}] = await db('tbl_items').where('itemID', req.params.itemID).select(['image as oldImage']);
        upload(req, res, async (err) => {
            if(!err) {
                await db('tbl_items').where('itemID', req.params.itemID).update({
                    image: req.file ? req.file.filename : 'default.png'
                });
                if(oldImage != 'default.png') {
                    fs.unlinkSync(path.join(__dirname, '../../static/itemImages/' + oldImage));
                }
                res.status(200).send({
                    image: req.file ? req.file.filename : 'default.png'
                });
            }
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

router.delete('/deleteItem/:itemID', async (req, res) => {
    try {
        const [{image}] = await db('tbl_items').where('itemID', req.params.itemID).select(['image']);
        await db('tbl_items').where('itemID', req.params.itemID).delete();
        if(image != 'default.png') {
            fs.unlinkSync(path.join(__dirname, '../../static/itemImages/' + image));
        }
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.get('/getAllItems', async (req, res) => {
    const items = await db.select(
        'tbl_items.itemID as itemID',
        'tbl_items.itemName as itemName',
        'tbl_items.categoryID as categoryID',
        'tbl_categories.categoryName as categoryName',
        'tbl_items.price as price',
        'tbl_items.image as image'
    ).from('tbl_items')
     .join('tbl_categories', 'tbl_categories.categoryID', '=', 'tbl_items.categoryID')
     .orderBy('tbl_items.itemID', 'desc');
    res.status(200).send(items);
});

router.get('/getItems/:offset/:categoryID', async (req, res) => {
    var items = [];
    var numberOfItems = 0;
    if(Boolean(Number(req.params.categoryID))) {
        items = await db.select(
            'tbl_items.itemName as itemName',
            'tbl_categories.categoryName as categoryName',
            'tbl_items.price as price',
            'tbl_items.image as image'
        ).from('tbl_items')
         .join('tbl_categories', 'tbl_categories.categoryID', '=', 'tbl_items.categoryID')
         .where('tbl_items.categoryID', req.params.categoryID)
         .orderBy('tbl_items.itemID', 'desc')
         .offset(req.params.offset)
         .limit(16);

         numberOfItems = [{numberOfItems}] = await db('tbl_items').where('tbl_items.categoryID', req.params.categoryID).count('* as numberOfItems');
    } else {
        items = await db.select(
            'tbl_items.itemName as itemName',
            'tbl_categories.categoryName as categoryName',
            'tbl_items.price as price',
            'tbl_items.image as image'
        ).from('tbl_items')
         .join('tbl_categories', 'tbl_categories.categoryID', '=', 'tbl_items.categoryID')
         .orderBy('tbl_items.itemID', 'desc')
         .offset(req.params.offset)
         .limit(16);

        numberOfItems = [{numberOfItems}] = await db('tbl_items').count('* as numberOfItems');
    }
    res.status(200).send({
        items,
        numberOfItems: numberOfItems[0].numberOfItems
    });
})


// Categories Route

router.post('/addCategory', async (req, res) => {
    try {
        const [categoryID] = await db('tbl_categories').insert({
            categoryName: req.body.categoryName
        });
        res.status(200).send({
            categoryID
        });
    } catch (error) {
        if(error.errno == 1062) {
            res.status(500).send({
                message: 'This category already exist'
            });
        }
        res.status(500).send(error);
    }
});

router.patch('/updateCategory/:categoryID', async (req, res) => {
    try {
        await db('tbl_categories').where('categoryID', req.params.categoryID).update({
            categoryName: req.body.categoryName
        });
        res.sendStatus(200);
    } catch (error) {
        if(error.errno == 1062) {
            res.status(500).send({
                message: 'This category already exist'
            });
        }
        res.status(500).send(error);
    }
});

router.delete('/deleteCategory/:categoryID', async (req, res) => {
    try {
        await db('tbl_categories').where('categoryID', req.params.categoryID).delete();
        res.sendStatus(200);
    } catch (error) {
        if(error.errno == 1451) {
            res.status(500).send({
                message: 'Can not delete this category, because it already in use'
            });
        }
        res.status(500).send(error);
    }
});

router.get('/getAllCategories', async (req, res) => {
    const categories = await db('tbl_categories').select().orderBy('categoryID');
    res.status(200).send(categories);
});

module.exports = router;