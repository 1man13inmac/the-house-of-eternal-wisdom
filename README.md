# The Living Library

> A civilisational wisdom archive · A digital monastery · A curated canon · A modern mystery school

[![CI](https://github.com/1man13inmac/the-house-of-eternal-wisdom/actions/workflows/ci.yml/badge.svg)](https://github.com/1man13inmac/the-house-of-eternal-wisdom/actions/workflows/ci.yml)

---

## What Is This?

The Living Library is a production-grade digital platform for preserving and exploring humanity's philosophical, spiritual, scientific, symbolic, and initiatory inheritance.

Think:
- Library of Alexandria
- Nalanda Mahavihara
- House of Wisdom (Baghdad)
- Tibetan monastic libraries
- Pythagorean schools

Combined into a modern knowledge architecture.

## What We Are Building

| Layer | Description |
|-------|-------------|
| Library Archive | Canonical text database with 100+ foundational texts |
| Learning System | Guided journeys with prerequisites and progression tracking |
| Personal Knowledge | Journals, annotations, highlights, personal collections |
| Community System | Thoughtful discussions, study circles, scholar profiles |
| Discovery Engine | Semantic recommendations and knowledge graph |
| AI Layer | Contextual study assistant with citation integrity |
| Commerce Layer | Memberships (Stripe) and affiliate book links |

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Database**: PostgreSQL via Supabase + Prisma ORM
- **Auth**: Supabase Auth (email, OAuth, magic links)
- **AI**: OpenAI API (GPT-4o + embeddings)
- **Payments**: Stripe
- **Monorepo**: Turborepo + pnpm
- **Deployment**: Vercel

## Repository Structure

```
/apps
  /web        — Main public platform (Next.js 14, port 3000)
  /admin      — Admin dashboard (Next.js 14, port 3001)
  /docs       — Developer documentation (Next.js 14, port 3002)

/packages
  /config     — Shared ESLint & Tailwind configuration
  /types      — TypeScript type definitions
  /database   — Prisma schema & client singleton
  /ui         — Shared React components
  /ai         — AI integration layer (OpenAI)
  /utils      — Shared utilities
  /content-engine — Content ingestion & validation
  /search-engine  — Search query building & indexing

/supabase     — Supabase migrations & RLS policies
/docs         — Enterprise documentation
/scripts      — Data ingestion & utility scripts
```

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm 8+
- PostgreSQL (or Supabase account)

### Installation

```bash
# Install dependencies
pnpm install

# Copy environment file
cp .env.example .env.local
# Fill in your Supabase, OpenAI, and Stripe credentials

# Generate Prisma client
pnpm db:generate

# Push schema to database
pnpm db:push

# Seed initial data
pnpm db:seed

# Start development
pnpm dev
```

### Development URLs

- Web app: http://localhost:3000
- Admin: http://localhost:3001
- Docs: http://localhost:3002

## Core Principles

1. **Canon Standard** — All content classified: Primary Source · Commentary · Scholarship · Speculative
2. **Knowledge Confidence** — AI responses tagged: Consensus · Debated · Traditional · Speculative · Symbolic
3. **Text Lineage** — Manuscript history, translation timeline, textual variants
4. **Parallel Concept Mapping** — Cross-tradition connections without false equivalences
5. **Slow Internet Philosophy** — Contemplative UX, no dopamine mechanics, no engagement farming
6. **Source Transparency** — Every claim traces to a citation

## Documentation

Full enterprise documentation is in [`/docs`](./docs/README.md):

- [Architecture Overview](./docs/architecture/overview.md)
- [Canon Standard](./docs/content-policy/canon-standard.md)
- [Platform Governance](./docs/governance/roles.md)
- [AI Systems Design](./docs/ai-systems/study-assistant.md)
- [Deployment Guide](./docs/deployment/vercel.md)

## Contributing

This platform is in active development. Contributions welcome for:
- Content curation and classification
- Translation work
- Scholarly expertise
- Technical development
- Design and UX

---

*"A civilisational memory system. Not a website."*
