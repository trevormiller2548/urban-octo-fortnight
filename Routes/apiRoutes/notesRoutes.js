// Purpose: API routes for notes
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { notes } = require('../../db/db');
const { createNewNote, findById, editNote, removeNote } = require('../../lib/notes');

router.get('/notes', (req, res) => {
    res.json(notes);
});
// this is the post method to add a new note
router.post('/notes', (req, res) => {

    // this creates a new note or edits a note if the id exists
    if (!req.body.id) {
        req.body.id = uuidv4();
        createNewNote(req.body, notes);
    } else {
        editNote(req.body, notes);
    }

    res.json(req.body);
});
// this is the delete method to remove a note
router.delete('/notes/:id', (req, res) => {
    const note = findById(req.params.id, notes);

    removeNote(note, notes);
    res.json();
});
// this is the default route
module.exports = router;