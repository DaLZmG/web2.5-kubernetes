FROM node:20-alpine AS builder

WORKDIR /app

COPY MyHeroTestApp/package.json .

# Instalar todas las dependencias para el build
RUN npm install

COPY MyHeroTestApp/ .

# Construir la aplicación
RUN npm run build

# Etapa de producción
FROM node:20-alpine AS runner

WORKDIR /app

# Establecer el entorno de producción
ENV NODE_ENV production

# Copiar package.json y package-lock.json
COPY --from=builder /app/package*.json ./

# Instalar solo las dependencias de producción
RUN npm install --production --frozen-lockfile && \
    npm cache clean --force

# Copiar archivos necesarios
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Establecer el usuario no root por seguridad
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs && \
    chown -R nextjs:nodejs /app

USER nextjs

# Exponer el puerto que usa Next.js por defecto
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]
