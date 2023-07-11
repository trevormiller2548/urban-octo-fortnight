// this file is used to export all the routes in the apiRoutes folder
const router = require('express').Router();
const notesRoutes = require('./notesRoutes');
router.use(notesRoutes);
module.exports = router;