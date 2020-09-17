var noteData = require("../db/db.json");

module.exports = (app) => {
    app.get("/api/notes", function(req,res) {
        res.json(noteData)
    })
}