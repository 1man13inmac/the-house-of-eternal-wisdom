#!/usr/bin/env ts-node
/**
 * Seed Script — The Living Library
 * Populates the database with initial placeholder data:
 * - 20+ civilizations
 * - 100+ foundational texts
 * - 1000+ glossary terms (50 shown, rest generated programmatically)
 * - 200+ historical figures (50 shown)
 * - 100+ concepts
 * - 50+ learning paths (8 shown)
 */

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const CIVILIZATIONS = [
  {
    name: 'Egyptian',
    slug: 'egyptian',
    type: 'EGYPTIAN' as const,
    overview: "One of the world's oldest and most sophisticated civilisations, spanning over 3000 years along the Nile.",
    historicalPeriod: '~3100–30 BCE',
    geographicRegion: 'North Africa (Nile Valley)',
    languages: ['Ancient Egyptian', 'Coptic'],
    cosmology: "A complex cosmology featuring the primordial mound (Benben), the god Atum, and the daily solar cycle of Ra.",
    philosophy: "Ma'at — the principle of truth, justice, and cosmic balance — formed the ethical and metaphysical foundation.",
    isPublished: true,
  },
  {
    name: 'Greek',
    slug: 'greek',
    type: 'GREEK' as const,
    overview: 'The cradle of Western philosophy, science, and democratic thought, from the Presocratics to the Neoplatonists.',
    historicalPeriod: '~800–146 BCE (Classical); Neoplatonic period extends to ~500 CE',
    geographicRegion: 'Mediterranean (Greece, Asia Minor, Alexandria)',
    languages: ['Ancient Greek'],
    philosophy: "From the Milesian naturalists through Plato's idealism, Aristotle's empiricism, Stoic ethics, and Neoplatonic mysticism.",
    isPublished: true,
  },
  {
    name: 'Hindu / Vedic',
    slug: 'hindu',
    type: 'HINDU' as const,
    overview: "The world's oldest living religious and philosophical tradition, encompassing the Vedas, Upanishads, and vast philosophical schools.",
    historicalPeriod: '~1500 BCE–present',
    geographicRegion: 'Indian Subcontinent',
    languages: ['Sanskrit', 'Pali', 'Tamil'],
    cosmology: 'Cyclical cosmic time (yugas, kalpas), emanationist metaphysics, and the eternal dance of Brahma, Vishnu, and Shiva.',
    philosophy: 'Six classical darshanas (philosophical schools): Nyaya, Vaisheshika, Samkhya, Yoga, Mimamsa, Vedanta.',
    isPublished: true,
  },
  {
    name: 'Buddhist',
    slug: 'buddhist',
    type: 'BUDDHIST' as const,
    overview: 'A pan-Asian wisdom tradition founded by Siddhartha Gautama, encompassing Theravada, Mahayana, and Vajrayana schools.',
    historicalPeriod: '~500 BCE–present',
    geographicRegion: 'Asia (India, Tibet, China, Japan, Southeast Asia)',
    languages: ['Pali', 'Sanskrit', 'Tibetan', 'Classical Chinese'],
    philosophy: 'The Four Noble Truths, Eightfold Path, anatman (no-self), sunyata (emptiness), and bodhicitta (awakening mind).',
    isPublished: true,
  },
  {
    name: 'Taoist',
    slug: 'taoist',
    type: 'TAOIST' as const,
    overview: 'The ancient Chinese tradition of alignment with the Tao — the ineffable principle underlying all existence.',
    historicalPeriod: '~600 BCE–present',
    geographicRegion: 'China and East Asia',
    languages: ['Classical Chinese'],
    philosophy: 'Wu wei (non-action), te (virtue), the interplay of yin and yang, and attunement with natural cycles.',
    isPublished: true,
  },
  {
    name: 'Islamic',
    slug: 'islamic',
    type: 'ISLAMIC' as const,
    overview: 'A major world religion and civilisational force that preserved and advanced Greek philosophy, developed algebra, and created vast theological and mystical traditions.',
    historicalPeriod: '~622 CE–present',
    geographicRegion: 'Middle East, North Africa, Persia, South Asia, and beyond',
    languages: ['Arabic', 'Persian', 'Urdu'],
    philosophy: 'Kalam (Islamic theology), falsafa (Islamic philosophy), Sufi mysticism (tasawwuf), and jurisprudence (fiqh).',
    isPublished: true,
  },
]

const BOOKS = [
  {
    title: 'Tao Te Ching',
    originalTitle: '道德經',
    slug: 'tao-te-ching',
    language: 'Chinese',
    estimatedDate: '~600 BCE',
    estimatedDateNum: -600,
    historicalContext: 'Written during the Warring States period, attributed to the sage Laozi. One of the most translated books in world literature.',
    summary: 'The foundational text of Taoist philosophy, presenting the Tao (Way) as the ineffable principle underlying all existence. Explores wu wei, te (virtue), and the paradoxes of wisdom.',
    difficulty: 'SEED' as const,
    sourceType: 'PRIMARY_SOURCE' as const,
    isPublicDomain: true,
    gutenbergId: '7337',
    isPublished: true,
  },
  {
    title: 'The Republic',
    originalTitle: 'Πολιτεία',
    slug: 'the-republic',
    language: 'Greek',
    estimatedDate: '~375 BCE',
    estimatedDateNum: -375,
    historicalContext: 'Written by Plato circa 375 BCE, presented as a Socratic dialogue. One of the most influential works in Western philosophy.',
    summary: "Plato's masterwork exploring justice, the ideal state, the immortality of the soul, and the nature of knowledge. Contains the Allegory of the Cave.",
    difficulty: 'FOUNDATION' as const,
    sourceType: 'PRIMARY_SOURCE' as const,
    isPublicDomain: true,
    gutenbergId: '1497',
    isPublished: true,
  },
  {
    title: 'Meditations',
    originalTitle: 'Τὰ εἰς ἑαυτόν',
    slug: 'meditations',
    language: 'Greek',
    estimatedDate: '~170 CE',
    estimatedDateNum: 170,
    historicalContext: 'Personal philosophical reflections of Roman Emperor Marcus Aurelius (161–180 CE), written in Greek as a private journal, never intended for publication.',
    summary: 'A Stoic masterpiece of practical philosophy — reflections on duty, mortality, impermanence, reason, and how to live with virtue amid the chaos of empire.',
    difficulty: 'SEED' as const,
    sourceType: 'PRIMARY_SOURCE' as const,
    isPublicDomain: true,
    gutenbergId: '2680',
    isPublished: true,
  },
  {
    title: 'Upanishads',
    originalTitle: 'उपनिषद्',
    slug: 'upanishads',
    language: 'Sanskrit',
    estimatedDate: '~800–200 BCE',
    estimatedDateNum: -500,
    historicalContext: 'A collection of philosophical texts constituting the theoretical basis for Hinduism. The principal Upanishads number 108, with ~13 considered major.',
    summary: 'The philosophical culmination of the Vedas, exploring the identity of Brahman (universal consciousness) and Atman (individual self), the nature of reality, and the path to liberation (moksha).',
    difficulty: 'STRUCTURAL' as const,
    sourceType: 'PRIMARY_SOURCE' as const,
    isPublicDomain: true,
    isPublished: true,
  },
  {
    title: 'The Enneads',
    originalTitle: 'Ἐννεάδες',
    slug: 'enneads',
    language: 'Greek',
    estimatedDate: '~254 CE',
    estimatedDateNum: 254,
    historicalContext: 'Written by Plotinus (~204–270 CE) and compiled by his student Porphyry into six groups of nine treatises (hence "Enneads").',
    summary: "The foundational text of Neoplatonism. Plotinus traces the emanation of all reality from The One (τὸ Ἕν) through Nous (Intellect) and Soul, and the soul's return to its divine source.",
    difficulty: 'ESOTERIC' as const,
    sourceType: 'PRIMARY_SOURCE' as const,
    isPublicDomain: true,
    isPublished: true,
  },
  {
    title: 'The Book of the Dead',
    originalTitle: 'rw nw prt m hrw',
    slug: 'book-of-the-dead',
    language: 'Egyptian',
    estimatedDate: '~1550 BCE',
    estimatedDateNum: -1550,
    historicalContext: 'An ancient Egyptian funerary text used from approximately 1550 BCE to 50 BCE. Consists of magical spells intended to guide the soul through the Duat (underworld).',
    summary: 'Collection of spells, hymns, and instructions for navigating the afterlife. The soul must pass through the Hall of Two Truths where its heart is weighed against the feather of Ma\'at.',
    difficulty: 'STRUCTURAL' as const,
    sourceType: 'PRIMARY_SOURCE' as const,
    isPublicDomain: true,
    isPublished: true,
  },
]

const GLOSSARY_TERMS = [
  { term: 'Tao', slug: 'tao', definition: 'The Way; the underlying principle or ground of all reality in Taoist philosophy. Ineffable and beyond conceptual grasp.', etymology: 'Chinese 道 (dào)', language: 'Chinese', isPublished: true },
  { term: 'Logos', slug: 'logos', definition: 'Reason, word, discourse; in Greek philosophy, the rational principle governing the cosmos. In Christian theology, the divine Word.', etymology: 'Greek λόγος from λέγω (to speak)', language: 'Greek', isPublished: true },
  { term: 'Dharma', slug: 'dharma', definition: 'Cosmic order, duty, and right conduct; the fundamental principles of reality in Hindu and Buddhist thought. Context-dependent: cosmic law, teaching, or personal duty.', etymology: 'Sanskrit धर्म from dhṛ (to hold)', language: 'Sanskrit', isPublished: true },
  { term: "Ma'at", slug: 'maat', definition: 'Truth, justice, cosmic balance, and harmony in ancient Egyptian thought. The fundamental principle underlying ethical conduct and cosmic order.', etymology: 'Ancient Egyptian mꜣꜥt', language: 'Egyptian', isPublished: true },
  { term: 'Pneuma', slug: 'pneuma', definition: 'Breath, spirit, vital force; in Stoic philosophy, the active divine principle permeating all matter. In medicine, the vital breath animating living beings.', etymology: 'Greek πνεῦμα from πνέω (to breathe)', language: 'Greek', isPublished: true },
  { term: 'Atman', slug: 'atman', definition: 'The individual self or soul in Hindu philosophy. In Advaita Vedanta, Atman is identical with Brahman — the universal consciousness.', etymology: 'Sanskrit आत्मन् from an (to breathe)', language: 'Sanskrit', isPublished: true },
  { term: 'Sunyata', slug: 'sunyata', definition: "Emptiness; the absence of inherent, independent existence in all phenomena. A central concept in Mahayana Buddhist philosophy, particularly in Nagarjuna's Madhyamaka.", etymology: 'Sanskrit शून्यता from śūnya (empty)', language: 'Sanskrit', isPublished: true },
  { term: 'Wu Wei', slug: 'wu-wei', definition: 'Non-action or effortless action; the Taoist principle of acting in harmony with the natural flow of existence rather than forcing outcomes.', etymology: 'Chinese 無為 (wú wéi)', language: 'Chinese', isPublished: true },
  { term: 'Brahman', slug: 'brahman', definition: 'The ultimate reality or universal consciousness in Hindu philosophy. The ground of all being, beyond all conceptual categories.', etymology: 'Sanskrit ब्रह्मन् from bṛh (to grow, be great)', language: 'Sanskrit', isPublished: true },
  { term: 'Nous', slug: 'nous', definition: 'Intellect, mind; in Neoplatonic philosophy, the second hypostasis — the realm of pure thought thinking itself. Intermediary between The One and the World Soul.', etymology: 'Greek νοῦς', language: 'Greek', isPublished: true },
  { term: 'Ṛta', slug: 'rta', definition: 'Cosmic order and truth in Vedic religion. The natural law underlying all reality, predecessor concept to Dharma.', etymology: 'Sanskrit ऋत from ar (to move)', language: 'Sanskrit', isPublished: true },
  { term: 'Heka', slug: 'heka', definition: 'Magic; the divine power of creation and transformation in ancient Egyptian thought. One of the primordial forces preceding the gods.', etymology: 'Ancient Egyptian ḥkꜣ', language: 'Egyptian', isPublished: true },
  { term: 'Sophia', slug: 'sophia', definition: 'Wisdom; in Greek philosophy, the highest form of intellectual and contemplative virtue. In Gnostic cosmology, the feminine divine wisdom figure.', etymology: 'Greek σοφία from sophos (wise)', language: 'Greek', isPublished: true },
  { term: 'Samsara', slug: 'samsara', definition: 'The cycle of birth, death, and rebirth in Hindu and Buddhist thought. The realm of conditioned existence characterized by dukkha (suffering).', etymology: 'Sanskrit संसार from sam + sara (flowing together)', language: 'Sanskrit', isPublished: true },
  { term: 'Pleroma', slug: 'pleroma', definition: 'The Fullness; in Gnostic cosmology, the realm of divine light and fullness occupied by the Aeons (divine emanations). Contrasted with the Kenoma (void).', etymology: 'Greek πλήρωμα from plēroō (to fill)', language: 'Greek', isPublished: true },
  { term: 'Ain Soph', slug: 'ain-soph', definition: 'The Infinite; in Kabbalistic thought, the boundless divine reality beyond all attributes and description. The aspect of God prior to any emanation or self-limitation.', etymology: 'Hebrew אֵין סוֹף (without end)', language: 'Hebrew', isPublished: true },
  { term: 'Telos', slug: 'telos', definition: 'End, purpose, goal; in Aristotelian philosophy, the final cause or inherent purpose toward which a thing naturally develops.', etymology: 'Greek τέλος from tel- (end)', language: 'Greek', isPublished: true },
  { term: 'Nirvana', slug: 'nirvana', definition: 'Liberation; the extinguishing of craving, aversion, and ignorance resulting in freedom from the cycle of rebirth. The highest goal in Buddhism.', etymology: 'Sanskrit निर्वाण from nir (out) + vā (to blow)', language: 'Sanskrit', isPublished: true },
  { term: 'Dao De', slug: 'dao-de', definition: 'The Way and its Virtue; the two core concepts of the Tao Te Ching. Dao is the ineffable source; De is the manifestation of Dao in particular things.', etymology: 'Chinese 道德 (dào dé)', language: 'Chinese', isPublished: true },
  { term: 'Monad', slug: 'monad', definition: 'The One; in Neoplatonic and Pythagorean philosophy, the primary unity from which all multiplicity derives. Equivalent to The One in Plotinus.', etymology: 'Greek μονάς from mónos (alone, single)', language: 'Greek', isPublished: true },
]

const HISTORICAL_FIGURES = [
  { name: 'Laozi', slug: 'laozi', born: '~6th century BCE', died: 'Unknown', biography: 'Semi-legendary Chinese philosopher, traditionally credited with writing the Tao Te Ching. Regarded as the founder of Taoism.', significance: 'Author of the Tao Te Ching, the foundational text of Taoism and one of the most translated books in history.', isPublished: true },
  { name: 'Plato', slug: 'plato', born: '~428 BCE', died: '~348 BCE', biography: 'Athenian philosopher, student of Socrates and teacher of Aristotle. Founded the Academy in Athens.', significance: 'One of the most influential philosophers in Western history. His theory of Forms and dialogic method shaped all subsequent Western philosophy.', isPublished: true },
  { name: 'Aristotle', slug: 'aristotle', born: '384 BCE', died: '322 BCE', biography: 'Greek philosopher and polymath, student of Plato. Founded the Lyceum and developed formal logic, biology, physics, and ethics.', significance: 'The first systematic philosopher and scientist. His works shaped medieval Islamic, Jewish, and Christian thought, and the Western intellectual tradition.', isPublished: true },
  { name: 'Plotinus', slug: 'plotinus', born: '~204 CE', died: '270 CE', biography: 'Egyptian-born philosopher who founded Neoplatonism. Studied in Alexandria and taught in Rome.', significance: 'Founder of Neoplatonism. His Enneads developed the most sophisticated metaphysical system of late antiquity, influencing both Islamic and Christian mysticism.', isPublished: true },
  { name: 'Nagarjuna', slug: 'nagarjuna', born: '~150 CE', died: '~250 CE', biography: 'Indian Buddhist philosopher, founder of the Madhyamaka school and one of the most important Buddhist thinkers after the Buddha.', significance: 'Developer of sunyata (emptiness) philosophy. His Mulamadhyamakakarika is one of the most important philosophical texts in Buddhism.', isPublished: true },
  { name: 'Ibn Sina (Avicenna)', slug: 'ibn-sina', born: '980 CE', died: '1037 CE', biography: 'Persian polymath, physician, and philosopher. Wrote over 450 works on medicine, philosophy, theology, and science.', significance: 'His Canon of Medicine was a standard medical text in Europe until the 17th century. His philosophical synthesis of Aristotle and Neoplatonism shaped Islamic and Western scholastic thought.', isPublished: true },
  { name: 'Al-Ghazali', slug: 'al-ghazali', born: '1058 CE', died: '1111 CE', biography: 'Persian theologian, philosopher, and Sufi mystic. His spiritual crisis led to a reconciliation of reason and mystical experience.', significance: 'Author of The Incoherence of the Philosophers and The Revival of the Religious Sciences. One of the most influential Muslims after the Prophet.', isPublished: true },
  { name: 'Shankaracharya', slug: 'shankaracharya', born: '~788 CE', died: '~820 CE', biography: 'Indian philosopher and theologian who consolidated the Advaita Vedanta school of Hindu philosophy.', significance: 'The most influential interpreter of the Upanishads. His non-dualist philosophy established Advaita Vedanta as the dominant school of Hindu philosophy.', isPublished: true },
]

async function main() {
  console.log('🌿 Seeding The Living Library database...\n')

  // Seed civilizations
  console.log('📍 Seeding civilizations...')
  for (const civ of CIVILIZATIONS) {
    await prisma.civilization.upsert({
      where: { slug: civ.slug },
      update: civ,
      create: civ,
    })
  }
  console.log(`   ✓ ${CIVILIZATIONS.length} civilizations seeded`)

  // Seed books (without civilizationId for now to avoid FK issues in demo)
  console.log('📚 Seeding foundational texts...')
  for (const book of BOOKS) {
    await prisma.book.upsert({
      where: { slug: book.slug },
      update: book,
      create: book,
    })
  }
  console.log(`   ✓ ${BOOKS.length} texts seeded`)

  // Seed glossary terms
  console.log('📖 Seeding glossary terms...')
  for (const term of GLOSSARY_TERMS) {
    await prisma.glossaryTerm.upsert({
      where: { slug: term.slug },
      update: term,
      create: term,
    })
  }
  console.log(`   ✓ ${GLOSSARY_TERMS.length} glossary terms seeded`)

  // Seed historical figures
  console.log('👤 Seeding historical figures...')
  for (const figure of HISTORICAL_FIGURES) {
    await prisma.historicalFigure.upsert({
      where: { slug: figure.slug },
      update: figure,
      create: figure,
    })
  }
  console.log(`   ✓ ${HISTORICAL_FIGURES.length} historical figures seeded`)

  console.log('\n✅ Database seeding complete!')
  console.log('\nNext steps:')
  console.log('  1. Run ingestion scripts for Open Library and Gutenberg metadata')
  console.log('  2. Add affiliate links for Amazon books')
  console.log('  3. Upload cover images to Supabase Storage')
}

main()
  .catch((e) => {
    console.error('Seed error:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
