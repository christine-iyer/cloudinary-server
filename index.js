const express = require("express");
const mongoose = require("mongoose"); // new
const cors = require("cors");
const ImageUploadRouter = require("./route/uploadImageRoute");
require('dotenv').config()
const path = require('path')

//const ImageUploadRouter = require("./route/uploadImageRoute");

//defining mongoose options
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const app = express();
//adding the middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'build')))
app.use(cors());
app.use("/api", ImageUploadRouter);
// Connect to MongoDB database
// mongoose.connect(process.env.MONGO_URI, options);
// const db = mongoose.connection;
// db.on('connected', function () {
//   console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
// });
mongoose
.connect(process.env.MONGO_URI, options)
.then(()=> {
  app.listen(5001,()=> {
    console.log("Starting server")
  })
})