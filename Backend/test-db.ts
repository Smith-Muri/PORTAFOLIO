import Database from 'better-sqlite3';

try {
  console.log("Intentando abrir BD...");
  const db = new Database('./Database/portfolio.db');
  console.log("✓ BD abierta correctamente");
  
  const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table';").all();
  console.log("✓ Tablas encontradas:", tables.length);
  tables.forEach((t: any) => console.log("  - " + t.name));
  
  db.close();
  console.log("✓ Test completado");
} catch (error) {
  console.error("✗ Error:", error);
}
