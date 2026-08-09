# Use staged static hosting

The redesigned Portfolio will remain on GitHub Pages until Pedro owns a domain and is ready to operate the Raspberry Pi deployment. The future canonical deployment will run the Eleventy output in a Caddy container managed as a private Portainer Compose stack on UmbrelOS, exposed only through Cloudflare Tunnel; CI will publish immutable ARM64 images to GHCR for manual promotion and rollback, while GitHub Pages remains an available fallback.
