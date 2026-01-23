# 🎉 Portfolio Dinámico - Backend Completo

Bienvenido a tu **portafolio profesional con backend dinámico y autenticación JWT**.

## 🚀 Inicio Rápido (3 minutos)

```bash
# 1. Backend
cd Backend
npm install
node init.js          # Crea usuario admin
npm run dev

# 2. Frontend (en otra terminal)
cd Frontend
npm run dev

# 3. Admin (en el navegador)
# http://localhost:4321/admin-dashboard
```

¡Listo! Ahora puedes gestionar tu portafolio dinámicamente. ✨

---

## 📚 Documentación

### 🎯 Comienza aquí
1. **[INDEX.md](INDEX.md)** - Índice de documentación
2. **[QUICK_START.md](QUICK_START.md)** - Visión general (5 min)
3. **[SETUP_GUIDE.md](SETUP_GUIDE.md)** - Instalación detallada

### 📖 Guías completas
- **[IMPLEMENTATION_GUIDE.md](IMPLEMENTATION_GUIDE.md)** - Implementación paso a paso
- **[ARCHITECTURE.md](ARCHITECTURE.md)** - Diagramas y arquitectura
- **[README_BACKEND.md](README_BACKEND.md)** - Referencia técnica

### 🧪 Testing y validación
- **[VERIFICATION_CHECKLIST.md](VERIFICATION_CHECKLIST.md)** - Checklist completo
- **[Backend/API_TESTING.rest](Backend/API_TESTING.rest)** - Ejemplos HTTP

### 📋 Resúmenes
- **[SUMMARY.md](SUMMARY.md)** - Resumen ejecutivo

---

## 📁 Estructura del Proyecto

```
Portafolio/
├── Backend/                    # API REST (Express.js)
│   ├── controllers/           # Lógica de negocio
│   ├── routes/                # Endpoints
│   ├── server.js              # Servidor principal
│   ├── db.js                  # Base de datos
│   ├── middleware.js          # JWT
│   ├── init.js                # Inicialización
│   └── package.json           # Dependencias
│
├── Frontend/                  # Astro.js
│   ├── src/api/
│   │   ├── client.js          # Cliente HTTP
│   │   └── examples.js        # Ejemplos
│   ├── src/pages/
│   │   └── admin-dashboard.astro  # Panel Admin
│   ├── src/components/        # Componentes dinámicos
│   └── package.json
│
├── Database/
│   └── portafolio.db          # SQLite
│
└── [Esta documentación]
```

---

## ✨ Características

✅ **Autenticación JWT** - Login seguro  
✅ **CRUD Completo** - Proyectos, Habilidades, Educación, About  
✅ **Base de Datos SQLite** - Persistencia  
✅ **Panel Admin** - Interfaz de gestión  
✅ **API REST** - 20+ endpoints  
✅ **Cliente HTTP** - Funciones predefinidas  
✅ **Componentes Dinámicos** - Integración lista  
✅ **Documentación Completa** - 8 guías  

---

## 🎯 Endpoints Disponibles

### Auth
```
POST   /api/auth/register      - Registrar usuario
POST   /api/auth/login         - Login
GET    /api/auth/me            - Usuario actual
```

### Projects (Proyectos)
```
GET    /api/projects           - Obtener todos
GET    /api/projects/:id       - Obtener por ID
POST   /api/projects           - Crear (auth)
PUT    /api/projects/:id       - Actualizar (auth)
DELETE /api/projects/:id       - Eliminar (auth)
```

### Skills (Habilidades)
```
GET    /api/skills             - Obtener todos
GET    /api/skills/:id         - Obtener por ID
POST   /api/skills             - Crear (auth)
PUT    /api/skills/:id         - Actualizar (auth)
DELETE /api/skills/:id         - Eliminar (auth)
```

### Education (Educación)
```
GET    /api/education          - Obtener todos
GET    /api/education/:id      - Obtener por ID
POST   /api/education          - Crear (auth)
PUT    /api/education/:id      - Actualizar (auth)
DELETE /api/education/:id      - Eliminar (auth)
```

### About (Sobre mí)
```
GET    /api/about              - Obtener info
PUT    /api/about              - Actualizar (auth)
```

---

## 💻 Uso Básico

### Login desde el Frontend
```javascript
import { auth } from './src/api/client.js';

const result = await auth.login('admin', 'password123');
console.log(result.token);
```

### Obtener Proyectos
```javascript
import { projects } from './src/api/client.js';

const list = await projects.getAll();
console.log(list);
```

### Crear Proyecto
```javascript
const response = await projects.create({
  title: "Mi Proyecto",
  description: "Descripción",
  technologies: "React, Node.js"
});
```

---

## 🔐 Seguridad

- ✅ Contraseñas hasheadas con bcryptjs
- ✅ Tokens JWT con expiración
- ✅ CORS configurado
- ✅ Rutas protegidas
- ✅ Validación de entrada

---

## 🛠️ Stack

- **Backend:** Node.js + Express.js
- **Database:** SQLite3
- **Auth:** JWT (jsonwebtoken)
- **Frontend:** Astro.js
- **Styles:** Tailwind CSS

---

## 📊 Archivos Creados

```
Backend:        13 archivos
Frontend:        7 archivos
Documentación:   8 archivos
─────────────────────────────
Total:          28 archivos
```

---

## ✅ Próximos Pasos

1. Lee [INDEX.md](INDEX.md) para navegar documentación
2. Sigue [QUICK_START.md](QUICK_START.md)
3. Instala dependencias
4. Crea usuario admin
5. Inicia servidor
6. Prueba endpoints
7. Integra con frontend

---

## 🆘 Ayuda

### No funciona?
→ Revisa [VERIFICATION_CHECKLIST.md](VERIFICATION_CHECKLIST.md)

### ¿Cómo integro?
→ Lee [IMPLEMENTATION_GUIDE.md](IMPLEMENTATION_GUIDE.md)

### ¿Qué es todo esto?
→ Mira [ARCHITECTURE.md](ARCHITECTURE.md)

### Quiero ejemplos
→ Abre [Backend/API_TESTING.rest](Backend/API_TESTING.rest)

---

## 📞 Comandos Útiles

```bash
# Backend
cd Backend
npm install              # Instalar dependencias
node init.js            # Crear usuario admin
npm run dev             # Ejecutar en desarrollo
npm start               # Ejecutar en producción

# Frontend
cd Frontend
npm run dev             # Ejecutar en desarrollo
npm run build           # Compilar para producción

# Testing
# Abre API_TESTING.rest con REST Client extension
```

---

## 🚀 Deployment

### Railway
```bash
railway up
```

### Render
Conecta tu GitHub repo

### Vercel
```bash
vercel
```

---

## 📖 Stack Completo

| Componente | Tecnología |
|-----------|-----------|
| Backend | Node.js + Express.js |
| Database | SQLite3 |
| Auth | JWT |
| Security | bcryptjs |
| Frontend | Astro.js |
| Styles | Tailwind CSS |
| HTTP | Fetch API |

---

## 📈 Roadmap

- [x] Backend CRUD
- [x] Autenticación JWT
- [x] Base de datos
- [x] Panel Admin
- [x] Cliente HTTP
- [ ] Refresh tokens (Opcional)
- [ ] Rate limiting (Opcional)
- [ ] Caching (Opcional)

---

## 🎓 Aprendiste

✅ Crear servidor Express  
✅ Diseñar base de datos  
✅ Implementar autenticación  
✅ API REST  
✅ Protección de rutas  
✅ Hash de contraseñas  
✅ Integración Frontend-Backend  

---

## 📄 Licencia

MIT - Libre para usar y modificar

---

## 🎉 ¡Listo!

Tu portafolio profesional está completo. 

**Siguiente paso:** [Lee el INDEX.md](INDEX.md)

¡Mucho éxito! 🚀
