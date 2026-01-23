import db from "../config/db.js";
import { Request, Response } from "express";
import { AuthRequest } from "../middlewares/auth.js";

export const getSkills = (req: Request, res: Response) => {
  try {
    const skills = db.prepare("SELECT * FROM skills ORDER BY createdAt DESC").all();
    res.json(skills);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener habilidades" });
  }
};

export const getSkillById = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const skill = db.prepare("SELECT * FROM skills WHERE id = ?").get(id) as any;
    
    if (!skill) {
      return res.status(404).json({ error: "Habilidad no encontrada" });
    }

    res.json(skill);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener habilidad" });
  }
};

export const createSkill = (req: AuthRequest, res: Response) => {
  try {
    const { name, level, category } = req.body;

    if (!name || !level) {
      return res.status(400).json({ error: "Nombre y nivel son requeridos" });
    }

    const result = db
      .prepare("INSERT INTO skills (name, level, category) VALUES (?, ?, ?)")
      .run(name, level, category || null) as { lastInsertRowid: number };

    return res.status(201).json({ id: result.lastInsertRowid, message: "Skill creada" });
  } catch (error) {
    console.error("Error creating skill:", error);
    return res.status(500).json({ error: "Error al crear skill" });
  }
};

export const updateSkill = (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;
    const { name, level, category } = req.body;

    if (!name || !level) {
      return res.status(400).json({ error: "Nombre y nivel son requeridos" });
    }

    const skill = db.prepare("SELECT * FROM skills WHERE id = ?").get(id) as any;
    if (!skill) {
      return res.status(404).json({ error: "Skill no encontrada" });
    }

    db.prepare(
      "UPDATE skills SET name = ?, level = ?, category = ?, updatedAt = CURRENT_TIMESTAMP WHERE id = ?"
    ).run(name, level, category || null, id);

    return res.json({ message: "Skill actualizada" });
  } catch (error) {
    return res.status(500).json({ error: "Error al actualizar skill" });
  }
};

export const deleteSkill = (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;

    const skill = db.prepare("SELECT * FROM skills WHERE id = ?").get(id) as any;
    if (!skill) {
      return res.status(404).json({ error: "Habilidad no encontrada" });
    }

    db.prepare("DELETE FROM skills WHERE id = ?").run(id);

    return res.json({ message: "Habilidad eliminada" });
  } catch (error) {
    return res.status(500).json({ error: "Error al eliminar habilidad" });
  }
};
