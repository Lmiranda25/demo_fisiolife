# Fisiolife — Fisioterapia Integral

Demo de rediseño para Fisiolife (clínica de fisioterapia, Lima).
**Multipágina** (vistas separadas con su propia URL) en React + Vite +
TypeScript + Tailwind + Framer Motion + React Router (HashRouter).

Sitio de referencia: https://www.fisiolife.com.pe/

---

## 🚀 Comandos

```bash
npm install      # solo la primera vez
npm run dev      # desarrollo: http://localhost:5173
npm run build    # compila a /dist
npm run preview  # previsualiza el build
```

---

## 🌐 Despliegue manual a GitHub Pages (sin GitHub Actions)

Usa **rutas relativas** (`base: './'`), así funciona en cualquier repo sin
reconfigurar y sin imágenes rotas. Al ser one-page (sin router) tampoco hay
rutas que rompan al recargar.

```bash
npm run deploy
```
Esto compila y publica `dist` en la rama **`gh-pages`**.
Luego en GitHub: **Settings → Pages → Source: rama `gh-pages` / `/(root)`**.
Tu web quedará en `https://TU-USUARIO.github.io/TU-REPO/`.

> `public/.nojekyll` ya está incluido (evita que Pages ignore carpetas).

---

## 🧩 Vistas (cada una con su propia URL)

| Ruta          | Contenido                                                        |
| ------------- | --------------------------------------------------------------- |
| `/`           | Home (resumen): hero, servicios destacados, pasos, selector, testimonios + accesos a las demás vistas |
| `/servicios`  | Todos los servicios filtrables + cómo funciona + selector de consulta |
| `/cobertura`  | Zonas de atención a domicilio en Lima                           |
| `/blog`       | Blog filtrable (6 artículos) con modal de lectura               |
| `/nosotros`   | Equipo, ventajas y testimonios                                  |
| `/contacto`   | Formulario (Formspree con fallback a WhatsApp) + datos          |

Más **WhatsApp flotante** siempre visible. Funcionalidades de conversión:
selector de consulta (Presencial/Online/Domicilio → WhatsApp con contexto),
grid de servicios filtrable, formulario y WhatsApp flotante.

> Usa **HashRouter**: las URLs llevan `#` (ej. `/#/servicios`). Es lo que
> garantiza que el routing funcione en GitHub Pages al recargar cualquier vista.

---

## 🖼️ Imágenes (todas locales, no hay enlaces externos)

- `public/images/reciclada/` → recicladas de fisiolife.com.pe (logo, instalaciones, etc.).
- `public/images/stock/` → libres de Unsplash (fisioterapia, domicilio, avatares).

---

## ⚙️ Pendiente del cliente (placeholders en `src/lib/constants.ts`)

| Constante            | Qué hacer                                              |
| -------------------- | ----------------------------------------------------- |
| `FORMSPREE_ENDPOINT` | Crear form gratis en https://formspree.io y pegar ID. |
| `CONTACT.waLink`     | Ya apunta a su wa.link real; ajustar si cambia.       |

Si Formspree no se configura, el formulario deriva el mensaje a **WhatsApp**.

Contenido a reemplazar por datos reales: `src/data/content.ts` (testimonios, zonas).

---

## 🎨 Paleta (derivada del logo de Fisiolife)

| Color       | Hex       | Uso                       |
| ----------- | --------- | ------------------------- |
| Azul marino | `#1B4F8A` | Color principal           |
| Navy profundo | `#102F54` | Headers, footer, hero   |
| Verde       | `#48A832` | Acentos, CTAs, vitalidad  |
| Blanco roto | `#F7FAFC` | Fondo base                |
```
