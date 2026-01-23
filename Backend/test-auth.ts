try {
  console.log("Cargando auth middleware...");
  import("./middlewares/auth.js").then(m => {
    console.log("✓ Auth cargado:", typeof m.verifyToken);
  }).catch(e => {
    console.error("✗ Error en auth:", e);
  });
} catch (error: any) {
  console.error("✗ Error:", error.message || error);
}
