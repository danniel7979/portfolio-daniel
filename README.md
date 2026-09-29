# Portfolio de Daniel Porteiro Rodríguez

Sitio estático en HTML y CSS. Incluye diez páginas de proyectos, la foto de perfil y el currículum PDF.

## Abrir en Visual Studio Code

Descomprime el ZIP, abre PowerShell dentro de la carpeta `portfolio-daniel` y ejecuta:

```powershell
code .
```

Si `code` no está configurado, usa **Archivo → Abrir carpeta** en Visual Studio Code. Abre `index.html` en el navegador. También puedes iniciar un servidor local:

```powershell
py -m http.server 5500
```

Después entra en http://localhost:5500/ y detén el servidor con Ctrl+C.

## Colocar las fotos

Guarda tus fotos en `assets/projects/` como archivos JPG. Cada proyecto admite tres imágenes. La primera aparecerá además en la tarjeta de la página principal. La web conserva las ilustraciones de las tarjetas y los espacios de galería mientras no existan tus fotos.

| Proyecto | Nombres de archivo |
| --- | --- |
| Portergram | `portergram-1.jpg`, `portergram-2.jpg`, `portergram-3.jpg` |
| Jornada Laboral | `jornada-laboral-1.jpg`, `jornada-laboral-2.jpg`, `jornada-laboral-3.jpg` |
| Fisio Clinic | `fisio-clinic-1.jpg`, `fisio-clinic-2.jpg`, `fisio-clinic-3.jpg` |
| Cabañas Madera | `cabanas-madera-1.jpg`, `cabanas-madera-2.jpg`, `cabanas-madera-3.jpg` |
| Flores | `flores-1.jpg`, `flores-2.jpg`, `flores-3.jpg` |
| Kebap | `kebap-1.jpg`, `kebap-2.jpg`, `kebap-3.jpg` |
| Restaurante | `restaurante-1.jpg`, `restaurante-2.jpg`, `restaurante-3.jpg` |
| Peluquería | `peluqueria-1.jpg`, `peluqueria-2.jpg`, `peluqueria-3.jpg` |
| Pescadería | `pescaderia-1.jpg`, `pescaderia-2.jpg`, `pescaderia-3.jpg` |
| Dulces | `dulces-1.jpg`, `dulces-2.jpg`, `dulces-3.jpg` |

Las imágenes horizontales funcionan mejor. JPG es el formato que carga este proyecto; si tus capturas son PNG o WebP, expórtalas como JPG. La foto `-1` puede ser una portada o captura general, `-2` una vista de uso y `-3` un detalle.

Las fotos que guardes en tu ordenador aparecerán en la copia local. Para verlas en la web privada publicada, hay que subir una nueva versión del sitio.

## Archivos

- `index.html`: portada, tarjetas y enlaces.
- `proyectos/*.html`: fichas de cada proyecto.
- `styles.css`: diseño y adaptación a móvil, tablet y escritorio.
- `gallery.js`: muestra tus fotos si están presentes, sin dejar imágenes rotas cuando faltan.
- `assets/`: fotografía de perfil e ilustraciones actuales.
- `CV_Daniel_Porteiro.pdf`: descarga del currículum.

Para cambiar textos o enlaces, edita el HTML. Para cambiar colores, tamaños y distribución, edita `styles.css`. No requiere Node.js ni paquetes npm.
