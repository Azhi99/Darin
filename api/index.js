const express = require('express');
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const instaRoute = require('./routes/insta'); 

app.use('/insta', instaRoute);

export default {
    path: '/api',
    handler: app
}