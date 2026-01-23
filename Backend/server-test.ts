import express from "express";
import cors from "cors";
import dotenv from "dotenv";

console.log("1. Cargando rutas...");

try {
  const aboutRoutes = await import("./routes/about.routes.js");
  console.log("2. ✓ About routes cargadas");
  
  const authRoutes = await import("./routes/auth.routes.js");
  console.log("3. ✓ Auth routes cargadas");
  
  const projectsRoutes = await import("./routes/projects.routes.js");
  console.log("4. ✓ Projects routes cargadas");
  
  const skillsRoutes = await import("./routes/skills.routes.js");
  console.log("5. ✓ Skills routes cargadas");
  
  const educationRoutes = await import("./routes/education.routes.js");
  console.log("6. ✓ Education routes cargadas");
  
  dotenv.config();
  
  const app = express();
  app.use(cors());
  app.use(express.json());
  
  app.use("/api/auth", authRoutes.default);
  app.use("/api/about", aboutRoutes.default);
  app.use("/api/projects", projectsRoutes.default);
  app.use("/api/skills", skillsRoutes.default);
  app.use("/api/education", educationRoutes.default);
  
  const PORT = 4000;
  app.listen(PORT, () => {
    console.log(`🚀 Backend corriendo en http://localhost:${PORT}`);
  });
} catch (error: any) {
  console.error("✗ Error fatal:", error.message || error);
  console.error(error.stack);
}
