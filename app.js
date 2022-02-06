const express = require('express');
const path = require('path');
const http = require('http');

// express server
const app = express();

// Port
const port = process.env.PORT || 3000;

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Express API endpoints
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/index.html'));
});
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/index.html'));
});
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/about.html'));
});
app.get('/work', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/work.html'));
});
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/contact.html'));
});

app.listen(port, function() {
    console.log(`Server running on port: ${port}`);
});