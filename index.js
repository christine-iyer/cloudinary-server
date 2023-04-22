require('dotenv').config()
const express = require("express");
const path = require('path')
const mongoose = require("mongoose"); // new
const cors = require("cors");
const ImageUploadRouter = require("./route/uploadImageRoute");


// const favicon = require('serve-favicon')


//const ImageUploadRouter = require("./route/uploadImageRoute");

//defining mongoose options
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const app = express();
app.use(express.json())// req.body
app.use((req, res, next) => {
    res.locals.data = {}
    next()
})
app.use(cors());
app.use(express.static(path.join(__dirname, 'build')))
//adding the middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api", ImageUploadRouter);
// Connect to MongoDB database
// mongoose.connect(process.env.MONGO_URI, options);
// const db = mongoose.connection;
// db.on('connected', function () {
//   console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
// // });
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})
mongoose
.connect(process.env.MONGO_URI, options)
.then(()=> {
  app.listen(5001,()=> {
    console.log("Starting server")
  })
})