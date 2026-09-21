# Production image for the Raspberry Pi stage (see docs/deployment-plan.md).
# Stage 1 builds the Eleventy static site; the runtime serves only _site plus
# the Caddyfile — no source, tooling, credentials, or Docker socket access.

FROM oven/bun:1 AS builder
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

FROM caddy:2-alpine
COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=builder /app/_site /srv
HEALTHCHECK --interval=30s --timeout=5s --retries=3 CMD wget -qO- http://127.0.0.1/healthz || exit 1
