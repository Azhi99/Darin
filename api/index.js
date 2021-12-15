const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const path = require('path');
require('dotenv').config();
const db = require('./DB/config');
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const instaRoute = require('./routes/insta'); 
const itemRoute = require('./routes/items'); 

app.use('/insta', instaRoute);
app.use('/item', itemRoute);

app.post('/login', async (req, res) => {
    try {
        const [user] = await db('tbl_users').where('username', req.body.username).select();
        if(user) {
            bcrypt.compare(req.body.password, user.password, (err, result) =>  {
                if(result) {
                    const token = jwt.sign({
                        ID: user.userID,
                        username: user.username
                    }, process.env.KEY, { expiresIn: '12h' });

                    return res.status(200).send(token);
                } else {
                    return res.status(500).send({
                        message: 'Invalid password'
                    });
                }
            });
        } else {
            return res.status(500).send({
                message: 'Invalid username'
            });
        }
    } catch (error) {
        console.log(error);
    }
});

app.post('/verifyToken', (req, res) => {
    try {
        const decoded = jwt.decode(req.headers.authorization.split('T')[1], process.env.KEY);
        res.status(200).send(decoded);
    } catch (error) {
        res.sendStatus(500)
    }

});

export default {
    path: '/api',
    handler: app
}