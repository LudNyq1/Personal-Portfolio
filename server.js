'use strict';
const express = require('express');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 8089;

app.use(express.static('public'));

app.get('/', (req, res) => {
    fs.readFile('/index.html', (err, data) =>{
        res.send(data);
    });
});

app.listen(port, () => {
    console.log(`Listening at ${port}`);
});