import express from "express";

console.log("✓ Express cargado");

try {
  import("./routes/about.routes.js").then(m => {
    console.log("✓ Routes cargadas");
  }).catch(e => {
    console.error("✗ Error cargando routes:", e.message);
  });
} catch (error) {
  console.error("✗ Error:", error);
}
