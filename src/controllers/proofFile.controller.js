import { createProof } from "../services/createProof.service.js";
import { errorResponse, successResponse } from "../utils/response.js"

export const createFileProof = async (req, res, next) => {
    if (!req.file) {
        errorResponse(res, { message: "File is missing" }, 400);
        return;
    }

    const { originalname, mimeType, buffer, size } = req.file;
    const { owner } = req.body;
    const metadata = {
        fileName: originalname,
        size,
        type: mimeType
    };
    
    try {
         const proof = await createProof(buffer, owner, metadata);
         successResponse(res, { proof }, 200);
    } catch (error) {
        next(error);
    }
}