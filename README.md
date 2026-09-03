# Kit Intervención — catálogo para GitHub Pages

Página estática lista para publicarse en el repositorio público de GitHub Pages.

## Archivos principales

- `docs/index.html`: estructura y contenido de la página.
- `docs/styles.css`: identidad visual, tarjetas y adaptación responsive.
- `docs/app.js`: catálogo, búsqueda, filtros, modal de detalle y navegación.
- `docs/site-config.js`: correo de contacto opcional del catálogo.
- `docs/assets/brand-logo.jpg`: logotipo de Gestión Psicológica.
- `recursos/`: biblioteca completa organizada por categorías; se abre desde el explorador público de GitHub para ver o descargar cada archivo.

## Flujo de acceso

Hotmart se configura fuera de este catálogo. El enlace de entrega o redirección de Hotmart debe llevar a:

`https://psidavidflores.github.io/paquete-intervencion/`

Desde esta página el comprador explora las categorías, abre las carpetas públicas del repositorio y descarga los archivos que necesite. El catálogo no contiene botones de compra ni enlaces de Hotmart.

## Publicación

1. Subir todo el contenido de esta carpeta al directorio raíz del repositorio.
2. Confirmar los cambios en la rama `main`.
3. Configurar GitHub Pages con `main` y `/docs`.
4. Abrir `https://psidavidflores.github.io/paquete-intervencion/`.

## Nota de distribución

Este repositorio es público. Solo deben colocarse aquí el catálogo y los recursos autorizados para publicación. Los tests protegidos, manuales, baremos, claves y datos clínicos no deben subirse a este repositorio. GitHub no verifica compras de Hotmart: cualquier persona que tenga el enlace podrá ver o descargar los archivos publicados.

Los recursos están fuera de `docs` para que la página publicada sea liviana. Las tarjetas llevan a las carpetas públicas del repositorio, donde cada comprador puede abrir o descargar el archivo que necesite.
