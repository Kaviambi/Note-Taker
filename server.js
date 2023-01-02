const express = require('express');
const path = require('path');
const api = require()

const app = express();
const PORT = process.env.port || 3002;

app.use(express.urlencoded({extended: true }));
app.use(express.json());

app.use(express.static('public'));

//HTML routes
app.get('/', (req, res) =>
res.sendFile(path.join(__dirname, './public/index.html'))
);

app.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, './public/notes.html'))
);

app.get('*', (req, res) =>
res.sendFile(path.join(__dirname, '/public/index.html'))
);

//API routes













app.listen(PORT, () =>
console.log(`App Listening at http://localhost:${PORT}`)
);

