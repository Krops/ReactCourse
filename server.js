
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');

const controller = require('./controllers/main');

var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.get('/', (req, res) => res.sendFile('./index.html', { root: __dirname }));
app.get('/post.html', (req, res) => res.sendFile('./post.html', { root: __dirname }));

app.listen(4000, () => {
    console.log('Express server started at port : 4000');
});

app.use('/api', controller);