const uuid = require("uuid");
const path = require("path");
class ImageService {
  saveFile(file) {
    try {
      const fileName = uuid.v4() + ".jpg";
      const filePath = path.resolve("../Vistra/public/img", fileName);
      file.mv(filePath);
      return fileName;
    } catch (e) {
      console.log(e);
    }
  }
}
module.exports = new ImageService();
