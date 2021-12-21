const express = require('express');
const path = require('path');
const {Nuxt, Builder} = require('nuxt');
const app = express();

async function start() {
    let config = require('./nuxt.config');
    const nuxt = new Nuxt(config);
    const builder = new Builder(nuxt);

    await builder.build().catch(() => {
        process.exit(1);
    })
    app.use(nuxt.render)
    app.listen(3000)
}

start()