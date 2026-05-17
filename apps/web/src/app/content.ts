export type Book = {
  id: string
  slug: string
  title: string
  author: string
  civilization: string
  estimatedDate: string
  difficulty: 'SEED' | 'FOUNDATION' | 'STRUCTURAL' | 'ESOTERIC' | 'SCHOLARLY' | 'SPECIALIST'
  summary: string
  description: string
  themes: string[]
  asin: string
  amazonImage: string
  relatedBookSlugs?: string[]
}

export type LearningPath = {
  slug: string
  title: string
  tradition: string
  difficulty: 'SEED' | 'FOUNDATION' | 'STRUCTURAL' | 'ESOTERIC' | 'SCHOLARLY' | 'SPECIALIST'
  estimatedHours: number
  steps: number
  description: string
  outcomes: string[]
  recommendedBookSlugs?: string[]
  relatedPathSlugs?: string[]
}

export type Civilization = {
  slug: string
  name: string
  period: string
  region: string
  summary: string
  texts: string[]
  teachings: string[]
  recommendedBookSlugs?: string[]
  relatedCivilizationSlugs?: string[]
}

export type HistoricalFigure = {
  slug: string
  name: string
  alternativeNames?: string[]
  lifespan: string
  dates?: { birth?: number; death?: number; era?: string }
  region: string
  tradition: string
  field: string
  knownFor: string
  summary: string
  biography: string
  majorWorks?: string[]
  philosophy?: string
  historicalContext?: string
  legacyInfluence?: string
  relatedFigures?: string[]
  relatedCivilizations?: string[]
  primarySources?: string[]
  recommendedBooks?: string[]
}

export const DIFFICULTY_LABELS = {
  SEED: 'Introductory',
  FOUNDATION: 'Foundation',
  STRUCTURAL: 'Intermediate',
  ESOTERIC: 'Advanced',
  SCHOLARLY: 'Scholarly',
  SPECIALIST: 'Specialist',
}

export const BOOKS: Book[] = [
  {
    id: '1',
    slug: 'tao-te-ching',
    title: 'Tao Te Ching',
    author: 'Laozi',
    civilization: 'Taoist',
    estimatedDate: '~600 BCE',
    difficulty: 'SEED',
    summary: 'A foundational Taoist classic on effortless action, balance, and alignment with the Way.',
    description:
      'The Tao Te Ching frames wisdom as alignment with the Tao rather than domination of reality. It emphasizes humility, simplicity, and non-coercive leadership.',
    themes: ['Tao', 'Wu Wei', 'Simplicity', 'Governance'],
    asin: '014044131X',
    amazonImage: 'https://images-na.ssl-images-amazon.com/images/P/014044131X.01.L.jpg',
    relatedBookSlugs: ['i-ching', 'analects'],
  },
  {
    id: '2',
    slug: 'the-republic',
    title: 'The Republic',
    author: 'Plato',
    civilization: 'Greek',
    estimatedDate: '~375 BCE',
    difficulty: 'FOUNDATION',
    summary: 'A major dialogue on justice, education, political order, and the structure of the soul.',
    description:
      'Plato explores the just city and the just person through dialectic. The text remains central to philosophy, political theory, and ethics.',
    themes: ['Justice', 'Education', 'Political Philosophy', 'Epistemology'],
    asin: '0141442433',
    amazonImage: 'https://images-na.ssl-images-amazon.com/images/P/0141442433.01.L.jpg',
    relatedBookSlugs: ['meditations', 'enneads'],
  },
  {
    id: '3',
    slug: 'meditations',
    title: 'Meditations',
    author: 'Marcus Aurelius',
    civilization: 'Roman',
    estimatedDate: '~170 CE',
    difficulty: 'SEED',
    summary: 'A practical Stoic handbook for self-governance, clarity, and ethical discipline.',
    description:
      'Written as private notes, Meditations presents a disciplined approach to mortality, responsibility, and emotional regulation.',
    themes: ['Stoicism', 'Self-Mastery', 'Mortality', 'Duty'],
    asin: '0812968255',
    amazonImage: 'https://images-na.ssl-images-amazon.com/images/P/0812968255.01.L.jpg',
    relatedBookSlugs: ['the-republic', 'analects'],
  },
  {
    id: '4',
    slug: 'upanishads',
    title: 'The Upanishads',
    author: 'Various Sages',
    civilization: 'Hindu',
    estimatedDate: '~800-200 BCE',
    difficulty: 'STRUCTURAL',
    summary: 'Philosophical texts on consciousness, selfhood, and ultimate reality in the Vedic tradition.',
    description:
      'The Upanishads ask what the self truly is and what lies beneath changing appearances, developing enduring frameworks for metaphysics and liberation.',
    themes: ['Atman', 'Brahman', 'Liberation', 'Consciousness'],
    asin: '0140441638',
    amazonImage: 'https://images-na.ssl-images-amazon.com/images/P/0140441638.01.L.jpg',
    relatedBookSlugs: ['bhagavad-gita', 'dhammapada'],
  },
  {
    id: '5',
    slug: 'egyptian-book-of-the-dead',
    title: 'The Egyptian Book of the Dead',
    author: 'Ancient Egyptian Scribes',
    civilization: 'Egyptian',
    estimatedDate: '~1550 BCE',
    difficulty: 'STRUCTURAL',
    summary: 'A funerary corpus mapping ethical judgement and the soul journey in Egyptian religion.',
    description:
      'A layered ritual and symbolic text preserving Egyptian cosmology, afterlife ethics, and sacred language practices.',
    themes: ['Afterlife', 'Ritual', 'Cosmology', 'Ethics'],
    asin: '0140455507',
    amazonImage: 'https://images-na.ssl-images-amazon.com/images/P/0140455507.01.L.jpg',
    relatedBookSlugs: ['epic-of-gilgamesh', 'enuma-elish'],
  },
  {
    id: '6',
    slug: 'enneads',
    title: 'Enneads',
    author: 'Plotinus',
    civilization: 'Neoplatonic',
    estimatedDate: '~254 CE',
    difficulty: 'ESOTERIC',
    summary: 'A metaphysical system of emanation from the One through Intellect to Soul and world.',
    description:
      'The Enneads deeply shaped late antique spirituality and medieval metaphysics through its contemplative model of ascent.',
    themes: ['The One', 'Intellect', 'Soul', 'Contemplation'],
    asin: '0674994884',
    amazonImage: 'https://images-na.ssl-images-amazon.com/images/P/0674994884.01.L.jpg',
    relatedBookSlugs: ['the-republic', 'meditations'],
  },
  {
    id: '7',
    slug: 'bhagavad-gita',
    title: 'Bhagavad Gita',
    author: 'Traditionally attributed to Vyasa',
    civilization: 'Hindu',
    estimatedDate: '~200 BCE',
    difficulty: 'FOUNDATION',
    summary: 'A dialogue on duty, devotion, and action without attachment.',
    description:
      'The Gita integrates paths of knowledge, action, and devotion into a unified approach to moral and spiritual life.',
    themes: ['Dharma', 'Yoga', 'Devotion', 'Duty'],
    asin: '0140449183',
    amazonImage: 'https://images-na.ssl-images-amazon.com/images/P/0140449183.01.L.jpg',
    relatedBookSlugs: ['upanishads', 'dhammapada'],
  },
  {
    id: '8',
    slug: 'dhammapada',
    title: 'Dhammapada',
    author: 'Early Buddhist Community',
    civilization: 'Buddhist',
    estimatedDate: '~3rd century BCE',
    difficulty: 'SEED',
    summary: 'A concise anthology of Buddhist ethical and contemplative teachings.',
    description:
      'The Dhammapada presents practical guidance on mind training, compassion, and liberation from suffering.',
    themes: ['Mindfulness', 'Ethics', 'Compassion', 'Liberation'],
    asin: '0140442847',
    amazonImage: 'https://images-na.ssl-images-amazon.com/images/P/0140442847.01.L.jpg',
    relatedBookSlugs: ['upanishads', 'bhagavad-gita'],
  },
  {
    id: '9',
    slug: 'analects',
    title: 'The Analects',
    author: 'Confucius and disciples',
    civilization: 'Confucian',
    estimatedDate: '~5th-3rd century BCE',
    difficulty: 'FOUNDATION',
    summary: 'Core Confucian teachings on virtue, ritual propriety, and social responsibility.',
    description:
      'The Analects links character cultivation with institutional order through ritual, learning, and humane leadership.',
    themes: ['Virtue', 'Ritual', 'Leadership', 'Education'],
    asin: '0140443487',
    amazonImage: 'https://images-na.ssl-images-amazon.com/images/P/0140443487.01.L.jpg',
    relatedBookSlugs: ['the-republic', 'i-ching'],
  },
  {
    id: '10',
    slug: 'the-prince',
    title: 'The Prince',
    author: 'Niccolo Machiavelli',
    civilization: 'Renaissance',
    estimatedDate: '1532 CE',
    difficulty: 'FOUNDATION',
    summary: 'A realistic treatment of political power, stability, and statecraft.',
    description:
      'The Prince studies how rulers preserve order under constraints and uncertainty, reshaping political thought in early modern Europe.',
    themes: ['Statecraft', 'Power', 'Strategy', 'Political Realism'],
    asin: '0140449159',
    amazonImage: 'https://images-na.ssl-images-amazon.com/images/P/0140449159.01.L.jpg',
    relatedBookSlugs: ['the-republic', 'muqaddimah'],
  },
  {
    id: '11',
    slug: 'i-ching',
    title: 'I Ching',
    author: 'Classical Chinese tradition',
    civilization: 'Chinese',
    estimatedDate: '~1st millennium BCE',
    difficulty: 'STRUCTURAL',
    summary: 'An oracle-philosophical text interpreting transformation through symbolic hexagrams.',
    description:
      'The I Ching combines divination with moral and cosmological reflection on timing, change, and right response.',
    themes: ['Change', 'Symbolism', 'Cosmology', 'Decision Making'],
    asin: '0691179213',
    amazonImage: 'https://images-na.ssl-images-amazon.com/images/P/0691179213.01.L.jpg',
    relatedBookSlugs: ['tao-te-ching', 'analects'],
  },
  {
    id: '12',
    slug: 'muqaddimah',
    title: 'The Muqaddimah',
    author: 'Ibn Khaldun',
    civilization: 'Islamic',
    estimatedDate: '1377 CE',
    difficulty: 'SCHOLARLY',
    summary: 'A pioneering work in historiography and social theory.',
    description:
      'Ibn Khaldun analyzes social cohesion, political rise and decline, and methods for evaluating historical reports.',
    themes: ['Historiography', 'Society', 'Politics', 'Method'],
    asin: '0691166286',
    amazonImage: 'https://images-na.ssl-images-amazon.com/images/P/0691166286.01.L.jpg',
    relatedBookSlugs: ['the-prince', 'the-republic'],
  },
  {
    id: '13',
    slug: 'epic-of-gilgamesh',
    title: 'The Epic of Gilgamesh',
    author: 'Mesopotamian scribal tradition',
    civilization: 'Mesopotamian',
    estimatedDate: '~2100 BCE',
    difficulty: 'FOUNDATION',
    summary: 'A foundational epic on mortality, kingship, friendship, and the search for wisdom.',
    description:
      'The Epic of Gilgamesh preserves one of the earliest literary meditations on death, meaning, and civilizational identity.',
    themes: ['Mortality', 'Kingship', 'Heroic Quest', 'Flood Narrative'],
    asin: '0141026286',
    amazonImage: 'https://images-na.ssl-images-amazon.com/images/P/0141026286.01.L.jpg',
    relatedBookSlugs: ['enuma-elish', 'egyptian-book-of-the-dead'],
  },
  {
    id: '14',
    slug: 'enuma-elish',
    title: 'Enuma Elish',
    author: 'Babylonian scribes',
    civilization: 'Babylonian',
    estimatedDate: '~1100 BCE',
    difficulty: 'STRUCTURAL',
    summary: 'The Babylonian creation epic on divine conflict, order, and kingship cosmology.',
    description:
      'Enuma Elish narrates creation through conflict and ordering power, offering a major source for ancient Near Eastern cosmology.',
    themes: ['Creation Myth', 'Divine Order', 'Kingship', 'Cosmology'],
    asin: '1575068618',
    amazonImage: 'https://images-na.ssl-images-amazon.com/images/P/1575068618.01.L.jpg',
    relatedBookSlugs: ['epic-of-gilgamesh', 'egyptian-book-of-the-dead'],
  },
  {
    id: '15',
    slug: 'sumerian-myths',
    title: 'Sumerian Mythology',
    author: 'Samuel Noah Kramer (translator/editor)',
    civilization: 'Sumerian',
    estimatedDate: '~3rd-2nd millennium BCE',
    difficulty: 'STRUCTURAL',
    summary: 'A survey of Sumerian myths and hymns foundational to later Mesopotamian traditions.',
    description:
      'This collection introduces Sumerian cosmology, city cults, and early mythic patterns that shaped later Babylonian literature.',
    themes: ['Origins', 'Temple Culture', 'Divine Kingship', 'Mythic Motifs'],
    asin: '0486273538',
    amazonImage: 'https://images-na.ssl-images-amazon.com/images/P/0486273538.01.L.jpg',
    relatedBookSlugs: ['epic-of-gilgamesh', 'enuma-elish'],
  },
  {
    id: '16',
    slug: 'popol-vuh',
    title: 'Popol Vuh',
    author: 'Kiche Maya tradition',
    civilization: 'Mayan',
    estimatedDate: '~16th century CE (recorded)',
    difficulty: 'FOUNDATION',
    summary: 'The major Maya narrative corpus on creation, hero twins, and sacred memory.',
    description:
      'Popol Vuh preserves Kiche Maya cosmology and lineage memory, linking mythic narrative with ritual and identity.',
    themes: ['Creation', 'Hero Twins', 'Ritual Memory', 'Genealogy'],
    asin: '0684818450',
    amazonImage: 'https://images-na.ssl-images-amazon.com/images/P/0684818450.01.L.jpg',
    relatedBookSlugs: ['epic-of-gilgamesh', 'egyptian-book-of-the-dead'],
  },
]

export const LEARNING_PATHS: LearningPath[] = [
  {
    slug: 'introduction-to-taoism',
    title: 'Introduction to Taoism',
    tradition: 'Taoist',
    difficulty: 'SEED',
    estimatedHours: 20,
    steps: 8,
    description: 'A complete introduction to Taoist cosmology, ethics, and contemplative practice.',
    outcomes: ['Understand core Taoist terms', 'Read the Tao Te Ching with context', 'Compare Taoist and Confucian models'],
    recommendedBookSlugs: ['tao-te-ching', 'i-ching', 'analects'],
    relatedPathSlugs: ['comparative-cosmology'],
  },
  {
    slug: 'foundations-of-greek-philosophy',
    title: 'Foundations of Greek Philosophy',
    tradition: 'Greek',
    difficulty: 'FOUNDATION',
    estimatedHours: 40,
    steps: 12,
    description: 'From Presocratic inquiry through Plato and Aristotle to Stoic ethics.',
    outcomes: ['Map major schools', 'Read key dialogues', 'Track arguments across authors'],
    recommendedBookSlugs: ['the-republic', 'meditations', 'enneads'],
    relatedPathSlugs: ['heros-journey'],
  },
  {
    slug: 'the-egyptian-mysteries',
    title: 'The Egyptian Mysteries',
    tradition: 'Egyptian',
    difficulty: 'STRUCTURAL',
    estimatedHours: 35,
    steps: 10,
    description: 'Ritual, myth, kingship, and sacred language in ancient Egypt.',
    outcomes: ['Recognize major symbols', 'Understand afterlife frameworks', 'Interpret temple motifs'],
    recommendedBookSlugs: ['egyptian-book-of-the-dead', 'enuma-elish'],
    relatedPathSlugs: ['death-and-afterlife'],
  },
  {
    slug: 'sacred-geometry-foundations',
    title: 'Sacred Geometry Foundations',
    tradition: 'Cross-Traditional',
    difficulty: 'STRUCTURAL',
    estimatedHours: 25,
    steps: 9,
    description: 'Mathematical form and symbolic proportion in architecture and art.',
    outcomes: ['Read geometric diagrams', 'Identify symbolic ratios', 'Connect geometry to ritual space'],
    recommendedBookSlugs: ['the-republic', 'i-ching'],
    relatedPathSlugs: ['comparative-cosmology'],
  },
  {
    slug: 'comparative-cosmology',
    title: 'Comparative Cosmology',
    tradition: 'Cross-Traditional',
    difficulty: 'STRUCTURAL',
    estimatedHours: 30,
    steps: 10,
    description: 'Comparative models of origin, order, and destiny across civilizations.',
    outcomes: ['Compare cosmogenesis models', 'Track symbolic correspondences', 'Differentiate analogy from identity'],
    recommendedBookSlugs: ['enuma-elish', 'popol-vuh', 'upanishads'],
    relatedPathSlugs: ['sacred-geometry-foundations', 'death-and-afterlife'],
  },
  {
    slug: 'heros-journey',
    title: "The Hero's Journey Across Civilisations",
    tradition: 'Comparative',
    difficulty: 'FOUNDATION',
    estimatedHours: 20,
    steps: 8,
    description: 'Initiatory narrative structures from epic, myth, and scripture.',
    outcomes: ['Identify narrative phases', 'Compare heroic archetypes', 'Apply frameworks to texts'],
    recommendedBookSlugs: ['epic-of-gilgamesh', 'bhagavad-gita', 'popol-vuh'],
    relatedPathSlugs: ['foundations-of-greek-philosophy'],
  },
  {
    slug: 'alchemy-inner-transformation',
    title: 'Alchemy and Inner Transformation',
    tradition: 'Hermetic',
    difficulty: 'ESOTERIC',
    estimatedHours: 45,
    steps: 14,
    description: 'Symbolic and historical study of alchemy in Egypt, Islam, and Europe.',
    outcomes: ['Decode alchemical symbols', 'Differentiate lab and spiritual alchemy', 'Trace transmission history'],
    recommendedBookSlugs: ['enneads', 'muqaddimah', 'egyptian-book-of-the-dead'],
    relatedPathSlugs: ['the-egyptian-mysteries'],
  },
  {
    slug: 'death-and-afterlife',
    title: 'Death and Afterlife Traditions',
    tradition: 'Comparative',
    difficulty: 'FOUNDATION',
    estimatedHours: 25,
    steps: 9,
    description: 'How traditions model death, judgement, rebirth, and liberation.',
    outcomes: ['Compare soul models', 'Map ritual structures', 'Read funerary texts in context'],
    recommendedBookSlugs: ['egyptian-book-of-the-dead', 'dhammapada', 'epic-of-gilgamesh'],
    relatedPathSlugs: ['the-egyptian-mysteries', 'comparative-cosmology'],
  },
]

export const CIVILIZATIONS: Civilization[] = [
  {
    slug: 'sumerian',
    name: 'Sumerian',
    period: '~4500-1900 BCE',
    region: 'Southern Mesopotamia',
    summary: 'The earliest urban literate civilization, foundational for law, myth, and scribal culture.',
    texts: ['Inanna cycle', 'Kesh Temple Hymn', 'Sumerian King List'],
    teachings: ['City-temple order', 'Sacred kingship', 'Ritual language and memory'],
    recommendedBookSlugs: ['sumerian-myths', 'epic-of-gilgamesh'],
    relatedCivilizationSlugs: ['babylonian', 'mesopotamian'],
  },
  {
    slug: 'babylonian',
    name: 'Babylonian',
    period: '~1894-539 BCE',
    region: 'Mesopotamia',
    summary: 'A major Mesopotamian imperial tradition preserving cosmology, astronomy, and legal thought.',
    texts: ['Enuma Elish', 'Atrahasis', 'Astronomical Diaries'],
    teachings: ['Creation through ordering power', 'Royal legitimacy', 'Scholarly astronomy'],
    recommendedBookSlugs: ['enuma-elish', 'epic-of-gilgamesh'],
    relatedCivilizationSlugs: ['sumerian', 'mesopotamian'],
  },
  {
    slug: 'egyptian',
    name: 'Egyptian',
    period: '~3100-30 BCE',
    region: 'North Africa',
    summary: 'Temple-centered civilization integrating kingship, cosmology, and afterlife doctrine.',
    texts: ['Pyramid Texts', 'Coffin Texts', 'Book of the Dead'],
    teachings: ['Maat as order and justice', 'Sacred kingship', 'Ritual speech as effective power'],
    recommendedBookSlugs: ['egyptian-book-of-the-dead', 'enuma-elish'],
    relatedCivilizationSlugs: ['mesopotamian', 'hermetic'],
  },
  {
    slug: 'greek',
    name: 'Greek',
    period: '~800-146 BCE',
    region: 'Mediterranean',
    summary: 'Philosophical and scientific traditions emphasizing reasoned inquiry and metaphysical structure.',
    texts: ['Republic', 'Nicomachean Ethics', 'Enneads'],
    teachings: ['Dialectic and argument', 'Virtue ethics', 'Form and substance'],
    recommendedBookSlugs: ['the-republic', 'enneads', 'meditations'],
    relatedCivilizationSlugs: ['roman', 'stoic', 'neoplatonic'],
  },
  {
    slug: 'hindu',
    name: 'Hindu and Vedic',
    period: '~1500 BCE-present',
    region: 'Indian Subcontinent',
    summary: 'Layered textual culture spanning ritual, metaphysics, devotion, and yoga.',
    texts: ['Rigveda', 'Upanishads', 'Bhagavad Gita'],
    teachings: ['Dharma and order', 'Atman and Brahman', 'Paths of yoga'],
    recommendedBookSlugs: ['upanishads', 'bhagavad-gita'],
    relatedCivilizationSlugs: ['buddhist', 'tibetan'],
  },
  {
    slug: 'buddhist',
    name: 'Buddhist',
    period: '~500 BCE-present',
    region: 'Asia',
    summary: 'Traditions centered on suffering, causality, ethics, meditation, and liberation.',
    texts: ['Dhammapada', 'Pali Canon', 'Heart Sutra'],
    teachings: ['Four Noble Truths', 'Dependent origination', 'Compassion and wisdom'],
    recommendedBookSlugs: ['dhammapada', 'upanishads'],
    relatedCivilizationSlugs: ['hindu', 'tibetan'],
  },
  {
    slug: 'taoist',
    name: 'Taoist',
    period: '~600 BCE-present',
    region: 'East Asia',
    summary: 'Texts and practices exploring naturalness, balance, and non-coercive action.',
    texts: ['Tao Te Ching', 'Zhuangzi', 'Liezi'],
    teachings: ['Wu wei', 'Naturalness', 'Complementary opposites'],
    recommendedBookSlugs: ['tao-te-ching', 'i-ching'],
    relatedCivilizationSlugs: ['confucian'],
  },
  {
    slug: 'mayan',
    name: 'Mayan',
    period: '~2000 BCE-16th century CE',
    region: 'Mesoamerica',
    summary: 'A literate Mesoamerican civilization with advanced calendrics, ritual cosmology, and monumental architecture.',
    texts: ['Popol Vuh', 'Dresden Codex', 'Chilam Balam books'],
    teachings: ['Sacred calendrical time', 'Mythic kingship', 'Ritual reciprocity'],
    recommendedBookSlugs: ['popol-vuh'],
    relatedCivilizationSlugs: ['mesopotamian', 'egyptian'],
  },
  {
    slug: 'islamic',
    name: 'Islamic',
    period: '~622 CE-present',
    region: 'Middle East and beyond',
    summary: 'Revelatory, legal, philosophical, and scientific traditions with broad civilizational impact.',
    texts: ['Quran', 'Ihya Ulum al-Din', 'Muqaddimah'],
    teachings: ['Unity of God', 'Ethical law', 'Knowledge as stewardship'],
    recommendedBookSlugs: ['muqaddimah'],
    relatedCivilizationSlugs: ['sufi', 'persian'],
  },
  {
    slug: 'norse',
    name: 'Norse',
    period: '~793-1066 CE',
    region: 'Northern Europe',
    summary: 'Mythic and heroic corpus preserving cosmology, fate, and social ethics.',
    texts: ['Poetic Edda', 'Prose Edda', 'Sagas'],
    teachings: ['Honor and fate', 'Cosmic cycles', 'Mythic memory'],
    recommendedBookSlugs: ['epic-of-gilgamesh'],
    relatedCivilizationSlugs: ['celtic'],
  },
  {
    slug: 'celtic',
    name: 'Celtic',
    period: '~600 BCE-500 CE',
    region: 'Western Europe',
    summary: 'Oral and manuscript traditions linking ritual landscapes, poetry, and mythic law.',
    texts: ['Mabinogion', 'Tain Bo Cuailnge', 'Early Irish law texts'],
    teachings: ['Landscape sacrality', 'Poetic knowledge', 'Heroic reciprocity'],
    recommendedBookSlugs: ['epic-of-gilgamesh'],
    relatedCivilizationSlugs: ['norse'],
  },
  {
    slug: 'hebrew',
    name: 'Hebrew and Kabbalistic',
    period: '~1200 BCE-present',
    region: 'Levant',
    summary: 'Textual traditions focused on covenant, law, prophetic ethics, and mystical exegesis.',
    texts: ['Tanakh', 'Mishnah', 'Zohar'],
    teachings: ['Covenantal ethics', 'Interpretive tradition', 'Sacred language'],
    recommendedBookSlugs: ['muqaddimah'],
    relatedCivilizationSlugs: ['islamic', 'persian'],
  },
  {
    slug: 'mesopotamian',
    name: 'Mesopotamian',
    period: '~3500-539 BCE',
    region: 'Ancient Near East',
    summary: 'Early urban civilizations preserving law, myth, and divinatory sciences.',
    texts: ['Epic of Gilgamesh', 'Enuma Elish', 'Code of Hammurabi'],
    teachings: ['Kingship and law', 'Mythic cosmology', 'Omens and order'],
    recommendedBookSlugs: ['epic-of-gilgamesh', 'enuma-elish', 'sumerian-myths'],
    relatedCivilizationSlugs: ['sumerian', 'babylonian'],
  },
  {
    slug: 'persian',
    name: 'Persian and Zoroastrian',
    period: '~1500 BCE-651 CE',
    region: 'Iran',
    summary: 'Ethical dualism, imperial governance, and ritual traditions of fire and truth.',
    texts: ['Avesta', 'Bundahishn', 'Shahnameh'],
    teachings: ['Truth versus falsehood', 'Moral agency', 'Stewardship of creation'],
    recommendedBookSlugs: ['muqaddimah'],
    relatedCivilizationSlugs: ['islamic', 'hebrew'],
  },
  {
    slug: 'roman',
    name: 'Roman',
    period: '~753 BCE-476 CE',
    region: 'Mediterranean',
    summary: 'Legal, rhetorical, and Stoic traditions shaping governance and civic ethics.',
    texts: ['Meditations', 'On Duties', 'Aeneid'],
    teachings: ['Civic duty', 'Law and order', 'Practical virtue'],
    recommendedBookSlugs: ['meditations', 'the-republic'],
    relatedCivilizationSlugs: ['greek', 'stoic'],
  },
  {
    slug: 'hermetic',
    name: 'Hermetic',
    period: 'Late Antiquity-Renaissance',
    region: 'Egypt and Europe',
    summary: 'Esoteric philosophical texts on mind, cosmos, and transformation.',
    texts: ['Corpus Hermeticum', 'Asclepius', 'Picatrix'],
    teachings: ['As above so below', 'Inner transformation', 'Symbolic correspondences'],
    recommendedBookSlugs: ['enneads', 'egyptian-book-of-the-dead'],
    relatedCivilizationSlugs: ['egyptian', 'neoplatonic'],
  },
  {
    slug: 'neoplatonic',
    name: 'Neoplatonic',
    period: '~3rd-6th century CE',
    region: 'Mediterranean',
    summary: 'A metaphysical school describing emanation, return, and contemplative ascent.',
    texts: ['Enneads', 'Elements of Theology', 'Platonic Theology'],
    teachings: ['Emanation from the One', 'Contemplative ascent', 'Hierarchy of being'],
    recommendedBookSlugs: ['enneads', 'the-republic'],
    relatedCivilizationSlugs: ['greek', 'hermetic'],
  },
  {
    slug: 'confucian',
    name: 'Confucian',
    period: '~500 BCE-present',
    region: 'East Asia',
    summary: 'Ethical and political philosophy based on cultivation, ritual, and humane leadership.',
    texts: ['Analects', 'Mencius', 'Great Learning'],
    teachings: ['Ren and li', 'Filial ethics', 'Moral governance'],
    recommendedBookSlugs: ['analects', 'i-ching'],
    relatedCivilizationSlugs: ['taoist'],
  },
  {
    slug: 'tibetan',
    name: 'Tibetan',
    period: '~7th century CE-present',
    region: 'Tibet and Himalayan regions',
    summary: 'A rich synthesis of Buddhist philosophy, tantra, ritual, and scholastic analysis.',
    texts: ['Bardo Thodol', 'Lamrim Chenmo', 'Bodhicaryavatara commentaries'],
    teachings: ['Mind training', 'Compassion and emptiness', 'Ritual and realization'],
    recommendedBookSlugs: ['dhammapada', 'upanishads'],
    relatedCivilizationSlugs: ['buddhist', 'hindu'],
  },
  {
    slug: 'sufi',
    name: 'Sufi',
    period: '~8th century CE-present',
    region: 'Islamicate world',
    summary: 'Mystical disciplines emphasizing remembrance, purification, and love of the Real.',
    texts: ['Mathnawi', 'Futuhat al-Makkiyya', 'Conference of the Birds'],
    teachings: ['Dhikr', 'Inner purification', 'Love and gnosis'],
    recommendedBookSlugs: ['muqaddimah'],
    relatedCivilizationSlugs: ['islamic', 'persian'],
  },
  {
    slug: 'stoic',
    name: 'Stoic',
    period: '~3rd century BCE-2nd century CE',
    region: 'Greek and Roman world',
    summary: 'A practical philosophy of virtue, resilience, and rational alignment with nature.',
    texts: ['Meditations', 'Discourses', 'Letters to Lucilius'],
    teachings: ['Control and acceptance', 'Virtue as highest good', 'Universal reason'],
    recommendedBookSlugs: ['meditations', 'the-republic'],
    relatedCivilizationSlugs: ['roman', 'greek'],
  },
]

export type GlossaryTerm = {
  slug: string
  term: string
  language: string
  definition: string
  context: string
  relatedTermSlugs?: string[]
  recommendedBookSlugs?: string[]
}

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    slug: 'tao',
    term: 'Tao',
    language: 'Chinese',
    definition: 'The Way; the generative and ordering principle of reality in Taoism.',
    context: 'Used to describe both cosmic process and skillful alignment in action.',
    relatedTermSlugs: ['logos', 'dharma'],
    recommendedBookSlugs: ['tao-te-ching', 'i-ching'],
  },
  {
    slug: 'logos',
    term: 'Logos',
    language: 'Greek',
    definition: 'Reasoned order, discourse, and intelligible structure.',
    context: 'In Stoicism, logos is the rational principle pervading nature.',
    relatedTermSlugs: ['tao', 'dharma'],
    recommendedBookSlugs: ['the-republic', 'meditations'],
  },
  {
    slug: 'dharma',
    term: 'Dharma',
    language: 'Sanskrit',
    definition: 'Law, duty, teaching, and sustaining order.',
    context: 'Its meaning shifts by tradition and genre, from ethics to metaphysics.',
    relatedTermSlugs: ['tao', 'maat'],
    recommendedBookSlugs: ['bhagavad-gita', 'upanishads'],
  },
  {
    slug: 'maat',
    term: 'Maat',
    language: 'Egyptian',
    definition: 'Truth, justice, right measure, and cosmic balance.',
    context: 'Maat binds ethics, kingship, and cosmology in Egyptian thought.',
    relatedTermSlugs: ['dharma', 'logos'],
    recommendedBookSlugs: ['egyptian-book-of-the-dead', 'enuma-elish'],
  },
  {
    slug: 'sunyata',
    term: 'Sunyata',
    language: 'Sanskrit',
    definition: 'Emptiness; lack of fixed, independent essence.',
    context: 'A central Buddhist teaching for understanding interdependence and compassion.',
    relatedTermSlugs: ['dharma'],
    recommendedBookSlugs: ['dhammapada', 'upanishads'],
  },
  {
    slug: 'me',
    term: 'Me',
    language: 'Sumerian',
    definition: 'Cosmic decrees or foundational powers ordering civilization and social forms.',
    context: 'The concept of me articulates how order, craft, governance, and ritual are distributed and preserved.',
    relatedTermSlugs: ['maat', 'dharma'],
    recommendedBookSlugs: ['sumerian-myths', 'enuma-elish'],
  },
  {
    slug: 'teotl',
    term: 'Teotl',
    language: 'Nahuatl',
    definition: 'Dynamic sacred force or process immanent in reality.',
    context: 'Often used in Mesoamerican thought to describe a living, transforming sacred process.',
    relatedTermSlugs: ['tao', 'logos'],
    recommendedBookSlugs: ['popol-vuh'],
  },
]

export const AMAZON_ASSOCIATE_DEFAULT = 'livinglibrary-20'

export function getAmazonLink(asin: string, associateId?: string) {
  return `https://www.amazon.com/dp/${asin}?tag=${associateId || AMAZON_ASSOCIATE_DEFAULT}`
}

export const CIVILIZATION_SLUG_ALIASES: Record<string, string> = {
  taoist: 'taoist',
  greek: 'greek',
  roman: 'roman',
  hindu: 'hindu',
  buddhist: 'buddhist',
  egyptian: 'egyptian',
  neoplatonic: 'neoplatonic',
  confucian: 'confucian',
  renaissance: 'hermetic',
  chinese: 'confucian',
  islamic: 'islamic',
  mesopotamian: 'mesopotamian',
  babylonian: 'babylonian',
  sumerian: 'sumerian',
  mayan: 'mayan',
}
