FROM node:20
WORKDIR /app

# Copia desde la carpeta correcta
COPY ./Isla_arena/package*.json ./

RUN npm install -g @angular/cli && npm install

# Copia TODO el código de la carpeta correcta
COPY ./Isla_arena/ .

RUN npm run build
RUN npm install -g http-server
EXPOSE 8080

# Cambia la última línea del Dockerfile a:
CMD ["http-server", "dist/Isla_arena/browser", "-p", "8080"]