import { Router } from "express";
import {
  getEducation,
  getEducationById,
  createEducation,
  updateEducation,
  deleteEducation,
} from "../controllers/education.controller.js";
import { verifyToken } from "../middlewares/auth.js";

const router = Router();

router.get("/", getEducation);
router.get("/:id", getEducationById);
router.post("/", verifyToken, createEducation);
router.put("/:id", verifyToken, updateEducation);
router.delete("/:id", verifyToken, deleteEducation);

export default router;
