import multer from "multer";

const acceptedFiles = ["text/plain", "application/pdf", "application/epub+zip"];

const upload = multer({
    storage,
    limits: {
        fileSize: 100 * 1024 * 1024
    },
    fileFilter: (req, res, cb) => {
        if(acceptedFiles.includes(file.mimeType) || file.mimeType.startsWith("image/")) {
            cb(null, true);
        } else {
            cb(new Error("Invalid file type"), false);
        }
    }
});

export const uploadSingle = upload.single("file");