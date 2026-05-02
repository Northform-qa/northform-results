# northform-results

Static branded results site for Northform QA clients.

Live at: **https://results.northformqa.ca**

Each client gets a dashboard at `/[slug]/` showing suite pass/fail counts and links to full Playwright HTML reports.

---

## Adding a client

1. Create `clients/[slug]/config.json` — copy from `clients/client-northformqa/config.json`
2. Fill in `displayName`, `brandColour`, and `suites`
3. Commit and push — Vercel redeploys automatically

**Config schema:**

```json
{
  "slug": "client-acme",
  "displayName": "Acme Corp",
  "brandColour": "#e63946",
  "logoUrl": "/logos/acme.svg",
  "suites": [
    {
      "name": "Playwright E2E",
      "type": "playwright",
      "reportUrl": "https://northform-qa.github.io/northform/[slug]/latest/",
      "lastRun": "2026-05-02T00:00:00Z",
      "passed": 12,
      "failed": 0,
      "total": 12
    }
  ]
}
```

`logoUrl` is optional. Place logo files in `public/logos/`.

Suite types: `playwright` | `lighthouse` | `api` | `accessibility` | `load`

---

## Updating results

Results are static snapshots. Update `config.json` manually or via a CI workflow that writes updated pass/fail counts after each run.

---

## Development

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # production build → dist/
npm run preview   # preview built output
```

## Deployment

Deployed to Vercel free tier. Push to `main` triggers a redeploy.

Custom domain: `results.northformqa.ca` — configure in Vercel project settings and add a CNAME DNS record pointing to `cname.vercel-dns.com`.
