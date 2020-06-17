const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('mongoose');
// connect to mongoose database
mongoose.connect('mongodb://localhost/upload_image', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, err => { 
  if(err) { console.log(err); return; }
  console.log('connected')  
});

const multer = require('multer');
var upload = multer({dest: './uploads'});

const exphbs = require('express-handlebars');
//add the express-handlebars view engine to express
app.engine('.hbs', exphbs({extname: '.hbs'}));
// set the view engine for your app
app.set('view engine', '.hbs');

app.get('/', (req, res) => {
  // Image.find().lean().exec((err, images) => {
  //   images.forEach((image) => {
  //     image.img.data = image.img.data.toString('base64');
  //   });
  //   res.render('index.hbs', {images: images});
  // });

  Image.find((err, images) => {
    images = images.map((image) => {
      image.img.data = image.img.data.toString('base64');
      return image.toObject();
    });
    res.render('index.hbs', {images: images});
  });
});

const fs = require('fs');
const Image = require('./models/image.js');

app.post('/', upload.single('image'), (req, res) => {

  var filePath = './uploads/' + req.file.filename;

  var uploadedImage = new Image({
    img: {
      data: fs.readFileSync(filePath),
      imgType: req.file.mimetype
    }
  });

  uploadedImage.save(err => {
    if(err) { console.log(err); return; }
    console.log('image saved');
    fs.unlinkSync(filePath);
    res.redirect('/');
  });
});

app.listen(port);