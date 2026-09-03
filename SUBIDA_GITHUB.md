# Guía de sustitución del contenido en GitHub

Este paquete reemplaza la publicación inicial que solo tenía la carpeta de enfado.

## Contenido que se sube

Sube el contenido completo de `publicacion-github-completa` al repositorio `psidavidflores/paquete-intervencion`:

- `docs/`: catálogo visual, explorador interno y buscador de archivos.
- `docs/resources.json`: índice de los 778 archivos publicados.
- `recursos/`: las 11 áreas y las 3 subáreas de juegos.
- `.gitattributes`: preparación para los dos videos que necesitan Git LFS.
- `README.md`: documentación del paquete.

## Configuración de Pages

Después de subir el contenido, en **Settings → Pages** selecciona:

- Branch: `main`.
- Folder: `/docs`.

La dirección pública seguirá siendo:

`https://psidavidflores.github.io/paquete-intervencion/`

## Carga por etapas

No intentes enviar los 3,74 GB en un único envío. Haz varios commits, por ejemplo:

1. `docs/` y `recursos/control-enfado/`.
2. `recursos/atencion/`, `recursos/estimulacion-lenguaje/`, `recursos/inteligencias-multiples/` y `recursos/adulto-mayor/`.
3. `recursos/autismo/`, `recursos/super-educativo/`, `recursos/tdah/` y `recursos/sindrome-down/`.
4. `recursos/terapia-lenguaje/`.
5. `recursos/juegos-interactivos/` por sus subcarpetas.

Los dos videos de más de 100 MiB requieren Git LFS. GitHub bloquea esos archivos en una carga Git normal. Git LFS tampoco publica archivos directamente como parte de GitHub Pages; por eso el catálogo muestra el índice de archivos y enlaza cada recurso a GitHub para verlo o descargarlo.

## Advertencia de acceso

El flujo previsto es: Hotmart confirma la compra y redirige al comprador a `https://psidavidflores.github.io/paquete-intervencion/`. El catálogo no solicita pagos ni muestra enlaces de compra; sirve para explorar y descargar.

El repositorio es público y GitHub no comprueba quién compró: cualquier persona que obtenga la URL podrá acceder a los archivos publicados.
