// Dependencies
const fs = require("fs");
const util = require("util");
const uniqid = require("uniqid");

const readFileSync = util.promisify(fs.readFile)
const writeFileSync = util.promisify(fs.writeFile)

// Class that holds callback functions
class Store {
    read(){
        return readFileSync("db/db.json", "utf8");
    }

    write(note) {
        return writeFileSync("db/db.json", JSON.stringify(note))
    }

    getNotes() {
        return this.read().then(function(notes) {
            var parsedNotes;

            try {
                parsedNotes = [].concat(JSON.parse(notes));
            } catch (error) {
                parsedNotes = [];
            }
            return parsedNotes;
        })
    }

    addNote(note) {
        const {title, text} = note;
        
        if (!title || !text) {
            throw new Error("Note title and text can not be blank!")
        }

        const newNote = {title, text, id: uniqid()}

        return this.getNotes()
        .then(notes => [...notes, newNote])
        .then(updatedNotes => this.write(updatedNotes))
        .then(() => newNote)
    }


    removeNote(id) {
        return this.getNotes()
        .then(notes => notes.filter(note => note.id !== id))
        .then(filteredNotes => this.write(filteredNotes))
    }
}

module.exports = new Store()