const noteData = require("../db/db.json");
const fs = require("fs");
const path = require("path");


module.exports = (app) => {
    app.get("/api/notes", function(req,res) {
        const data = fs.readFileSync(path.join(__dirname, "../db/db.json"))
        res.json(noteData)
    })

    app.post("/api/notes", function(req,res) {
        noteData.push(req.body)
    })
}