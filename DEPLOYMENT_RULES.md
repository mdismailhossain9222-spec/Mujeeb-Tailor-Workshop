# Cloudflare Deployment Rules & Protocol

This file serves as a strict guideline for all future deployments in this project and any Cloudflare Workers/Pages projects managed in this workspace.

---

## 1. Default URL Restriction

- The default Cloudflare URL (`[project].mdismailhossain9222.workers.dev` or `[project].pages.dev`) must **ONLY** be used for internal verification and developer testing.
- It must **NEVER** be presented as the final public URL to the client or in client-facing deliverables.

---

## 2. Custom Domain First Policy

- Whenever a project is ready for production, final review, or client presentation:
  1. First check if a custom domain (e.g., `sabar.dev`, `sabar.com`, or the client's official custom domain) is attached to the worker / project.
  2. If a custom domain is **NOT** attached, immediately remind the user/client to purchase and attach a custom domain before final delivery.

---

## 3. Custom Domain Attachment & Verification Protocol

- **Attachment:** When a custom domain is provided, attach it to the Worker/Pages project using:
  ```bash
  npx wrangler domains add <custom-domain> --project-name=<project-name>
  ```
  or via Cloudflare Dashboard / API.
- **Verification:** Once attached, verify that the custom domain resolves, returns `HTTP 200 OK`, and routes traffic properly to the Worker without SSL or routing errors.
