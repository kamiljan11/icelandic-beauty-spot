# Eldfjall Beauty — Beauty Salon Demo (Icelandic)

**Status:** sales demo · **Built by** [Kamil Jan](https://kamiljan.com)

Demo site for a Reykjavík beauty salon built around treatments using Icelandic natural
ingredients. **Written entirely in Icelandic** — for this customer segment an English demo
would undersell the point.

## What this repo is — and is not

This is a **demonstration site**, not a live business. Eldfjall Beauty is a fictional beauty salon invented
to show a specific kind of prospective client what their own site could look and feel like,
before they commit to anything.

The commercial context: [Reykjawwwik](https://reykjawwwik.is) sells small Icelandic businesses
a designed, unique website. Sending a link beats describing a mockup, so each target trade
gets a finished demo it can recognise itself in — a salon owner sees their own language and their own trade.

No real customer data, no real bookings, no payment integration. Any names, prices, reviews
and photos are placeholders.

## What it shows

- Treatment menu for face and body
- Product line presentation
- Booking enquiry flow
- Icelandic-language copy throughout

## Stack

React + TypeScript · Vite · React Router · Tailwind CSS · Playwright for E2E · hosted on
Lovable. No backend — a demo has nothing to persist.

## Running locally

```bash
npm install
npm run dev
```

```bash
npm run lint
npm run build
npx playwright test
```

## How security is handled

Nothing sensitive lives here by design: no backend, no database, no keys, no real personal
data. Even so, the repo runs the same gates as the production systems in this account — each
push triggers build, lint, typecheck, Playwright E2E, Semgrep static analysis and a Gitleaks
secret scan, and a pre-commit hook blocks credential-shaped strings. A demo repo is exactly
where standards quietly slip, so it does not get an exemption.

## Licence

Proprietary. Published for reference, not for reuse.
