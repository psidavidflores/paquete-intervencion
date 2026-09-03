# Kit Intervención — catálogo para GitHub Pages

Página estática lista para publicarse en el repositorio público de GitHub Pages.

## Archivos principales

- `docs/index.html`: estructura y contenido de la página.
- `docs/styles.css`: identidad visual, tarjetas y adaptación responsive.
- `docs/app.js`: catálogo, búsqueda, filtros y explorador interno de archivos.
- `docs/resources.json`: índice de los 778 archivos publicados, organizado por categoría.
- `docs/resources-inline.js`: copia del índice para que la página también funcione al abrirla localmente.
- `docs/previews/`: miniaturas de la primera página de los PDF para el catálogo.
- `docs/site-config.js`: correo de contacto opcional del catálogo.
- `docs/assets/brand-logo.jpg`: logotipo de Gestión Psicológica.
- `recursos/`: biblioteca completa organizada por categorías; la página muestra cada archivo con su vista previa y permite descargarlo.

## Flujo de acceso

Hotmart se configura fuera de este catálogo. El enlace de entrega o redirección de Hotmart debe llevar a:

`https://psidavidflores.github.io/paquete-intervencion/`

Desde esta página el comprador explora las categorías, abre una categoría, busca dentro de ella, revisa las miniaturas y descarga cada recurso. También puede preparar una descarga ZIP de una sección cuando su tamaño permite hacerlo desde el navegador. El catálogo no contiene botones de compra ni enlaces de Hotmart.

## Publicación

1. Subir todo el contenido de esta carpeta al directorio raíz del repositorio.
2. Confirmar los cambios en la rama `main`.
3. Configurar GitHub Pages con `main` y `/docs`.
4. Abrir `https://psidavidflores.github.io/paquete-intervencion/`.

## Nota de distribución

Este repositorio es público. Solo deben colocarse aquí el catálogo y los recursos autorizados para publicación. Los tests protegidos, manuales, baremos, claves y datos clínicos no deben subirse a este repositorio. GitHub no verifica compras de Hotmart: cualquier persona que tenga el enlace podrá ver o descargar los archivos publicados.

Los recursos están fuera de `docs` para que la página publicada sea liviana. `docs/resources.json` contiene únicamente el índice de rutas; los archivos siguen alojados en las carpetas públicas del repositorio.

Cuando se incorporen nuevos PDF, ejecuta `scripts/generate_public_previews.py` para actualizar las miniaturas y el índice antes de publicar. Las secciones muy grandes mantienen la descarga individual para evitar que el navegador intente crear un ZIP de varios cientos de megabytes.
