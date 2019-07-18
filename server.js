const port = process.env.PORT || 5000;
const Bundler = require('parcel-bundler');
const express = require('express');

const app = express();

const bundler = new Bundler('./public/index.html', {});

app.use(express.json());

app.use(bundler.middleware());

app.use(express.static('./dist'));

app.get('/', function(req, res) {
    res.sendFile('./dist/index.html');
});

app.listen(port, () => {
    console.log(`LawDoc is running on port ${port}`);
});