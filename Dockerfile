# --- Build stage: install deps and generate static export ---
FROM node:20-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# --- Runtime stage: serve the static export with Nginx ---
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

# next.config.ts sets output: "export", so `next build` writes static files to /app/out
COPY --from=builder /app/out /usr/share/nginx/html/

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 CMD wget -qO- http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
