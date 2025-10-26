import express from "express";
import { retriveProofByOwner } from "../controllers/proof.controller.js";

const router = express.Router();

router.get("/owner/:id", retriveProofByOwner);

export default router;