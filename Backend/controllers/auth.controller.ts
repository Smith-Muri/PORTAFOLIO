import db from "../config/db.js";
import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key-change-this";

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email y contraseña son requeridos" });
    }

  
    const existingAdmin = db
      .prepare("SELECT * FROM admin WHERE email = ?")
      .get(email) as { id: number } | undefined;

    if (existingAdmin) {
      return res.status(400).json({ error: "El email ya está registrado" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

   
    const result = db
      .prepare("INSERT INTO admin (email, password) VALUES (?, ?)")
      .run(email, hashedPassword);

    return res.status(201).json({ message: "Admin registrado correctamente" });
  } catch (error) {
    return res.status(500).json({ error: "Error al registrar" });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email y contraseña son requeridos" });
    }

 
    const admin = db.prepare("SELECT * FROM admin WHERE email = ?").get(email) as { id: number; password: string; email: string } | undefined;

    if (!admin) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }


    const isValidPassword = await bcrypt.compare(password, admin.password);

    if (!isValidPassword) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }

  
    const token = jwt.sign({ id: admin.id, email: admin.email }, JWT_SECRET, {
      expiresIn: "7d",
    });

    return res.json({ token, admin: { id: admin.id, email: admin.email } });
  } catch (error) {
    return res.status(500).json({ error: "Error al iniciar sesión" });
  }
};
