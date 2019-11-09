const deleteRecursive = (path) => {
  const fs = require("fs");

  if (fs.statSync(path).isFile()) {
    // delete file
    fs.unlinkSync(path);
  } else {
    if (fs.existsSync(path)) {
      fs.readdirSync(path).forEach(function(file) {
          var curPath = path + "/" + file;
          if(fs.statSync(curPath).isDirectory()) {
            // recurse
            deleteFolderRecursive(curPath);
          } else { // delete file
            fs.unlinkSync(curPath);
          }
      });
      fs.rmdirSync(path);
    }
  }
};

module.exports = deleteRecursive;
