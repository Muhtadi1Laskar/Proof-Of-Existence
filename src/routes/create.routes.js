import express from "express";
import { validate } from "../middleware/validationHandler.js";
import  { uploadSingle } from "../middleware/fileHandler.js";
import { proofFileSchema } from "../schema/create.schema.js";
import { createFileProof } from "../controllers/proofFile.controller.js";

const router = express.Router();

router.post("/create/file", uploadSingle, validate(proofFileSchema), createFileProof);


export default router;