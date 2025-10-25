import express from "express";
import { uploadSingle } from "../middleware/fileHandler.js";
import { validate } from "../middleware/validationHandler.js";
import { proofFileSchema, proofHashSchema } from "../schema/create.schema.js";
import { verifyFileProofs, verifyHashProofs } from "../controllers/proof.controller.js";

const router = express.Router();

router.post("/file", uploadSingle, validate(proofFileSchema), verifyFileProofs);
router.post("/hash", validate(proofHashSchema), verifyHashProofs);

export default router;