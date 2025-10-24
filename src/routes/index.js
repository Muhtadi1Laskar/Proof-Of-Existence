import express from "express";
import createRoute from "./create.routes.js";

const router = express.Router();

router.use("/proof", createRoute);

export default router;