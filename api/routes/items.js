const express = require('express');
const router = express.Router();
const path = require('path');
const db = require('../DB/config');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: '/itemImages',
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
                    itemID
                });
            } else {
                res.status(500).send(err);
            }
        })
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;