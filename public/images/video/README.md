# Recursos de Video

Videos y portadas para el recorrido.

## Archivos esperados:

- **tour-poster.jpg** - Imagen de portada/miniatura del video (aparece antes de reproducir)
- **tour.mp4** - (Opcional) Tu video local

## 🎥 Sistema de Video - Fallback Automático

### ¿Cómo funciona?

1. **Si tienes video local** (`public/images/video/tour.mp4`):
   - Se reproduce ese archivo
   - Tienes controles: Play/Pause y Volumen
   - Puedes pausar y controlar el video

2. **Si NO tienes video local** (o el archivo no existe):
   - Se usa automáticamente el video de YouTube
   - ⏯️ **Se reproduce automáticamente**
   - 🚫 **Sin controles de pausa, avance ni sonido**
   - Solo reproducción continua

### Video de YouTube (Fallback)

**URL del video:** https://www.youtube.com/watch?v=lP8zVVk3AwQ

**Configuración automática:**
- ✅ Autoplay activado
- 🔇 Sin controles de usuario
- 🔁 Reproducción en bucle
- 🤐 Sin interfaz de YouTube

---

## 📝 Cómo Usar tu Propio Video

### Opción 1: Video Local (Recomendado)

1. **Coloca tu video** en esta carpeta con el nombre `tour.mp4`
2. **Formato:** MP4 (H.264)
3. **Resolución:** 1920x1080 (o similar)
4. **Duración:** 30-90 segundos

```
public/images/video/
├── tour.mp4          👈 Tu video aquí
├── tour-poster.jpg
└── README.md
```

### Opción 2: Cambiar el Video de YouTube

Si quieres usar otro video de YouTube, edita `src/data/images.ts`:

```typescript
tourUrlFallback: "https://www.youtube.com/embed/[TU_VIDEO_ID]?autoplay=1&controls=0&modestbranding=1&fs=0&loop=1"
```

**Pasos:**
1. Copia el ID del video: https://www.youtube.com/watch?v=**lP8zVVk3AwQ**
2. Reemplaza `lP8zVVk3AwQ` por tu ID

---

## 📊 Comparación

| Función | Video Local | YouTube Fallback |
|---------|-------------|-----------------|
| Reproducción automática | ✅ | ✅ |
| Pause/Play | ✅ | ❌ |
| Control de volumen | ✅ | ❌ |
| Barra de progreso | ✅ | ❌ |
| Requiere conexión | ❌ | ✅ |

---

## 💡 Recomendaciones

✅ **Usa video local** para mejor control y rendimiento  
✅ **YouTube es fallback** para cuando no tengas video propio  
✅ **Optimiza tu video** (comprime, 1920x1080, H.264)  
✅ **La portada debe ser impactante** (resolución 1920x1080)

---

## 🔧 Archivos Relacionados

- `src/data/images.ts` - URLs del video
- `src/components/TourVideo.tsx` - Componente que maneja ambos tipos
- `src/data/virtualTour.ts` - Exporta las URLs

