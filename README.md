# ByPeople — Starter (Next.js + Tailwind + Cloudinary + Stripe)

Este repositorio es un scaffold inicial para ByPeople (hubb.mx-inspired). Incluye:
- Next.js + TypeScript frontend
- Tailwind CSS
- API routes: Cloudinary upload, Stripe webhook handler
- DB schema para Postgres / Supabase

Requisitos
- Node.js 18+
- Yarn or npm
- Cuenta Cloudinary (usar credenciales)
- Cuenta Stripe (usar test keys) — opcional por ahora
- Supabase o Postgres (opcional pero recomendado)

Instalación local
1. Clona el repositorio
2. Copia .env.example → .env.local y completa las variables
3. Instala dependencias
   - npm install
   - o yarn
4. Inicia dev server
   - npm run dev
   - o yarn dev
5. Abre http://localhost:3000

Estructura principal
- pages/ - páginas Next.js
- pages/api/ - endpoints API (Cloudinary upload, Stripe webhook stub)
- components/ - componentes React reutilizables
- lib/ - utilidades (Cloudinary, DB schema)
- styles/ - CSS global y Tailwind
- public/ - logos e imágenes públicas

Deploy
- Recomendado: Vercel para Next.js. Añade las variables de entorno en el dashboard de Vercel.
- Para Supabase: crea un proyecto y aplica el SQL schema en `lib/db-schema.sql`.

Qué sigue después de este scaffold
- Conectar Supabase Auth y crear flujos de registro (creador / marca).
- Implementar conexión con Instagram/TikTok (API/Auth).
- Flow de creación de campaña y carga de contenido (ya hay API de Cloudinary lista).
- Checkout Stripe con lógica de retención 50% / 50% y webhook para liberar pagos.
