import express from "express";
import path from 'path';
import multer from "multer"

const router = express.Router();

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'uploads/')
    },
    filename(req, file, cb) {
        cb(null, `${file.filename}-${Date.now()}${path.extname(file.originalname)}`)
    }
})

function checkedFileType(file, cb) {
    const filetype = /jpg|jpeg|png/
    const extname = filetype.test(path.extname(file.originalname).toLowerCase())
    const mimetype = filetype.test(file.mimetype)

    if (extname && mimetype) {
        return cb(null, true)
    } else {
        cb('images only')
    }
}

const upload = multer({
    storage,
    fileFilter: function (req, file, cb) {
        checkedFileType(file, cb)
    }
})

router.post('/', upload.single('image'), (req, res) => {
    res.send(`/${req.file.path}`)
})

export default router