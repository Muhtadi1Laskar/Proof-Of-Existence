import { createProof } from "../services/create.proof.service.js";
import { generateHash } from "../services/hash.service.js";
import { verifyProof } from "../services/verify.proof.service.js";
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
        type: "text"
    };

    try {
        const hash = generateHash(buffer);
        const proof = await createProof(hash, owner, metadata);
        successResponse(res, { proof }, 200);
    } catch (error) {
        next(error);
    }
}

export const createHashProof = async (req, res, next) => {
    const { owner, hash } = req.body;

    const metadata = {
        fileName: null,
        size: null,
        type: null
    };

    try {
        const proof = await createProof(hash, owner, metadata);
        successResponse(res, { proof }, 200);
    } catch (error) {
        next(error);
    }
}


export const verifyFileProofs = async (req, res, next) => {
    if (!req.file) {
        errorResponse(res, { message: "File is missing" }, 400);
        return;
    }

    const { buffer } = req.file;
    const { owner } = req.body;

    try {
        const hash = generateHash(buffer);
        const proof = await verifyProof(hash, owner);
        successResponse(res, { proof }, 200);
    } catch (error) {
        next(error);
    }
}

export const verifyHashProofs = async (req, res, next) => {
    const { hash, owner } = req.body;

    try {
        const proof = await verifyProof(hash, owner);
        successResponse(res, { proof }, 200);
    } catch (error) {
        next(error);
    }
}
