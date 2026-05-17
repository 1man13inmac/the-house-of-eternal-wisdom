# THE LIVING LIBRARY
## AI Development Master Instructions
### Production Build Specification for GitHub Copilot / Claude / AI Coding Agents

---

# PROJECT OVERVIEW

You are building a production-grade digital platform called:

# "The Living Library"

The platform is:

- A civilisational wisdom archive
- A structured learning platform
- A digital humanities project
- A philosophical and contemplative study system
- A personal knowledge management platform
- A scholarly resource hub
- A social journaling and annotation platform
- A semantic discovery engine
- A future physical library/sanctuary foundation

This is NOT:
- a conspiracy platform
- pseudo-history website
- low-quality occult site
- “new age” content farm
- AI-generated misinformation system

The platform must maintain:
- historical integrity
- intellectual seriousness
- source transparency
- clean architecture
- accessibility
- scalability
- scholarly usability
- modern UX/UI quality

The visual identity should feel like:

- timeless
- contemplative
- elegant
- archival
- monastic
- scholarly
- cinematic
- premium
- calm
- intellectually rich

Inspiration references:
- Library of Alexandria
- medieval monastic libraries
- Tibetan archives
- sacred geometry
- Japanese minimalism
- modern digital humanities platforms
- Notion
- Are.na
- Internet Archive
- Britannica
- academic library systems

---

# CORE TECH STACK

Build using:

- Next.js (latest stable App Router)
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- Supabase
- PostgreSQL
- Prisma ORM
- Turborepo monorepo
- pnpm
- OpenAI API
- Vector embeddings support
- Stripe subscriptions
- Amazon affiliate integration placeholders
- PWA support
- SEO optimized architecture

---

# REPOSITORY STRUCTURE

Create a Turborepo monorepo structure.

Structure:

/apps
    /web
    /admin
    /docs

/packages
    /ui
    /config
    /types
    /database
    /ai
    /utils
    /content-engine
    /search-engine

/supabase
/docs
/scripts

---

# PRIMARY APPLICATIONS

## 1. WEB APP

Main public platform.

Features:
- library
- civilisation explorer
- text explorer
- learning paths
- journal system
- member profiles
- AI assistant
- semantic recommendations
- discussions
- article publishing
- timelines
- maps
- media archive

---

## 2. ADMIN APP

Admin dashboard.

Features:
- content moderation
- text approval
- affiliate management
- member management
- AI moderation tools
- analytics
- article publishing
- taxonomy management
- civilisation management
- comment moderation
- featured content controls

---

## 3. DOCS APP

Developer documentation and schema documentation.

---

# CORE DATABASE MODELS

Create production-grade Prisma schema models.

Models required:

- User
- Profile
- Membership
- Journal
- JournalEntry
- ReadingProgress
- Annotation
- Highlight
- Book
- TextEdition
- Author
- Tradition
- Civilization
- PhilosophySchool
- Topic
- Concept
- Symbol
- Practice
- TimelineEvent
- LearningPath
- Course
- Article
- Comment
- DiscussionThread
- CommunityGroup
- Recommendation
- AIConversation
- MediaResource
- VideoResource
- AudioResource
- Citation
- Translation
- GlossaryTerm
- HistoricalFigure
- SacredSite
- MapLocation
- AffiliateLink
- Publisher
- Tag
- UserRelationship
- Notification
- Bookmark
- Collection
- ScholarProfile
- ModeratorProfile

Use:
- UUIDs
- timestamps
- soft deletes
- proper indexes
- relational integrity
- row-level security support

---

# USER AUTHENTICATION

Use Supabase Auth.

Support:
- email/password
- magic links
- OAuth
- Google login
- GitHub login
- Apple login

Features:
- onboarding flow
- profile setup
- interests selection
- reading preference setup
- privacy controls

---

# USER EXPERIENCE

Each user has:

## Personal Library
- saved texts
- favorites
- collections
- bookmarks
- reading history

## Personal Journal
- public/private entries
- markdown editor
- media embedding
- tags
- visibility controls

## Reading Journey
- progress tracking
- completed texts
- learning paths
- milestones
- achievements

## Annotation System
- highlights
- comments
- cross references
- personal notes

## AI Study Assistant
- contextual explanations
- concept linking
- reading suggestions
- glossary generation
- timeline explanations

---

# COMMUNITY FEATURES

Build a high-quality intellectual community.

Features:

- discussion threads
- threaded comments
- reactions
- moderation
- reporting system
- reputation system
- scholar verification
- community groups
- study circles
- public journals
- member essays

DO NOT create addictive social media mechanics.

Avoid:
- vanity metrics
- algorithmic outrage
- engagement farming

Prioritize:
- thoughtful discourse
- long-form discussion
- citations
- respectful dialogue

---

# CONTENT ARCHITECTURE

Create structured content systems.

---

# CIVILISATION TAXONOMY

Include:

- Mesopotamian
- Egyptian
- Hebrew
- Greek
- Roman
- Persian
- Hindu
- Buddhist
- Taoist
- Confucian
- Japanese
- Norse
- Celtic
- Islamic
- African traditions
- Indigenous traditions
- Renaissance Hermetic
- Enlightenment philosophy

Each civilisation page requires:

- overview
- timeline
- map
- symbols
- language systems
- cosmology
- philosophy
- important figures
- foundational texts
- related traditions
- media resources

---

# SUBJECT TAXONOMY

Include:

- philosophy
- metaphysics
- ontology
- cosmology
- mysticism
- ethics
- logic
- sacred geometry
- alchemy
- mythology
- comparative religion
- symbolism
- ritual
- sacred science
- astronomy
- mathematics
- meditation
- language
- initiation systems
- political philosophy
- consciousness studies
- ecology
- oral traditions

---

# LEARNING PATHS

Create guided educational systems.

Examples:

- Introduction to Taoism
- Foundations of Greek Philosophy
- The Egyptian Mysteries
- Sacred Geometry Foundations
- Comparative Cosmology
- Hero’s Journey Across Civilisations
- The History of Mysticism
- Death and Afterlife Traditions

Each path should include:
- prerequisites
- reading order
- timelines
- related concepts
- glossary
- progression tracking

---

# BOOK / TEXT PAGES

Each book page requires:

- title
- original title
- civilization
- language
- estimated date
- historical context
- summary
- key concepts
- reading difficulty
- related texts
- translations
- citations
- glossary references
- reading guides
- affiliate links
- free reading sources
- cover image
- recommended editions

Create placeholders for:
- Amazon affiliate links
- publisher links
- external archives

---

# INITIAL CONTENT POPULATION

Automatically generate placeholder content structure for:

- 100+ foundational texts
- 20+ civilizations
- 1000+ glossary terms
- 200+ historical figures
- 100+ concepts
- 50+ learning paths

Include placeholders for:
- images
- affiliate links
- citations
- commentary
- media embeds

---

# SCRAPING + DATA INGESTION

Create scripts for:

- Open Library API ingestion
- Project Gutenberg ingestion
- Internet Archive metadata ingestion
- Wikipedia metadata ingestion
- public domain text imports

DO NOT scrape copyrighted full texts illegally.

Only import:
- metadata
- summaries
- public domain material
- citation-safe excerpts

Create modular ingestion pipelines.

---

# AI FEATURES

Implement:

## Semantic Search
Vector search across:
- texts
- concepts
- journals
- discussions

## AI Study Assistant
Features:
- explain concepts
- compare traditions
- recommend readings
- summarize difficult passages
- generate timelines
- define terms

## Recommendation Engine
Recommend:
- texts
- concepts
- civilizations
- articles
- journals
- media

Based on:
- reading history
- interests
- conceptual similarity

---

# SEARCH ENGINE

Build advanced search with:

- fuzzy search
- semantic search
- filters
- topic search
- civilization search
- timeline search
- author search

Use:
- PostgreSQL FTS initially
- architecture compatible with Meilisearch or Elasticsearch

---

# UI / UX DESIGN SYSTEM

Design language:

- elegant
- cinematic
- minimal
- warm
- timeless
- contemplative

Use:
- serif + sans-serif typography pairing
- subtle animations
- soft shadows
- parchment-inspired tones
- dark/light themes
- responsive layouts

Avoid:
- clutter
- cheap “occult” aesthetics
- excessive animations
- gamified UI spam

---

# PAGE STRUCTURE

Generate:

- Homepage
- Library
- Civilization explorer
- Text explorer
- Learning paths
- Journal hub
- Community hub
- Scholar profiles
- Maps
- Timelines
- Glossary
- About
- Membership
- Settings
- Admin dashboard

---

# MEMBERSHIPS

Integrate Stripe placeholders.

Membership tiers:

## Free
- browse library
- limited journals
- basic discussions

## Member
- unlimited journals
- annotations
- AI assistant
- collections
- advanced features

## Scholar
- advanced tools
- study groups
- archive access
- exclusive content

---

# SEO REQUIREMENTS

Implement:
- structured metadata
- OpenGraph
- JSON-LD
- sitemap generation
- canonical URLs
- semantic HTML
- accessibility standards
- schema.org markup

---

# PERFORMANCE REQUIREMENTS

Implement:
- server-side rendering
- static generation where possible
- lazy loading
- image optimization
- edge caching
- code splitting

Target:
- excellent Lighthouse scores
- fast mobile performance
- PWA installability

---

# ACCESSIBILITY

Comply with:
- WCAG 2.2
- semantic HTML
- keyboard navigation
- screen reader compatibility
- color contrast standards

---

# SECURITY REQUIREMENTS

Implement:
- Supabase RLS
- rate limiting
- input validation
- XSS prevention
- CSRF protection
- content moderation
- secure auth flows

---

# CONTENT STANDARDS

DO NOT:
- fabricate history
- invent ancient texts
- hallucinate meanings
- present speculation as fact

ALWAYS:
- distinguish interpretation from history
- cite sources
- preserve historical nuance
- respect traditions

---

# REQUIRED OUTPUTS

Generate:

- full repository structure
- production-ready code
- environment configs
- README documentation
- Prisma schema
- Supabase schema
- API routes
- reusable components
- placeholder datasets
- ingestion scripts
- deployment instructions
- Docker support
- CI/CD workflows
- GitHub Actions
- Vercel deployment config

---

# DEPLOYMENT TARGETS

Support:
- Vercel
- Docker
- VPS deployment
- Supabase cloud
- Cloudflare

---

# FINAL OBJECTIVE

Build a timeless, scalable, intellectually serious platform for preserving and exploring humanity’s philosophical, spiritual, scientific, symbolic, and civilisational inheritance.

The platform must feel:
- sacred but modern
- scholarly but accessible
- contemplative but technological
- archival but alive

Prioritize:
- clarity
- structure
- scalability
- authenticity
- usability
- beauty
- intellectual integrity