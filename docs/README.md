# The Living Library — Enterprise Documentation

> A civilisational wisdom archive · A digital monastery · A curated canon · A scholarly index

---

## Documentation Structure

| Directory | Contents |
|-----------|----------|
| `/architecture` | System architecture, tech stack, monorepo structure |
| `/database` | Prisma schema reference, ER diagrams, data models |
| `/api` | API reference for all endpoints |
| `/content-policy` | Canon Standard, classification policies, editorial guidelines |
| `/deployment` | Vercel, Docker, VPS, Supabase deployment guides |
| `/governance` | Content governance, curator roles, moderation policies |
| `/ai-systems` | AI assistant design, confidence system, prompt engineering |
| `/community` | Community guidelines, reputation system, discussion standards |
| `/design-system` | Visual design language, typography, color system |

---

## Quick Reference

### Development

```bash
# Install dependencies
pnpm install

# Start all apps in development
pnpm dev

# Build all apps
pnpm build

# Database operations
pnpm db:generate  # Generate Prisma client
pnpm db:push      # Push schema to database
pnpm db:seed      # Seed initial data
pnpm db:studio    # Open Prisma Studio

# Run specific app
pnpm --filter @living-library/web dev
pnpm --filter @living-library/admin dev
```

### Key Principles

1. **Primary sources first** — Commentary second — Modern interpretation third
2. **Always cite sources** — Every claim must trace to a source
3. **Preserve nuance** — Never flatten traditions or force equivalencies
4. **Canon Standard** — All content classified by source type and confidence
5. **Slow Internet philosophy** — Contemplative UX, no dopamine mechanics

---

*For the complete vision, see `/docs/architecture/vision.md`*
