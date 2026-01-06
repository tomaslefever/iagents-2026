# iAgents - Next.js Application

Aplicación web moderna construida con Next.js 14, React, y Tailwind CSS para iAgents AI.

## Características

- ⚡️ Next.js 14 con App Router
- 🎨 Tailwind CSS para estilos
- 🔄 Componentes React reutilizables
- 📱 Diseño responsive
- 🌙 Modo oscuro
- 🎯 SEO optimizado
- ⚡️ Rendimiento optimizado

## Estructura del Proyecto

```
├── app/
│   ├── data/           # Datos JSON para chats
│   ├── globals.css     # Estilos globales
│   ├── layout.tsx      # Layout principal
│   └── page.tsx        # Página principal
├── components/
│   ├── home/           # Componentes de la página principal
│   ├── Header.tsx      # Navegación principal
│   ├── Footer.tsx      # Pie de página
│   ├── ChatWidget.tsx  # Widget de chat
│   └── ...
└── public/             # Archivos estáticos
```

## Desarrollo

1. Instalar dependencias:
   ```bash
   npm install
   ```

2. Configurar variables de entorno:
   ```bash
   cp .env.example .env.local
   ```
   Edita `.env.local` con tus valores:
   ```
   NEXT_PUBLIC_LEAD_WEBHOOK_URL=tu_webhook_url
   NEXT_PUBLIC_AGENT_ID=tu_agent_id
   ```

3. Iniciar servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abrir en el navegador:
   ```
   http://localhost:3000
   ```

## Construcción (Build)

Para generar los archivos optimizados para producción:

```bash
npm run build
npm start
```

Los archivos se generarán en la carpeta `.next/`.

## Tecnologías

- **Next.js 14** - Framework React
- **React 18** - Biblioteca UI
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework CSS
- **Lucide React** - Iconos
- **Intl Tel Input** - Input de teléfono internacional

## Rutas Disponibles

- `/` - Página principal
- `/productos/crm` - Producto CRM
- `/productos/agentes` - Producto Agentes
- `/productos/mcp` - Producto MCP
- `/productos/voz` - Producto Voz
- `/soluciones/*` - Páginas de soluciones
- `/integraciones` - Integraciones
- `/privacy` - Privacidad
- `/login-register` - Login/Registro

## Notas

- El proyecto usa el App Router de Next.js 14
- Los componentes están optimizados para SSR/SSG
- Los estilos usan Tailwind CSS con configuración personalizada
- El widget de chat se inicializa automáticamente en el layout
