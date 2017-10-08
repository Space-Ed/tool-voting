'use strict';


const express = require('express');
const API = require('./api.js');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

app.use(express.static('www'))

// app.get('/', (req, res) => {
//     res.sendFile('www/index.html')
// });

app.use('/api', API)

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);
