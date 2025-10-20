# ByPeople - Prototipo Visual Estático

Este es un prototipo visual estático para revisar los flujos de registro (signup) y carga de archivos (uploader) de la plataforma ByPeople.

## Características

- **Flujo de registro completo**: Permite seleccionar entre "Creador" o "Marca/Agencia"
- **Formulario dinámico**: Muestra campos diferentes según el rol seleccionado
- **Mock de uploader**: Simulación de carga de archivos con:
  - Vista previa en tiempo real de imágenes y videos
  - Indicador de progreso de carga simulado
  - Mensaje de éxito
  - Grid de archivos subidos
- **Mensaje de éxito**: Confirmación visual con resumen de datos guardados
- **Almacenamiento local**: Los datos se guardan en localStorage del navegador
- **Diseño responsivo**: Adaptado para diferentes tamaños de pantalla
- **Sin dependencias de build**: HTML, CSS y JavaScript puro

## Cómo visualizar

### Opción 1: Abrir directamente el archivo
Simplemente abre `index.html` en tu navegador web.

### Opción 2: Servidor local
Para evitar problemas con CORS, puedes usar un servidor local:

```bash
# Con Python 3
cd prototype
python3 -m http.server 8080

# Con Node.js (si tienes npx)
cd prototype
npx http-server -p 8080

# Con PHP
cd prototype
php -S localhost:8080
```

Luego abre http://localhost:8080 en tu navegador.

### Opción 3: GitHub Pages
Este prototipo está disponible en GitHub Pages (si está habilitado para este branch).

## Estructura de archivos

```
prototype/
├── index.html    # Página principal con toda la estructura HTML
├── styles.css    # Estilos CSS (sin Tailwind, CSS puro)
├── script.js     # Lógica JavaScript para interactividad
└── README.md     # Esta documentación
```

## Flujos de usuario

### Flujo de Creador
1. Click en "Soy creador" en el hero o seleccionar "Creador" en el formulario
2. Llenar nombre y bio
3. **Subir portfolio** (solo para creadores):
   - Seleccionar archivo de imagen o video
   - Ver progreso de carga simulado
   - Ver preview del archivo subido
   - Opción de subir múltiples archivos
4. Click en "Guardar perfil"
5. Ver mensaje de éxito con resumen

### Flujo de Marca/Agencia
1. Click en "Soy marca" en el hero o seleccionar "Marca / Agencia" en el formulario
2. Llenar nombre y bio
3. Click en "Guardar perfil" (no hay uploader para marcas)
4. Ver mensaje de éxito con resumen

## Tecnologías utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos personalizados basados en el diseño system de ByPeople
- **JavaScript (Vanilla)**: Sin frameworks, JavaScript puro
- **Google Fonts**: Poppins e Inter

## Colores del diseño system

- **Charcoal**: `#1A1A1A` - Texto principal
- **Terracotta**: `#E27D60` - Botones primarios, marca
- **Sun Yellow**: `#F9D45C` - Creadores, CTAs
- **Off White**: `#FAF8F3` - Fondo principal
- **Beige**: `#EDEAE4` - Cajas de información
- **Soft Gray**: `#D8D5CE` - Bordes y divisores

## Notas de implementación

- El uploader es una simulación client-side - no sube archivos a ningún servidor
- Los archivos se convierten a Data URLs y se almacenan en memoria
- La "subida" incluye un delay de 1.5 segundos para simular el proceso real
- Los datos del formulario se guardan en localStorage
- No hay validación de servidor - es solo un prototipo visual

## Próximos pasos

Este prototipo sirve para:
- Validar flujos de usuario
- Revisar diseño y UX
- Compartir con stakeholders
- Usar como referencia para implementación en Next.js

Para la implementación final, se debe:
- Integrar con la API de Cloudinary para uploads reales
- Conectar con Supabase/backend para guardar perfiles
- Añadir validación de servidor
- Implementar autenticación
- Agregar manejo de errores robusto
