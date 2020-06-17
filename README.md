# Express Image Upload Example

This is a simple repo demonstrating how to upload and retrieve images to/from a Mongodb database and display them on a webpage.

Technologies used:

- `express` => a node web framework to serve our website and process uploads / interface with the database
- `handlebars` => a templating language for serving custom static HTML with server data
- `multer` => an express middleware that allows us to upload image data to our sever
- `fs` => a node file streaming utility for converting our images to string of binary byte data for storage
- `mongoDB` => a noSQL database for storing image data
- `mongoose` => an ORM that wraps the creation of mongoDB schema and requests to the database in an easy to use API

# Installation

- clone this repo
- install mongodb
- run `npm install`
- start the server with `npm run`

You can find an implementation guide [here](https://dpwdec.github.io/2020/06/17/store-images-in-mongodb.html)