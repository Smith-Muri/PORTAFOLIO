import db from "../config/db.js";
import { Request, Response } from "express";
import { AuthRequest } from "../middlewares/auth.js";

export const getAbout = (req: Request, res: Response) => {
  try {
    const row = db.prepare("SELECT * FROM about LIMIT 1").get();
    res.json(row || {});
  } catch (error) {
    res.status(500).json({ error: "Error al obtener About" });
  }
};

export const createOrUpdateAbout = (req: AuthRequest, res: Response) => {
  try {
    const { title, description, profileImage } = req.body;

    if (!title || !description) {
      return res.status(400).json({ error: "Título y descripción son requeridos" });
    }

    const existing = db.prepare("SELECT * FROM about LIMIT 1").get() as { id: number } | undefined;

    if (existing) {
      db.prepare(
        "UPDATE about SET title = ?, description = ?, profileImage = ?, updatedAt = CURRENT_TIMESTAMP WHERE id = ?"
      ).run(title, description, profileImage, existing.id);
    } else {
      db.prepare(
        "INSERT INTO about (title, description, profileImage) VALUES (?, ?, ?)"
      ).run(title, description, profileImage);
    }

    return res.json({ message: "About actualizado correctamente" });
  } catch (error) {
    return res.status(500).json({ error: "Error al guardar About" });
  }
};

export const updateAbout = (req: AuthRequest, res: Response) => {
  try {
    const { title, description, profileImage } = req.body;

    if (!title || !description) {
      return res.status(400).json({ error: "Título y descripción son requeridos" });
    }

    const existing = db.prepare("SELECT * FROM about LIMIT 1").get() as { id: number } | undefined;

    if (!existing) {
      return res.status(404).json({ error: "About no encontrado" });
    }

    db.prepare(
      "UPDATE about SET title = ?, description = ?, profileImage = ?, updatedAt = CURRENT_TIMESTAMP WHERE id = ?"
    ).run(title, description, profileImage, existing.id);

    return res.json({ message: "About actualizado correctamente" });
  } catch (error) {
    return res.status(500).json({ error: "Error al actualizar About" });
  }
};
