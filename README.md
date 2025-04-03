# Web2.5 Kubernetes

Aplicación Next.js containerizada y preparada para despliegue en Kubernetes.

## Estructura del Proyecto

- `MyHeroTestApp/`: Directorio principal de la aplicación Next.js
- `Dockerfile`: Configuración para la construcción de la imagen Docker
- `.dockerignore`: Archivos y directorios excluidos de la imagen Docker

## Construcción y Ejecución

Para construir la imagen Docker:

```bash
docker build -t my-nextjs-app .
```

Para ejecutar el contenedor:

```bash
docker run -p 3000:3000 my-nextjs-app
```

La aplicación estará disponible en `http://localhost:3000`.