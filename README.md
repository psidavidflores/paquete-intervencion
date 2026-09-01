# Kit Intervención — catálogo para GitHub Pages

Página estática lista para publicarse en el repositorio público de GitHub Pages.

## Archivos principales

- `index.html`: estructura y contenido de la página.
- `styles.css`: identidad visual, tarjetas y adaptación responsive.
- `app.js`: catálogo, búsqueda, filtros, modal de detalle y navegación.
- `site-config.js`: enlaces de Hotmart y correo de contacto.
- `assets/brand-logo.jpg`: logotipo de Gestión Psicológica.

## Configurar Hotmart

Abrir `site-config.js` y pegar los enlaces reales en los campos `hotmartLinks`:

```js
window.SITE_CONFIG = {
  contactEmail: "tu-correo@ejemplo.com",
  hotmartLinks: {
    all: "https://pay.hotmart.com/ENLACE-BIBLIOTECA",
    individual: "https://pay.hotmart.com/ENLACE-INDIVIDUAL",
    pack: "https://pay.hotmart.com/ENLACE-PACK",
    tests: "https://pay.hotmart.com/ENLACE-TESTS"
  }
};
```

Mientras los enlaces estén vacíos, la página mostrará un aviso y no enviará al visitante a una dirección ficticia.

## Publicación

1. Subir todos los archivos y carpetas al directorio raíz del repositorio.
2. Confirmar los cambios en la rama `main`.
3. Mantener GitHub Pages configurado con `main` y `/root`.
4. Abrir `https://psidavidflores.github.io/paquete-intervencion/`.

## Nota de distribución

Este repositorio es público. Solo deben colocarse aquí el catálogo, las muestras y los recursos autorizados para publicación. Los tests protegidos, manuales, baremos, claves y datos clínicos no deben subirse a este repositorio.
