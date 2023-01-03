const express = require("express");
const fs = require("fs");
// const path = require('path');

const routes = require('./routes/routes');
const app = express();
const PORT = process.env.port || 3002;

app.use(express.urlencoded({extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.use('/', routes);

app.listen(PORT, () =>
console.log(`App Listening at http://localhost:${PORT}`)
);

