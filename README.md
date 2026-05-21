# Nike Ecommerce Store

A modern ecommerce application built with the following stack:

- **[Next.js 16](https://nextjs.org/)** — React framework with App Router & Turbopack
- **TypeScript** — Type-safe development
- **[Tailwind CSS v4](https://tailwindcss.com/)** — Utility-first styling
- **[shadcn/ui](https://ui.shadcn.com/)** — Accessible component library (Nova preset)
- **[Drizzle ORM](https://orm.drizzle.team/)** — Type-safe SQL ORM
- **[Neon](https://neon.tech/)** — Serverless PostgreSQL
- **[Better Auth](https://www.better-auth.com/)** — Authentication (email & password)
- **[Zustand](https://zustand.docs.pmnd.rs/)** — Lightweight state management (cart)

## Getting Started

### 1. Install dependencies

```bash
pnpm install
```

### 2. Set up environment variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

| Variable             | Description                        |
| -------------------- | ---------------------------------- |
| `DATABASE_URL`       | Neon PostgreSQL connection string   |
| `BETTER_AUTH_SECRET`  | Random secret for auth sessions    |
| `BETTER_AUTH_URL`     | App URL (`http://localhost:3000`)   |

### 3. Push schema & seed the database

```bash
pnpm db:push
pnpm db:seed
```

### 4. Run the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command             | Description                          |
| -------------------- | ------------------------------------ |
| `pnpm dev`           | Start dev server with Turbopack      |
| `pnpm build`         | Production build                     |
| `pnpm start`         | Start production server              |
| `pnpm lint`          | Run ESLint                           |
| `pnpm typecheck`     | Run TypeScript type checking         |
| `pnpm format`        | Format code with Prettier            |
| `pnpm db:generate`   | Generate Drizzle migrations          |
| `pnpm db:migrate`    | Run Drizzle migrations               |
| `pnpm db:push`       | Push schema directly to database     |
| `pnpm db:studio`     | Open Drizzle Studio                  |
| `pnpm db:seed`       | Seed database with Nike products     |

## Project Structure

```
├── app/
│   ├── api/auth/[...all]/   # Better Auth API route
│   ├── globals.css           # Tailwind & shadcn theme
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Homepage (server component, queries DB)
├── components/
│   ├── ui/                   # shadcn/ui components
│   ├── cart-button.tsx       # Cart icon with item count
│   ├── product-card.tsx      # Product display card
│   ├── product-list.tsx      # Product grid
│   └── theme-provider.tsx    # Dark mode provider
├── db/
│   ├── index.ts              # Drizzle client (Neon)
│   ├── schema.ts             # Database schema (products, auth tables)
│   └── seed.ts               # Seed script with Nike products
├── lib/
│   ├── auth.ts               # Better Auth server config
│   ├── auth-client.ts        # Better Auth client
│   └── utils.ts              # Utility functions
├── store/
│   └── cart-store.ts         # Zustand cart store
├── drizzle.config.ts         # Drizzle Kit config
└── .env.example              # Environment variables template
```
