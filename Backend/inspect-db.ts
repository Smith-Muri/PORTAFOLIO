import Database from "better-sqlite3";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.join(__dirname, "Database/portfolio.db");
console.log("📁 Abriendo DB en:", dbPath);

const db = new Database(dbPath);

// Obtener todas las tablas
const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table';").all();
console.log("📊 Tablas encontradas:", tables);

// Inspeccionar cada tabla
tables.forEach((t: any) => {
  console.log(`\n📋 Tabla: ${t.name}`);
  const schema = db.prepare(`PRAGMA table_info(${t.name});`).all();
  console.log("Esquema:", JSON.stringify(schema, null, 2));
  
  const rows = db.prepare(`SELECT * FROM ${t.name} LIMIT 5;`).all();
  console.log("Primeras 5 filas:", JSON.stringify(rows, null, 2));
});

db.close();
