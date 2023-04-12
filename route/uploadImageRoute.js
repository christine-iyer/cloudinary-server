const ImageUploadRouter = require("express").Router();
const { UploadImage } = require("../controller/uploadImageRoute");
const parser = require("../middleware/cloudinary.config");
ImageUploadRouter.post("/image", parser.single("image"), UploadImage);
module.exports = ImageUploadRouter;