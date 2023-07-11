// this file is for the html routes
const path = require('path');
const router = require('express').Router();
// this uses the get method to send the html files to the client
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});
// this is the default route
module.exports = router;