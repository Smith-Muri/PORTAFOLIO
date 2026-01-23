import { Router } from "express";
import { getAbout, createOrUpdateAbout, updateAbout } from "../controllers/about.controller.js";
import { verifyToken } from "../middlewares/auth.js";

const router = Router();

router.get("/", getAbout);
router.post("/", verifyToken, createOrUpdateAbout);
router.put("/", verifyToken, updateAbout);

export default router;
