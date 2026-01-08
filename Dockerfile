FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:1.27-alpine
RUN apk add --no-cache gettext


# фронт (Vite: dist, CRA: build — поправь если нужно)
COPY --from=builder /app/dist /usr/share/nginx/html

# nginx шаблоны
COPY ./nginx/http.conf.template /etc/nginx/templates/http.conf.template
COPY ./nginx/https.conf.template /etc/nginx/templates/https.conf.template

# entrypoint + watcher
COPY ./docker/entrypoint.sh /entrypoint.sh
COPY ./docker/reload-watcher.sh /reload-watcher.sh
RUN chmod +x /entrypoint.sh /reload-watcher.sh

ENTRYPOINT ["/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
