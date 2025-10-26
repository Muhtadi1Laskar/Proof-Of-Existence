import express from "express";
import createRoute from "./create.routes.js";
import verifyRoute from "./verify.routes.js";
import retriveRoute from "./get.proof.routes.js";

const router = express.Router();

router.use("/retrive", retriveRoute);
router.use("/proof", createRoute);
router.use("/verify", verifyRoute);

export default router;