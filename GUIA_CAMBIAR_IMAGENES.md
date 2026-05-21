## 📸 GUÍA PARA CAMBIAR LAS IMÁGENES

¡Todo está centralizado en `src/data/images.ts`! Solo edita ese archivo y los cambios aparecerán en todo el sitio.

---

## 📁 ESTRUCTURA DE CARPETAS RECOMENDADA

Crea esta estructura en la carpeta `public/images/`:

```
public/
├── images/
│   ├── home/
│   │   ├── hero.jpg              👈 Imagen principal de inicio
│   │   ├── piscina-feature.jpg   👈 Sección piscina en home
│   │   └── bbq-feature.jpg       👈 Sección BBQ en home
│   ├── hero/
│   │   ├── amenidades.jpg        👈 Encabezado de Amenidades
│   │   ├── tienda.jpg            👈 Encabezado de Tienda
│   │   └── recorrido-virtual.jpg 👈 Encabezado Recorrido Virtual
│   ├── amenities/
│   │   ├── piscina.jpg           👈 Piscina privada
│   │   ├── bbq.jpg               👈 Zona BBQ
│   │   ├── casa-cerrada.jpg      👈 Casa privada
│   │   ├── cocina.jpg            👈 Cocina
│   │   ├── sala.jpg              👈 Sala de estar
│   │   ├── jardin.jpg            👈 Jardín
│   │   └── aire-acondicionado.jpg 👈 Aire acondicionado
│   ├── rooms/
│   │   ├── seccion-1.jpg         👈 Casa principal
│   │   └── seccion-2.jpg         👈 Anexo privado
│   ├── gallery/
│   │   ├── 1-fachada.jpg         👈 Fachada exterior
│   │   ├── 2-piscina.jpg         👈 Piscina
│   │   ├── 3-sala.jpg            👈 Sala
│   │   ├── 4-cocina.jpg          👈 Cocina
│   │   ├── 5-habitacion.jpg      👈 Habitación
│   │   ├── 6-bbq.jpg             👈 BBQ
│   │   ├── 7-jardin.jpg          👈 Jardín
│   │   └── 8-noche.jpg           👈 Vista nocturna
│   ├── shop/
│   │   ├── kit-bbq.jpg           👈 Kit BBQ (producto)
│   │   ├── checkout-tardio.jpg   👈 Check-out tardío
│   │   ├── decoracion.jpg        👈 Decoración
│   │   └── limpieza-extra.jpg    👈 Limpieza extra
│   ├── tour/
│   │   ├── entrada.jpg           👈 Entrada principal (360)
│   │   ├── piscina.jpg           👈 Piscina (360)
│   │   ├── sala.jpg              👈 Sala (360)
│   │   ├── cocina.jpg            👈 Cocina (360)
│   │   ├── habitacion.jpg        👈 Habitación (360)
│   │   └── bbq.jpg               👈 BBQ (360)
│   └── video/
│       └── tour-poster.jpg       👈 Portada del video
```

---

## 🎯 QUÉ CAMBIAR EN `src/data/images.ts`

Abre el archivo y edita SOLO las URLs (rutas de las imágenes):

### 1. **HOME** (Página principal)
```typescript
home: {
  hero: "/images/home/hero.jpg",              // Tu imagen principal
  poolFeature: "/images/home/piscina-feature.jpg",
  bbqFeature: "/images/home/bbq-feature.jpg",
}
```

### 2. **PAGE HERO** (Encabezados de secciones)
```typescript
pageHero: {
  amenidades: "/images/hero/amenidades.jpg",
  tienda: "/images/hero/tienda.jpg",
  recorridoVirtual: "/images/hero/recorrido-virtual.jpg",
}
```

### 3. **AMENITIES** (Características del lugar)
```typescript
amenities: {
  piscina: "/images/amenities/piscina.jpg",
  bbq: "/images/amenities/bbq.jpg",
  casaCerrada: "/images/amenities/casa-cerrada.jpg",
  cocina: "/images/amenities/cocina.jpg",
  sala: "/images/amenities/sala.jpg",
  jardin: "/images/amenities/jardin.jpg",
  aireAcondicionado: "/images/amenities/aire-acondicionado.jpg",
}
```

### 4. **ROOMS** (Habitaciones)
```typescript
rooms: {
  seccion1: "/images/rooms/seccion-1.jpg",  // Casa principal
  seccion2: "/images/rooms/seccion-2.jpg",  // Anexo privado
}
```

### 5. **GALLERY** (Galería - Array de imágenes)
```typescript
gallery: [
  {
    src: "/images/gallery/1-fachada.jpg",
    alt: "Fachada de la casa vacacional",
    category: "Exterior",
  },
  // ... más imágenes
]
```

### 6. **SHOP** (Tienda de servicios)
```typescript
shop: {
  kitBbq: "/images/shop/kit-bbq.jpg",
  checkoutTardio: "/images/shop/checkout-tardio.jpg",
  decoracion: "/images/shop/decoracion.jpg",
  limpiezaExtra: "/images/shop/limpieza-extra.jpg",
}
```

### 7. **VIRTUAL TOUR** (Recorrido 360°)
```typescript
virtualTour: {
  entrada: "/images/tour/entrada.jpg",
  piscina: "/images/tour/piscina.jpg",
  sala: "/images/tour/sala.jpg",
  cocina: "/images/tour/cocina.jpg",
  habitacion: "/images/tour/habitacion.jpg",
  bbq: "/images/tour/bbq.jpg",
}
```

### 8. **VIDEO** (Portada del video)
```typescript
video: {
  tourUrl: "URL_DEL_VIDEO_O_RUTA_LOCAL",
  tourPoster: "/images/video/tour-poster.jpg",
}
```

---

## 🔄 DÓNDE APARECEN LAS IMÁGENES

| Categoría | Dónde aparece | Archivo |
|-----------|---------------|---------|
| `home.hero` | Fondo grande en inicio | Home.tsx |
| `home.poolFeature` | Sección "Piscina privada" en home | Home.tsx |
| `home.bbqFeature` | Sección "Cenas al aire libre" en home | Home.tsx |
| `pageHero.*` | Encabezados de cada página | Amenidades, Tienda, Recorrido |
| `amenities.*` | Tarjetas en página Amenidades | site.ts → Amenidades.tsx |
| `rooms.*` | Tarjetas en página Habitaciones | site.ts → Habitaciones.tsx |
| `gallery.*` | Galería completa | site.ts → Galeria.tsx |
| `shop.*` | Productos en Tienda | shop.ts → Tienda.tsx |
| `virtualTour.*` | Recorrido interactivo 360° | virtualTour.ts → VirtualTour.tsx |
| `video.tourPoster` | Portada del video | virtualTour.ts → TourVideo.tsx |

---

## 📝 PASOS PARA CAMBIAR UNA IMAGEN

1. **Prepara tu foto** en la carpeta correcta de `public/images/`
2. **Abre** `src/data/images.ts`
3. **Edita la ruta** de la imagen que quieres cambiar
4. **Guarda el archivo**
5. **El cambio aparecerá automáticamente** en la página (si el servidor está corriendo)

### Ejemplo:
```typescript
// ANTES:
piscina: "/images/amenities/piscina.jpg"

// DESPUÉS:
piscina: "/images/amenities/mi-piscina-local.jpg"
```

---

## 💡 TIPS

✅ **Usa nombres descriptivos** para las imágenes  
✅ **Optimiza las imágenes** (comprime JPG, usa WebP si puedes)  
✅ **Mantén la estructura de carpetas** como se recomienda  
✅ **Si una imagen no tiene ruta local**, déjala como string vacío: `image: ""`  
✅ **Todas las rutas son relativas a `public/`**

---

## ❌ NO NECESITAS EDITAR MÁS ARCHIVOS

Los siguientes archivos **YA ESTÁN ACTUALIZADOS** para leer del JSON:

- ✅ `src/data/site.ts` (AMENITIES_FULL, ROOMS, GALLERY)
- ✅ `src/data/shop.ts` (SHOP_PRODUCTS)
- ✅ `src/data/virtualTour.ts` (TOUR_SCENES)
- ✅ `src/pages/Home.tsx`
- ✅ `src/pages/Amenidades.tsx`
- ✅ `src/pages/Tienda.tsx`
- ✅ `src/pages/RecorridoVirtual.tsx`

---

¡Ahora puedes cambiar todas las imágenes desde un solo archivo! 🎉
