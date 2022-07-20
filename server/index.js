// Simple express server that static serves the files in the build folder

const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '..', 'build')));

const PORT = process.env.PORT || 8080

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
}).listen(PORT);

console.log('Server running on port ' + PORT);