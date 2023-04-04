// This code is used to start up the server and connect to the database
// The database connection string is located in the .env file
// If the environment is production, then the client folder is served up

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '.env')});

const app = express();
require('./database');

app.use(bodyParser.json());
app.use(cors());

// API
const users = require('./api/users');
app.use('/api/users', users);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/client/build')))
    
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
} else {
    app.get('/', (req, res) => {
        res.send('API is running...')
    })
}

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});