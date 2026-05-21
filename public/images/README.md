# 📸 Recursos de Imágenes - Casa Castro Web

Aquí van TODAS las imágenes y videos del sitio. Sigue la estructura de carpetas para organizar tus archivos.

## 📁 Estructura de Carpetas

```
images/
├── home/               👈 Imágenes página principal
│   ├── hero.jpg
│   ├── piscina-feature.jpg
│   └── bbq-feature.jpg
│
├── hero/               👈 Encabezados de secciones
│   ├── amenidades.jpg
│   ├── tienda.jpg
│   └── recorrido-virtual.jpg
│
├── amenities/          👈 Características/amenidades (7 imágenes)
│   ├── piscina.jpg
│   ├── bbq.jpg
│   ├── casa-cerrada.jpg
│   ├── cocina.jpg
│   ├── sala.jpg
│   ├── jardin.jpg
│   └── aire-acondicionado.jpg
│
├── rooms/              👈 Habitaciones (2 imágenes)
│   ├── seccion-1.jpg   (Casa principal - 10 pax)
│   └── seccion-2.jpg   (Anexo privado - 7 pax)
│
├── gallery/            👈 Galería completa (8 imágenes)
│   ├── 1-fachada.jpg
│   ├── 2-piscina.jpg
│   ├── 3-sala.jpg
│   ├── 4-cocina.jpg
│   ├── 5-habitacion.jpg
│   ├── 6-bbq.jpg
│   ├── 7-jardin.jpg
│   └── 8-noche.jpg
│
├── shop/               👈 Productos/servicios (4 imágenes)
│   ├── kit-bbq.jpg
│   ├── checkout-tardio.jpg
│   ├── decoracion.jpg
│   └── limpieza-extra.jpg
│
├── tour/               👈 Recorrido virtual 360° (6 imágenes)
│   ├── entrada.jpg
│   ├── piscina.jpg
│   ├── sala.jpg
│   ├── cocina.jpg
│   ├── habitacion.jpg
│   └── bbq.jpg
│
└── video/              👈 Video y portada
    ├── tour-poster.jpg
    └── [tu-video.mp4]  (opcional)
```

---

## 📊 Resumen de Imágenes

| Sección | Cantidad | Ubicación |
|---------|----------|-----------|
| Home | 3 | `home/` |
| Hero (encabezados) | 3 | `hero/` |
| Amenidades | 7 | `amenities/` |
| Habitaciones | 2 | `rooms/` |
| Galería | 8 | `gallery/` |
| Tienda/Servicios | 4 | `shop/` |
| Recorrido 360° | 6 | `tour/` |
| Video | 1 poster | `video/` |
| **TOTAL** | **34 imágenes** | |

---

## 🚀 Cómo Usar

1. **Copia tus imágenes** en las carpetas correspondientes
2. **Respeta los nombres** indicados (ej: `piscina.jpg`, `bbq.jpg`)
3. **Edita** `src/data/images.ts` si necesitas cambiar nombres
4. **Guarda** y listo ✅

---

## 📝 Notas Importantes

✅ Usa formatos **JPG** o **WebP** (optimizados)  
✅ Comprime las imágenes para mejor rendimiento  
✅ Las resoluciones sugeridas están en cada README.md  
✅ Mantén la estructura de carpetas como está  
✅ Si no tienes una imagen, déjala en blanco en el JSON

---

## 🎥 Sobre el Video

Actualmente usa un video de Mixkit. Para usar tu propio video:

1. Coloca el video en `video/`
2. Actualiza `src/data/images.ts`:
   ```typescript
   tourUrl: "/images/video/mi-video.mp4"
   ```
3. También actualiza la portada en `tour-poster.jpg`

---

**¿Necesitas ayuda?** Revisa el README.md en cada carpeta para detalles específicos.
