# Static site (HTML/CSS/JS) served by Caddy
FROM caddy:2-alpine
# Copy everything in the repo (filtered by .dockerignore) to the web root
COPY . /usr/share/caddy
# Caddy serves /usr/share/caddy by default on port 80 (no need to expose here)