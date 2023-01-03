const express = require("express");
const fs = require('fs');
const app = express();
const path = require('path');

fs.readFile("db/db.json", "utf8", (err,data) => {
    if(err) throw err;

    var notes = JSON.parse(data);

    app.get("/api/notes", (req,res) => {
        res.json(notes);
    });

    app.post("/api/notes", (req, res) => {
        let newNote = req.body;
        notes.push(newNote);
        updateDb();
       console.log(req.body);
    });

    app.get("/api/notes/:id", (req, res) => {
        const tipId = req.params.id;
        res.json(notes[tipId]);
    });

    
    app.delete("/api/notes/:id", (req, res) => {
        notes.splice(req.params.id, 1);
        updateDb();
        console.log(req.params.id);
    });

    app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/index.html'))
);

    app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, '../public/notes.html'))
);

    app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/index.html'))
);

    function updateDb() {
        fs.writeFile("db/db.json", JSON.stringify(notes, '\t'), err => {
            if(err) throw err;
            return true;
        });
    }
});

module.exports = app;