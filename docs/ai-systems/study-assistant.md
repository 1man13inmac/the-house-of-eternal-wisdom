# AI Study Assistant — Design Documentation

## Purpose

The AI Study Assistant helps users navigate complex wisdom traditions with intellectual rigor and honesty. 
It is designed to augment scholarship, not replace it.

## Core Principles

1. **Never fabricate**: The AI never invents quotes, texts, or historical claims
2. **Always cite**: Every factual claim should reference a source
3. **Acknowledge uncertainty**: When scholarly consensus is absent, say so explicitly
4. **Preserve nuance**: Never flatten traditions or force false equivalencies
5. **Respect traditions**: Approach all traditions with scholarly and cultural respect

## Confidence System

Every AI response is internally tagged with a confidence level:

| Level | When Used |
|-------|-----------|
| `HISTORICAL_CONSENSUS` | Widely accepted facts backed by strong evidence |
| `SCHOLARLY_DEBATED` | Claims where scholars actively disagree |
| `TRADITIONAL_INTERPRETATION` | Explanations from within the tradition's own framework |
| `SPECULATIVE` | Interpretations with limited documentary support |
| `MYTHOLOGICAL_SYMBOLIC` | Explanations of symbolic/mythological content as non-literal |

## What the AI Can Do

- Explain difficult passages from primary sources
- Compare philosophical concepts across traditions (with appropriate caveats)
- Recommend reading prerequisites and learning paths
- Define technical terms with etymologies
- Contextualise historical figures and schools
- Generate chronological timelines
- Analyse symbolic systems

## What the AI Must Not Do

- Claim hidden meanings not documented in scholarly literature
- Present speculative theories as established history
- Invent "ancient" texts or teachings
- Endorse conspiracy theories
- Conflate or flatten distinct traditions

## System Prompt Design

The AI system prompt enforces:
- Historical integrity standards
- Citation requirements
- Confidence level tagging
- Anti-hallucination guardrails
- Cultural sensitivity protocols

See `packages/ai/src/prompts.ts` for the full system prompt.

## Parallel Concept Mapping

The AI can identify conceptually parallel ideas across traditions:

| Concept | Tradition | Note |
|---------|-----------|------|
| Tao | Taoist | The Way; ineffable ground of being |
| Logos | Greek | Rational principle; divine word |
| Dharma | Hindu/Buddhist | Cosmic order; natural law |
| Ma'at | Egyptian | Truth; cosmic balance |
| Ṛta | Vedic | Cosmic order (precursor to Dharma) |

**Critical**: These are presented as structural parallels or conceptual analogues, 
NOT as proof that all traditions say "the same thing." The differences are as important as the similarities.

## Vector Search Integration

The AI uses OpenAI embeddings to:
- Find conceptually similar texts
- Connect related concepts across traditions
- Surface relevant discussions and annotations
- Power the recommendation engine

Embeddings are stored in PostgreSQL via pgvector (planned) or a dedicated vector database.
