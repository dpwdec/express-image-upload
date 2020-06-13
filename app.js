const express = require('express');
const app = express();
const port = 3000;


const exphbs = require('express-handlebars');
//var hbs = exphbs.create();
//add the express-handlebars view engine to express
app.engine('.hbs', exphbs({extname: '.hbs'}));
// set the view engine for your app
app.set('view engine', '.hbs');

app.get('/', (req, res) => res.render('index.hbs'));

app.listen(port);