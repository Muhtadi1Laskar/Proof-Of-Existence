import express from "express";
import { validate } from "../middleware/validationHandler.js";
import  { uploadSingle } from "../middleware/fileHandler.js";
import { proofFileSchema, proofHashSchema } from "../schema/create.schema.js";
import { createFileProof, createHashProof } from "../controllers/proof.controller.js";

const router = express.Router();

router.post("/create/file", uploadSingle, validate(proofFileSchema), createFileProof);
router.post("/create/hash", validate(proofHashSchema), createHashProof);


export default router;