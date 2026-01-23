import { Router } from "express";
import {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} from "../controllers/projects.controller.js";
import { verifyToken } from "../middlewares/auth.js";

const router = Router();

router.get("/", getProjects);
router.get("/:id", getProjectById);
router.post("/", verifyToken, createProject);
router.put("/:id", verifyToken, updateProject);
router.delete("/:id", verifyToken, deleteProject);

export default router;
