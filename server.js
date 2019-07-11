const Bundler = require('parcel-bundler');
const express = require('express');
const mongoose = require('mongoose');

const bundler = new Bundler('./public/index.html', {});

const app = express();

app.use(express.json());

app.use(bundler.middleware());

app.use(express.static('./dist'));

app.get('/', function(req, res) {
    res.sendFile('./dist/index.html');
});

const port = process.env.PORT || 5000;

app.listen(port, err => {
    if(err) {
        console.error(err);
        return;
    }

    console.log(`LawDoc is running on port ${port}`);
});