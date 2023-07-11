// Purpose: main server file for the application
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
// this imports the routes
const apiRoutes = require('./Routes/apiRoutes');
const htmlRoutes = require('./Routes/htmlRoutes');

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// this uses the routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
// this uses the public folder
app.use(express.static('public'));
// this starts the server
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});