import express from "express";
import createRoute from "./create.routes.js";
import verifyRoute from "./verify.routes.js";

const router = express.Router();

router.use("/proof", createRoute);
router.use("/verify", verifyRoute);

export default router;