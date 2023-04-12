const ImageUploadRouter = require("express").Router();
const { UploadImage } = require("../controllers/fileUpload");
const parser = require("../middleware/cloudinaryConfig");
ImageUploadRouter.post("/image", parser.single("image"), UploadImage);
module.exports = ImageUploadRouter;