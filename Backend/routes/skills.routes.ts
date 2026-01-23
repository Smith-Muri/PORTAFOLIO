import { Router } from "express";
import {
  getSkills,
  getSkillById,
  createSkill,
  updateSkill,
  deleteSkill,
} from "../controllers/skills.controller.js";
import { verifyToken } from "../middlewares/auth.js";

const router = Router();

router.get("/", getSkills);
router.get("/:id", getSkillById);
router.post("/", verifyToken, createSkill);
router.put("/:id", verifyToken, updateSkill);
router.delete("/:id", verifyToken, deleteSkill);

export default router;
