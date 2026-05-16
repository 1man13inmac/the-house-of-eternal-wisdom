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
2. Set root directory to `apps/web`
3. Configure build command: `cd ../.. && pnpm build --filter @living-library/web`
4. Configure install command: `pnpm install`
5. Add environment variables
6. Deploy

## Admin App

Deploy `apps/admin` as a separate Vercel project:
1. Set root directory to `apps/admin`
2. Add authentication middleware (restrict to admin users)
3. Use a separate domain: `admin.your-domain.com`

## Vercel Configuration (vercel.json)

```json
{
  "buildCommand": "pnpm build",
  "installCommand": "pnpm install",
  "framework": "nextjs",
  "regions": ["iad1"]
}
```
