# Deployment — Vercel

## Prerequisites

- Vercel account
- Supabase project created
- Environment variables configured

## Environment Variables

Configure these in Vercel Dashboard → Project → Settings → Environment Variables:

```bash
# Database
DATABASE_URL=postgresql://...
DIRECT_URL=postgresql://...

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# OpenAI
OPENAI_API_KEY=sk-...

# Stripe
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...

# App
NEXT_PUBLIC_APP_URL=https://your-domain.com
```

## Deployment Steps

1. Connect GitHub repository to Vercel
2. Set project root directory to repository root (`.`)
3. Set framework preset to Next.js
4. Configure install command: `pnpm install --frozen-lockfile`
5. Configure build command: `pnpm --filter @living-library/web build`
6. Configure output directory: leave default (Next.js)
7. Add environment variables
8. Deploy

## Recommended Runtime

- Node.js 20.x on Vercel
- pnpm 8.x (matches `packageManager` in root `package.json`)
- Commit `pnpm-lock.yaml` to guarantee reproducible installs in CI and production

## Admin App

Deploy `apps/admin` as a separate Vercel project:
1. Keep root directory at repository root (`.`)
2. Build command: `pnpm --filter @living-library/admin build`
3. Add authentication middleware (restrict to admin users)
4. Use a separate domain: `admin.your-domain.com`

## Vercel Configuration (vercel.json)

```json
{
  "buildCommand": "pnpm build",
  "installCommand": "pnpm install",
  "framework": "nextjs",
  "regions": ["iad1"]
}
```
