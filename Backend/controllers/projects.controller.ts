import db from "../config/db.js";
import { Request, Response } from "express";
import { AuthRequest } from "../middlewares/auth.js";

export const getProjects = (req: Request, res: Response) => {
  try {
    const projects = db.prepare("SELECT * FROM projects ORDER BY createdAt DESC").all();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener proyectos" });
  }
};

export const getProjectById = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const project = db.prepare("SELECT * FROM projects WHERE id = ?").get(id) as any;
    
    if (!project) {
      return res.status(404).json({ error: "Proyecto no encontrado" });
    }

    res.json(project);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener proyecto" });
  }
};

export const createProject = (req: AuthRequest, res: Response) => {
  try {
    const { title, description, technologies, link, image } = req.body;

    if (!title || !description || !technologies) {
      return res.status(400).json({ error: "Campos requeridos faltantes" });
    }

    const result = db
      .prepare(
        "INSERT INTO projects (title, description, technologies, link, image) VALUES (?, ?, ?, ?, ?)"
      )
      .run(title, description, technologies, link, image) as { lastInsertRowid: number };

    return res.status(201).json({ id: result.lastInsertRowid, message: "Proyecto creado" });
  } catch (error) {
    return res.status(500).json({ error: "Error al crear proyecto" });
  }
};

export const updateProject = (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;
    const { title, description, technologies, link, image } = req.body;

    const project = db.prepare("SELECT * FROM projects WHERE id = ?").get(id) as any;
    if (!project) {
      return res.status(404).json({ error: "Proyecto no encontrado" });
    }

    db.prepare(
      "UPDATE projects SET title = ?, description = ?, technologies = ?, link = ?, image = ?, updatedAt = CURRENT_TIMESTAMP WHERE id = ?"
    ).run(title, description, technologies, link, image, id);

    return res.json({ message: "Proyecto actualizado" });
  } catch (error) {
    return res.status(500).json({ error: "Error al actualizar proyecto" });
  }
};

export const deleteProject = (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;

    const project = db.prepare("SELECT * FROM projects WHERE id = ?").get(id) as any;
    if (!project) {
      return res.status(404).json({ error: "Proyecto no encontrado" });
    }

    db.prepare("DELETE FROM projects WHERE id = ?").run(id);

    return res.json({ message: "Proyecto eliminado" });
  } catch (error) {
    return res.status(500).json({ error: "Error al eliminar proyecto" });
  }
};
