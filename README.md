# 💬 Otro Chat Más

**Otro Chat Más** es una aplicación de mensajería creada como proyecto final del curso **Frontend Developer (UTN 2025)**.  
El objetivo fue construir una interfaz funcional, aplicando conceptos de **React**, **CSS Modules** y **LocalStorage**.

---

## 🚀 Descripción general

El proyecto comenzó como una simple maqueta en **HTML y CSS**, pero fue evolucionando hasta convertirse en una aplicación React modular, con funcionalidades reales de autenticación, persistencia de datos y navegación interna.  

La idea principal:  
“Es otro chat más del montón, pero es tuyo: decoralo y hacelo propio”.

---

## 🧩 Funcionalidades principales

### 🔐 Autenticación simulada
- Registro e inicio de sesión con **validación de usuario** y **contador de intentos**.  
- Los datos se guardan localmente usando **LocalStorage**.  
- Se bloquea el acceso al chat sin estar logueado (ruta protegida con **React Router DOM**).

### 💬 Interfaz del chat
- Lista dinámica de contactos con búsqueda por nombre.  
- Persistencia de mensajes independiente por usuario usando **useContext** y **useEffect**.  
- Cada mensaje cuenta con **ID único** y **marca temporal** (hora de envío).

### ⚙️ Configuración personalizable
- Ventana modal (popup) para modificar datos del usuario.  
- Elección de **avatar** y **fondo del chat**.  
- Botón para **cerrar sesión** de forma segura.  

### 🧠 Centro de ayuda
- Página informativa inspirada en el estilo *Chrome What's New*.  
- Explica las tecnologías, el proceso y presenta al autor.  
- Incluye capturas de pantalla e ilustraciones personalizadas.

---

## 🧱 Tecnologías utilizadas

 **React + Vite**  Entorno rápido y modular para desarrollo frontend.
 **React Router DOM**  Manejo de rutas y páginas protegidas. 
 **CSS Modules**  Estilos encapsulados con generación automática de hash. 
 **LocalStorage**  Persistencia de usuario y mensajes localmente. 
 **Font Awesome**  Iconografía moderna y accesible. 

---

## 🧭 Demo

👉 [https://otrochatmas.com](https://otrochatmas-finalfrontend.vercel.app)

---