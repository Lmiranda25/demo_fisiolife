# Fisiolife — Fisioterapia Integral

Demo de rediseño para Fisiolife (clínica de fisioterapia, Lima).
**One-page compacta** en React + Vite + TypeScript + Tailwind + Framer Motion.

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

## 🧩 Estructura (one-page, 9 bloques de conversión)

Inspirada en referentes de conversión en salud (Hims/Hers, Zocdoc, One Medical):

1. **Hero** — promesa + 1 CTA dominante (agendar).
2. **Barra de confianza** — ventajas reales (experiencia, compromiso, profesionalismo).
3. **Servicios** — grid filtrable por categoría (los ~13 servicios reales).
4. **Cómo funciona** — 3 pasos (elimina la incertidumbre).
5. **Selector de consulta** — Presencial / Online / Domicilio → WhatsApp con contexto. ⭐
6. **Cobertura** — zonas de atención a domicilio en Lima.
7. **Testimonios** — prueba social.
8. **Staff** — el equipo / Alex Silva, breve.
9. **Contacto** — formulario (Formspree con fallback a WhatsApp) + cierre.

Más **WhatsApp flotante** siempre visible.

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
