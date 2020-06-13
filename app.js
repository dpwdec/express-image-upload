const express = require('express');
const app = express();
const port = 3000;

const multer = require('multer');

var storage = multer.diskStorage({ 
  destination: (req, file, cb) => { 
      cb(null, 'uploads') 
  }, 
  filename: (req, file, cb) => { 
      cb(null, file.fieldname + '-' + Date.now()) 
  } 
}); 

var upload = multer({ storage: storage }); 


const exphbs = require('express-handlebars');
//add the express-handlebars view engine to express
app.engine('.hbs', exphbs({extname: '.hbs'}));
// set the view engine for your app
app.set('view engine', '.hbs');

app.get('/', (req, res) => res.render('index.hbs'));

app.post('/', upload.single('image'), (req, res) => {
  
});

app.listen(port);