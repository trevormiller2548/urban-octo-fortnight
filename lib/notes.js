// this file contains functions for creating, editing, and deleting notes
const fs = require('fs');
const path = require('path');

const createNewNote = (note, notesArray) => {
    // adds new note to notes array
    notesArray.push(note);
   

    // rewrites db.json with new array
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
};

// finds note by id
const findById = (id, notesArray) => {
    const result = notesArray.filter(note => note.id === id)[0];
    return result;
};

// edits note
const editNote = (editedNote, notesArray) => {
    // finds index of note to be edited
    const index = notesArray.findIndex(note => note.id === editedNote.id);

    // removes old note and adds edited note
    notesArray.splice(index, 1);
    notesArray.splice(index, 0, editedNote);

    // rewrites db.json with new array
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    )
};

const removeNote = (note, notesArray) => {
    // finds index of note to be deleted
    const index = notesArray.indexOf(note);
    notesArray.splice(index, 1);

    // rewrites db.json with new array
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
};
// exports functions
module.exports = { createNewNote, findById, editNote, removeNote };