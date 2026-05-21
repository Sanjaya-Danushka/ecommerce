---
name: testing-ecommerce
description: Test the Nike ecommerce app end-to-end. Use when verifying product listing, cart, or theme changes.
---

# Testing the Nike Ecommerce App

## Prerequisites

- PostgreSQL running locally
- Node.js and pnpm installed

## Devin Secrets Needed

- `DATABASE_URL` — PostgreSQL connection string (for local testing: `postgresql://testuser:testpass@localhost:5432/ecommerce`)
- `BETTER_AUTH_SECRET` — any string for local dev (e.g. `test-secret-key-12345`)
- `BETTER_AUTH_URL` — typically `http://localhost:3000`

For production/staging testing, a Neon database URL would be needed instead.

## Local Database Setup

If no Neon credentials are available, set up a local PostgreSQL:

```bash
sudo -u postgres psql -c "CREATE USER testuser WITH PASSWORD 'testpass';"
sudo -u postgres psql -c "CREATE DATABASE ecommerce OWNER testuser;"
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE ecommerce TO testuser;"
```

## Switching DB Driver for Local Testing

The app uses Neon's HTTP driver by default (`db/index.ts`). For local PostgreSQL testing, temporarily swap to `pg` driver:

```typescript
// db/index.ts — local testing version
import { Pool } from "pg"
import { drizzle } from "drizzle-orm/node-postgres"
import * as schema from "./schema"

const pool = new Pool({ connectionString: process.env.DATABASE_URL! })
export const db = drizzle(pool, { schema })
```

Also update `db/seed.ts` imports similarly if seeding locally. Install `pg` and `@types/pg` if not already present.

**Important**: Do NOT commit the driver swap. Revert before pushing.

## Running the App

```bash
# Push schema and seed data
DATABASE_URL='postgresql://testuser:testpass@localhost:5432/ecommerce' pnpm db:push
DATABASE_URL='postgresql://testuser:testpass@localhost:5432/ecommerce' npx tsx db/seed.ts

# Start dev server
DATABASE_URL='postgresql://testuser:testpass@localhost:5432/ecommerce' \
BETTER_AUTH_SECRET='test-secret-key-12345' \
BETTER_AUTH_URL='http://localhost:3000' \
pnpm dev
```

The app runs at `http://localhost:3000`.

## Key Test Scenarios

### 1. Homepage Product Grid
- Navigate to `/`
- Verify "Nike Store" header, "Featured Products" heading
- Verify exactly 8 product cards (Nike Air Max 90, Air Force 1 '07, Dunk Low Retro, Pegasus 42, Blazer Mid '77 Vintage, Air Jordan 1 Retro High OG, React Infinity Run Flyknit 4, Metcon 9)
- Each card shows: name, description, price ($X.XX format), category badge, "Add to Cart" button
- Footer: "© 2026 Nike Store. Built with Next.js, Drizzle ORM & shadcn/ui."

### 2. Cart Badge (Zustand)
- Cart button in header should have NO badge when empty
- Click "Add to Cart" on any product → badge appears with "1"
- Click on different product → badge shows "2"
- Click same product again → badge shows "3" (quantity increments)
- **Known past bug**: Using `useCartStore((s) => s.totalItems)` returns a stable function ref that never triggers re-renders. The fix uses `useCartStore((s) => s.items)` with inline `.reduce()`.

### 3. Dark Mode
- Press 'd' key to toggle dark/light mode
- Background and text colors should change visibly
- Press 'd' again to toggle back

## Common Issues

- **Nike CDN image 404s**: Some product image URLs from Nike's CDN may return 404 over time. This is cosmetic, not a code bug.
- **Turbopack hot-reload after driver swap**: If you swap `db/index.ts` while the dev server is running, Turbopack might try to use the old driver. Kill and restart the dev server cleanly.
- **`pg` package not installed**: The default setup uses `@neondatabase/serverless`. Install `pg` and `@types/pg` for local testing.
