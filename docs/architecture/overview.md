# Architecture Overview

## System Architecture

The Living Library is built as a **Turborepo monorepo** with three applications and eight shared packages.

```
┌─────────────────────────────────────────────────────────┐
│                    THE LIVING LIBRARY                    │
│                   Turborepo Monorepo                    │
├────────────────┬──────────────┬────────────────────────┤
│   apps/web     │ apps/admin   │      apps/docs          │
│  (port 3000)   │ (port 3001)  │     (port 3002)         │
│                │              │                          │
│  Next.js 14    │  Next.js 14  │     Next.js 14          │
│  App Router    │  App Router  │   Documentation         │
│  Public site   │  Admin UI    │   Developer Docs        │
└────────────────┴──────────────┴────────────────────────┘
                          │
         ┌────────────────┴────────────────┐
         │         Shared Packages          │
         ├──────────────────────────────────┤
         │  @living-library/types           │
         │  @living-library/database        │
         │  @living-library/ui              │
         │  @living-library/config          │
         │  @living-library/ai              │
         │  @living-library/utils           │
         │  @living-library/content-engine  │
         │  @living-library/search-engine   │
         └──────────────────────────────────┘
                          │
         ┌────────────────┴────────────────┐
         │         Infrastructure           │
         ├──────────────────────────────────┤
         │  Supabase (Auth + DB + Storage)  │
         │  PostgreSQL (via Prisma ORM)     │
         │  OpenAI API (AI features)        │
         │  Stripe (Memberships)            │
         │  Vercel (Deployment)             │
         └──────────────────────────────────┘
```

## Application Layers

### 8 System Layers

| Layer | Application | Purpose |
|-------|-------------|---------|
| Library Archive | `apps/web` | Canonical text database and browsing |
| Learning System | `apps/web` | Guided journeys and progression tracking |
| Personal Knowledge | `apps/web` | Journals, annotations, notes |
| Community System | `apps/web` | Discussions, circles, groups |
| Discovery Engine | `packages/search-engine` | Recommendations and relationships |
| AI Layer | `packages/ai` | Contextual study assistant |
| Commerce Layer | `apps/web` | Books, memberships, affiliate links |
| Admin Layer | `apps/admin` | Content moderation and management |

## Data Flow

```
User → Next.js App Router → API Routes → Prisma → PostgreSQL (Supabase)
                                       ↗
                             Supabase Auth (JWT)
                                       ↘
                             OpenAI API (AI features)
```

## Key Technical Decisions

### Why Next.js 14 App Router?
- Server-side rendering for SEO (critical for a content platform)
- React Server Components for performance
- Built-in routing, metadata, and image optimization
- First-class Vercel deployment

### Why Supabase?
- Built-in auth (email, OAuth, magic links)
- Row-Level Security for fine-grained data access
- Real-time subscriptions for live features
- PostgreSQL — proper relational database with full-text search
- Generous free tier for initial launch

### Why Turborepo?
- Shared packages (types, UI, config) without duplication
- Build caching for CI efficiency
- Clear separation of concerns between apps
- Easy to add new apps (mobile, API service) later

### Why Prisma?
- Type-safe database access
- Schema-first development
- Excellent migration tooling
- Compatible with Supabase PostgreSQL

## Security Architecture

- **Row-Level Security**: All user data gated by Supabase RLS policies
- **Authentication**: Supabase Auth (JWT-based, never exposed to client)
- **Input Validation**: Zod schemas for all API inputs
- **XSS Prevention**: React's built-in escaping + Content Security Policy headers
- **CSRF Protection**: SameSite cookies + Next.js CSRF protections
- **Rate Limiting**: Applied to AI endpoints and auth routes
