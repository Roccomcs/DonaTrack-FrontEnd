# Instrucciones para Implementar Landing Page de DonaTrack

## 📋 Descripción General

DonaTrack es una plataforma de donaciones transparentes que conecta donantes con beneficiarios, permitiendo el seguimiento verificado de cada donación mediante fotografías.

## 🎯 Objetivos de la Landing Page

La landing page debe cumplir con los siguientes requisitos:

1. **Presentación del sistema**: Mostrar el propósito y objetivos de DonaTrack
2. **Donaciones destacadas**: Mostrar ejemplos de donaciones realizadas en el último mes
3. **Galería pública**: Visualización de fotos de donaciones sin necesidad de login
4. **Acceso al sistema**: Enlaces de registro e inicio de sesión para donantes y beneficiarios
5. **Información legal**: Términos de servicio, política de privacidad y aviso legal

## 🛠 Stack Tecnológico

- **Framework**: React con TypeScript
- **Estilos**: Tailwind CSS v4
- **Iconos**: lucide-react
- **Componentes de imagen**: ImageWithFallback personalizado
- **Build Tool**: Vite (configurado automáticamente)

## 📦 Dependencias Requeridas

```json
{
  "dependencies": {
    "react": "^18.x",
    "react-dom": "^18.x",
    "lucide-react": "latest"
  },
  "devDependencies": {
    "@types/react": "^18.x",
    "@types/react-dom": "^18.x",
    "typescript": "^5.x",
    "vite": "^5.x",
    "tailwindcss": "^4.x"
  }
}
```

### Instalación de dependencias

```bash
pnpm install lucide-react
```

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── App.tsx                    # Componente principal
│   └── components/
│       └── figma/
│           └── ImageWithFallback.tsx  # Componente de imagen con fallback
├── styles/
│   ├── theme.css                  # Variables CSS y tokens
│   └── fonts.css                  # Importaciones de fuentes
└── imports/                       # Assets importados (si aplica)
```

## 🎨 Diseño y Componentes

### 1. Header/Navegación

**Ubicación**: Sticky en la parte superior
**Características**:
- Logo de DonaTrack con icono de corazón
- Navegación con enlaces a secciones (Acerca de, Donaciones, Galería, Contacto)
- Botones de "Iniciar sesión" y "Registrarse"
- Responsive: menú oculto en móvil

**Código**:
```tsx
<header className="sticky top-0 z-50 bg-white border-b border-gray-200">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
    <div className="flex items-center gap-2">
      <Heart className="text-red-500" size={32} />
      <span className="text-2xl font-bold text-gray-900">DonaTrack</span>
    </div>
    <nav className="hidden md:flex gap-6">
      <a href="#about">Acerca de</a>
      <a href="#donations">Donaciones</a>
      <a href="#gallery">Galería</a>
      <a href="#contact">Contacto</a>
    </nav>
    <div className="flex gap-3">
      <button>Iniciar sesión</button>
      <button>Registrarse</button>
    </div>
  </div>
</header>
```

### 2. Sección Hero

**Características**:
- Título principal con propuesta de valor
- Descripción del servicio
- Botones CTA (Call to Action)
- Estadísticas destacadas (donaciones, familias, satisfacción)
- Imagen principal

**Datos mock**:
```tsx
const stats = {
  donaciones: "2,847",
  familias: "1,234",
  satisfaccion: "98%"
}
```

### 3. Sección de Propósito y Objetivos

**Características**:
- Título: "Nuestro Propósito"
- 3 tarjetas de características principales:
  1. **Transparencia Total**: Seguimiento en tiempo real con fotos
  2. **Conexión Directa**: Sin intermediarios innecesarios
  3. **Verificación Fotográfica**: Documentación de cada entrega

**Iconos utilizados**:
- CheckCircle (Transparencia)
- Users (Conexión)
- Camera (Verificación)

### 4. Donaciones Destacadas del Mes

**Características**:
- Grid de 3 columnas (responsive)
- Cada tarjeta muestra:
  - Imagen de la donación
  - Nombre del donante
  - Fecha
  - Tipo de donación
  - Beneficiario
  - Botón "Ver detalles"

**Estructura de datos mock**:
```tsx
const featuredDonations = [
  {
    id: 1,
    donorName: "María González",
    item: "Ropa de invierno",
    date: "15 de marzo, 2026",
    beneficiary: "Centro Comunitario Norte",
    image: "URL_IMAGEN"
  },
  // ... más donaciones
]
```

**URLs de imágenes de Unsplash**:
1. `https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=400&h=300&fit=crop`
2. `https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=300&fit=crop`
3. `https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&h=300&fit=crop`

### 5. Galería de Donaciones

**Características**:
- Título: "Galería de donaciones"
- Grid de 4 columnas (2 en móvil)
- Efecto hover con overlay
- Acceso sin login

**Estructura de datos mock**:
```tsx
const recentDeliveries = [
  {
    id: 1,
    image: "URL_IMAGEN",
    title: "Entrega de útiles escolares"
  },
  // ... más entregas
]
```

**URLs de imágenes**:
1. `https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=300&h=300&fit=crop`
2. `https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=300&h=300&fit=crop`
3. `https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=300&h=300&fit=crop`
4. `https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=300&h=300&fit=crop`

### 6. Sección CTA (Call to Action)

**Características**:
- Fondo degradado (rojo a naranja)
- Título llamativo
- 2 botones:
  - "Registrarme como donante"
  - "Registrarme como beneficiario"

### 7. Footer

**Características**:
- 4 columnas de información:
  1. **Branding**: Logo y tagline
  2. **Enlaces Rápidos**: Navegación principal
  3. **Acceso**: Links de login y registro
  4. **Contacto**: Email, teléfono y ubicación

**Información de contacto**:
- Email: info@donatrack.org
- Teléfono: +52 55 1234 5678
- Ubicación: Buenos Aires, Argentina

**Enlaces legales**:
- Términos de Servicio
- Política de Privacidad
- Aviso Legal

## 🎨 Paleta de Colores

```css
/* Colores principales */
--color-primary: #ef4444;      /* Red-500 */
--color-primary-dark: #dc2626; /* Red-600 */
--color-primary-light: #fef2f2; /* Red-50 */

/* Colores secundarios */
--color-secondary: #f97316;    /* Orange-500 */
--color-secondary-light: #fff7ed; /* Orange-50 */

/* Grises */
--color-gray-50: #f9fafb;
--color-gray-100: #f3f4f6;
--color-gray-200: #e5e7eb;
--color-gray-600: #4b5563;
--color-gray-900: #111827;
```

## 📱 Responsive Design

### Breakpoints de Tailwind

- **sm**: 640px - Smartphones grandes
- **md**: 768px - Tablets
- **lg**: 1024px - Desktops
- **xl**: 1280px - Pantallas grandes

### Adaptaciones por dispositivo

1. **Móvil (< 768px)**:
   - Navegación oculta (considerar menú hamburguesa)
   - Grid de 1-2 columnas
   - Botones apilados verticalmente
   - Espaciado reducido

2. **Tablet (768px - 1024px)**:
   - Navegación visible
   - Grid de 2-3 columnas
   - Espaciado medio

3. **Desktop (> 1024px)**:
   - Layout completo
   - Grid de 3-4 columnas
   - Espaciado completo

## 🔧 Componente ImageWithFallback

Este componente debe existir en `src/app/components/figma/ImageWithFallback.tsx`:

```tsx
import React from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className,
  ...props
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      {...props}
    />
  );
};
```

## 🚀 Pasos de Implementación

### Paso 1: Verificar estructura del proyecto

```bash
# Verificar que existen los directorios necesarios
ls -la src/app/
ls -la src/app/components/figma/
```

### Paso 2: Instalar dependencias

```bash
pnpm install lucide-react
```

### Paso 3: Crear componente ImageWithFallback (si no existe)

Crear el archivo `src/app/components/figma/ImageWithFallback.tsx` con el código proporcionado arriba.

### Paso 4: Implementar el componente principal App.tsx

Copiar el código completo del archivo `App.tsx` proporcionado.

### Paso 5: Verificar estilos de Tailwind

Asegurarse de que `src/styles/theme.css` contiene los estilos base necesarios.

### Paso 6: Probar la aplicación

El servidor de desarrollo debe estar corriendo automáticamente. Verificar que todas las secciones se muestren correctamente.

## 🔄 Futuras Mejoras (Con Supabase)

Cuando se conecte Supabase, se pueden implementar:

### 1. Autenticación
- Registro de usuarios (donantes y beneficiarios)
- Login con email/password
- Autenticación con redes sociales

### 2. Base de Datos
- Tabla `donations`: Registro de donaciones
- Tabla `users`: Perfiles de usuarios
- Tabla `photos`: Fotos de verificación
- Tabla `beneficiaries`: Organizaciones beneficiarias

### 3. Storage
- Almacenamiento de imágenes de donaciones
- Optimización de imágenes
- CDN para mejor rendimiento

### 4. Funciones Edge
- Validación de donaciones
- Notificaciones automáticas
- Procesamiento de imágenes

## 📊 Esquema de Base de Datos (Para Supabase)

```sql
-- Tabla de usuarios
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255),
  user_type VARCHAR(50) CHECK (user_type IN ('donor', 'beneficiary')),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Tabla de donaciones
CREATE TABLE donations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  donor_id UUID REFERENCES users(id),
  beneficiary_id UUID REFERENCES users(id),
  item VARCHAR(255) NOT NULL,
  description TEXT,
  status VARCHAR(50) CHECK (status IN ('pending', 'delivered', 'verified')),
  created_at TIMESTAMP DEFAULT NOW(),
  delivered_at TIMESTAMP
);

-- Tabla de fotos
CREATE TABLE photos (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  donation_id UUID REFERENCES donations(id),
  photo_url TEXT NOT NULL,
  uploaded_by UUID REFERENCES users(id),
  created_at TIMESTAMP DEFAULT NOW()
);
```

## 🔐 Consideraciones de Seguridad

1. **No almacenar PII sin consentimiento**: Make no está diseñado para datos sensibles
2. **Validar todas las entradas**: Prevenir XSS y SQL injection
3. **Usar HTTPS**: Todas las comunicaciones deben ser encriptadas
4. **Autenticación segura**: Implementar 2FA cuando sea posible
5. **Políticas CORS**: Configurar correctamente los orígenes permitidos

## 📝 Notas Importantes

- Las imágenes utilizan Unsplash como fuente
- Todos los datos mostrados son MOCK (datos de ejemplo)
- La aplicación es completamente frontend hasta que se conecte Supabase
- El componente `ImageWithFallback` es necesario para nuevas imágenes
- No usar `npm run build` o `vite build` (no funciona en este entorno)
- El servidor de desarrollo ya está corriendo automáticamente

## 🎯 Checklist de Implementación

- [ ] Instalar lucide-react
- [ ] Verificar existencia de ImageWithFallback
- [ ] Copiar código de App.tsx
- [ ] Verificar que todas las secciones se muestren
- [ ] Probar navegación entre secciones
- [ ] Verificar responsive en diferentes tamaños
- [ ] Comprobar que las imágenes carguen correctamente
- [ ] Verificar enlaces del footer
- [ ] Probar botones CTA
- [ ] Validar accesibilidad básica

## 📚 Recursos Adicionales

- [Documentación de Tailwind CSS](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/)
- [React Documentation](https://react.dev/)
- [Unsplash API](https://unsplash.com/developers)
- [Supabase Docs](https://supabase.com/docs)

## 🤝 Soporte

Para problemas o dudas sobre la implementación:
- Revisar la documentación técnica
- Verificar la consola del navegador para errores
- Comprobar que todas las dependencias estén instaladas
- Validar que las rutas de importación sean correctas

---

**Versión del documento**: 1.0
**Fecha de creación**: 7 de abril de 2026
**Última actualización**: 7 de abril de 2026
