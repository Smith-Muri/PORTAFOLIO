import db from "../config/db.js";
import { Request, Response } from "express";
import { AuthRequest } from "../middlewares/auth.js";

export const getEducation = (req: Request, res: Response) => {
  try {
    const education = db.prepare("SELECT * FROM education ORDER BY startYear DESC").all();
    res.json(education);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener educación" });
  }
};

export const getEducationById = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const education = db.prepare("SELECT * FROM education WHERE id = ?").get(id) as any;
    
    if (!education) {
      return res.status(404).json({ error: "Educación no encontrada" });
    }

    res.json(education);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener educación" });
  }
};

export const createEducation = (req: AuthRequest, res: Response) => {
  try {
    const { school, degree, field, startYear, endYear, description } = req.body;

    if (!school || !degree || !field || !startYear) {
      return res.status(400).json({ error: "Campos requeridos faltantes" });
    }

    const result = db
      .prepare(
        "INSERT INTO education (school, degree, field, startYear, endYear, description) VALUES (?, ?, ?, ?, ?, ?)"
      )
      .run(school, degree, field, startYear, endYear, description) as { lastInsertRowid: number };

    return res.status(201).json({ id: result.lastInsertRowid, message: "Educación creada" });
  } catch (error) {
    return res.status(500).json({ error: "Error al crear educación" });
  }
};

export const updateEducation = (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;
    const { school, degree, field, startYear, endYear, description } = req.body;

    const education = db.prepare("SELECT * FROM education WHERE id = ?").get(id) as any;
    if (!education) {
      return res.status(404).json({ error: "Educación no encontrada" });
    }

    db.prepare(
      "UPDATE education SET school = ?, degree = ?, field = ?, startYear = ?, endYear = ?, description = ?, updatedAt = CURRENT_TIMESTAMP WHERE id = ?"
    ).run(school, degree, field, startYear, endYear, description, id);

    return res.json({ message: "Educación actualizada" });
  } catch (error) {
    return res.status(500).json({ error: "Error al actualizar educación" });
  }
};

export const deleteEducation = (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;

    const education = db.prepare("SELECT * FROM education WHERE id = ?").get(id) as any;
    if (!education) {
      return res.status(404).json({ error: "Educación no encontrada" });
    }

    db.prepare("DELETE FROM education WHERE id = ?").run(id);

    return res.json({ message: "Educación eliminada" });
  } catch (error) {
    return res.status(500).json({ error: "Error al eliminar educación" });
  }
};
