const express = require('express');
const db = require('../DB/config');
const router = express.Router();


router.get('/getAll', async (req, res) => {
    const links = await db('tbl_insta').select().orderBy('ID', 'asc');
    return res.status(200).send(links);
    
});

router.patch('/updateAll', (req, res) => {
    try {
        var ID = 0;
        req.body.links.forEach(async (link) => {
            ID += 1;
            await db('tbl_insta').where('ID', ID).update({
                link: link ? (link.endsWith('/embed') ? link : link + 'embed') : null
            });
        });
        res.sendStatus(200);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;

