# Portfolio Deployment Plan

**Status:** Future plan. The Portfolio remains on GitHub Pages until Pedro buys a domain and starts the Raspberry Pi deployment phase.

This document records the approved hosting stages and the researched deployment path for a Raspberry Pi running UmbrelOS with an existing Cloudflare Tunnel.

## 1. Hosting stages

### Stage 1 — GitHub Pages

The Eleventy redesign should first build, test, and deploy as a static site on GitHub Pages. This is the initial public release and must not be blocked by future home infrastructure.

### Stage 2 — Raspberry Pi canonical host

After the domain is purchased and the infrastructure is ready:

- The apex domain is canonical.
- `www` redirects to the apex domain.
- The Portfolio runs as a private Docker Compose stack managed through Portainer on UmbrelOS.
- Caddy serves only generated static files.
- Cloudflare Tunnel is the only public path to the origin.
- GitHub Pages remains a recoverable static fallback.

## 2. Preconditions for Stage 2

Do not begin the migration until all of these are true:

- A domain has been purchased and added to the correct Cloudflare account.
- The Raspberry Pi architecture and supported container platform are verified.
- Portainer is installed from the Umbrel App Store.
- The location of `cloudflared`—host or container—is known.
- The existing Tunnel is healthy and under Pedro's control.
- The generated site passes its release checks on GitHub Pages.
- The Compose definition and rollback procedure are stored outside Portainer.

The exact domain, Tunnel identifier, local service URL, and image digest remain placeholders until this phase begins.

## 3. Approved UmbrelOS shape

Umbrel's supported path for software outside its app stores is to install Portainer and run custom Docker containers or Compose stacks there. The Portfolio should therefore use one private, version-controlled Compose stack.

Do not package the Portfolio as a community app. That model adds app-store metadata and compatibility maintenance intended for distributed software, with no useful benefit for one privately operated static site.

## 4. Production image

Use a multi-stage container image:

1. A Node build stage installs locked dependencies, validates content, and generates the Eleventy output.
2. A minimal Caddy runtime stage receives only the generated static output and the static-server configuration.

The runtime container must not contain:

- Source-control credentials
- Cloudflare tokens
- SSH keys
- Docker socket access
- Privileged mode
- Writable application data
- Build tooling that is not needed to serve static files

Caddy serves plain HTTP only on the private origin connection. Cloudflare terminates browser-facing TLS.

## 5. Tunnel topology

The correct origin URL depends on where `cloudflared` runs.

### `cloudflared` on the Umbrel host

- Publish Caddy only on a loopback address such as `127.0.0.1:{port}:80`.
- Configure the Tunnel origin to use the corresponding local HTTP URL.

### `cloudflared` in Docker

- Attach `cloudflared` and the Portfolio service to a dedicated private Docker network.
- Publish no Portfolio port on the host.
- Route the Tunnel to the Portfolio service name on port 80.

A container's `localhost` refers to that container, not the host. The future runbook must detect the actual topology instead of guessing.

### Public boundary

- Do not expose router ports 80 or 443.
- Do not bind the origin to a public interface.
- Do not expose Umbrel, Portainer, SSH, the Docker socket, or deployment controls through the Portfolio hostname.
- Keep administration limited to a trusted LAN or separately protected private-access method.

## 6. Domain and Cloudflare

When the domain is purchased:

1. Confirm it is active in the intended Cloudflare zone.
2. Publish the apex hostname through the existing Tunnel.
3. Redirect `www` to the apex hostname.
4. Allow Cloudflare to provision and terminate public HTTPS.
5. Configure canonical and alternate-language URLs using the final domain.
6. Verify DNS, certificate issuance, redirects, headers, sitemap, RSS, and representative localized pages.

No public origin certificate is required when `cloudflared` connects over private HTTP to Caddy. Do not disable TLS verification for unrelated configurations.

## 7. Build and release promotion

Use a build-remote, activate-by-pull model:

1. GitHub Actions runs formatting, content validation, tests, and the Eleventy build.
2. CI builds a `linux/arm64` production image after the Raspberry Pi architecture is verified.
3. CI publishes the image to GHCR with an immutable release or commit tag and records its digest.
4. Pedro manually approves the release.
5. Portainer redeploys the stack using the approved immutable digest.
6. Verification checks both container health and the public Cloudflare hostname.

Do not deploy `latest`. Do not give GitHub Actions long-lived SSH access to the Raspberry Pi, and do not introduce automatic image-polling updates before manual promotion is proven reliable.

## 8. Health and rollback

The future Compose definition should include a health check that requests `/healthz` or `/` from inside the container.

A successful deployment requires:

- Healthy container status
- Successful public HTTPS response
- Correct canonical and locale metadata
- Working Home, Work, Writing, About, and representative detail pages
- No broken assets or internal links

Retain at least two previous verified image digests. If public verification fails, redeploy the last known-good digest and repeat the checks. Container health alone is insufficient because it cannot detect DNS, Tunnel, or Cloudflare edge failures.

Optional external uptime monitoring may be added later; it is not a launch requirement.

## 9. Backup and recovery

Keep these independently of the running container:

- Source repository
- Compose definition
- Caddy configuration
- Cloudflare hostname and Tunnel notes without secrets
- Current and previous verified image digests
- Domain renewal and account-recovery information in a secure password manager

The Portfolio has no application data volume. Recovery should consist of restoring the stack definition, selecting a verified image digest, reconnecting the Tunnel route, and validating the public site.

## 10. Deferred execution checklist

When Pedro is ready to deploy:

1. Buy and activate the domain in Cloudflare.
2. Confirm domain spelling, canonical apex choice, and renewal settings.
3. Verify Raspberry Pi architecture, Portainer, and `cloudflared` topology.
4. Replace all placeholders in the deployment configuration.
5. Build and verify the first immutable ARM64 image.
6. Deploy the private Portainer stack.
7. Add the Tunnel hostname route.
8. Verify HTTPS and the complete public checklist.
9. Promote the new domain as canonical.
10. Preserve or redirect the GitHub Pages version as the fallback strategy requires.

These are future human-approved actions. This documentation task does not change DNS, Cloudflare, UmbrelOS, Portainer, containers, or GitHub Pages deployment.

## 11. Primary references

- Umbrel, custom Docker containers: https://umbrel.com/support/apps/running-custom-docker-containers
- Umbrel community app-store model: https://github.com/getumbrel/umbrel-community-app-store
- Cloudflare Tunnel overview: https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/
- Cloudflare published applications: https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/routing-to-tunnel/
- Cloudflare Tunnel DNS records: https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/routing-to-tunnel/dns/
- Cloudflare Universal SSL: https://developers.cloudflare.com/ssl/edge-certificates/
- Cloudflare Tunnel origin parameters: https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/configure-tunnels/origin-parameters/
- Docker Compose health checks: https://docs.docker.com/reference/compose-file/services/#healthcheck
- GitHub Actions, publishing Docker images: https://docs.github.com/en/actions/use-cases-and-examples/publishing-packages/publishing-docker-images
- GitHub Actions secrets guidance: https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions
