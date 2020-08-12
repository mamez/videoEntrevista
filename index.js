const express = require('express');
const app = express();
const server = require('http').Server(app);
const path = require('path');

// configuracion de template y carpeta publica
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.render('room');
  }); 

server.listen(3000);