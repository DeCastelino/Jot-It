const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname); // Making filename unique by prefixing timestamp to filename
    },
});

module.exports = {
    upload: multer({ storage: storage }),
};
