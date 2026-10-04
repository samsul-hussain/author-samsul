import { Book, ServicePackage, Milestone, Testimonial } from '../types';

import coverProphecy from '../assets/images/amazon_prophecy.jpg';
import coverJannah from '../assets/images/amazon_sunnah.jpg';
import coverDua from '../assets/images/amazon_dua.jpg';

import portraitCircle from '../assets/images/samsul_circle_portrait_1790692830841.jpg';
import portraitHoldingBook from '../assets/images/samsul_holding_book_1790697157930.jpg';
import portraitEditorial from '../assets/images/hero_author_editorial_1790691830904.jpg';

// Default official photo for Samsul Hussain across the entire portfolio
const heroPortraitCircle = portraitCircle;

import coverFishProphet from '../assets/images/cover_fish_prophet_1790699144026.jpg';
import coverRamadanPlaces from '../assets/images/cover_ramadan_places_1790699165181.jpg';
import coverAnimalsKids from '../assets/images/cover_animals_kids_1790699180626.jpg';

import gigFormatting from '../assets/images/fiverr_kdp_formatting.jpg';
import gigCoverDesign from '../assets/images/fiverr_cover_design.jpg';
import gigChildrenBooks from '../assets/images/fiverr_children_books.jpg';

export {
  heroPortraitCircle,
  portraitCircle,
  portraitHoldingBook,
  portraitEditorial,
  coverProphecy,
  coverJannah,
  coverDua,
  coverFishProphet,
  coverRamadanPlaces,
  coverAnimalsKids,
  gigFormatting,
  gigCoverDesign,
  gigChildrenBooks,
};

export const AUTHOR_INFO = {
  name: "Samsul Hussain",
  role: "Author, Publisher & AI Operations Strategist",
  credentials: "Harvard CS50x · UN Volunteer Media Team · Self-Publishing Specialist",
  email: "hussainsamsul625@gmail.com",
  amazonStoreUrl: "https://www.amazon.co.uk/stores/Samsul-Hussain/author/B0GKWCFBDG?ref=ap_rdr&shoppingPortalEnabled=true",
  amazonProfileUrl: "https://www.amazon.co.uk/stores/author/B0GKWCFBDG?ingress=0&visitId=e1d8d287-0a8b-4682-833f-46f5dcde3013&ref_=aufs_ap_ahdr_dsk_aa",
  amazonAuthorCentralUrl: "https://www.amazon.com/stores/author/B0GKWCFBDG/about?ingress=0&visitId=476de294-615f-4d82-9691-92c94d723aa4&ref_=aufs_ap_ahdr_dsk_ab&ccs_id=fc84b401-b181-46c5-87d7-9b096a5ea58c",
  upworkUrl: "https://www.upwork.com/freelancers/~01ac0cab41bb7e8fbb?mp_source=share",
  fiverrUrl: "https://www.fiverr.com/s/jyj6bEo",
  linkedinUrl: "https://www.linkedin.com/in/samsul-hussain",
  githubUrl: "https://github.com/samsul-hussain",
  location: "Global / Remote",
};

export const BOOKS_DATA: Book[] = [
  {
    id: "prophecy-proven",
    title: "Prophecy Proven",
    subtitle: "Spoken 1,400 Years Ago, Proven by Science Today",
    category: "non-fiction",
    categoryLabel: "Science & Non-Fiction",
    coverImage: coverProphecy,
    rating: 4.9,
    reviewCount: 142,
    publishDate: "2026",
    publisher: "Amazon KDP Independent Publishing",
    asinOrIsbn: "B0H9BRF4ZW",
    tagline: "Where ancient wisdom and modern peer-reviewed laboratory science converge.",
    synopsis: "For centuries, traditional Prophetic traditions (Sunnah) offered guidance on nutrition, daily rhythms, sleep positions, intermittent fasting, and mental mindfulness. Today, clinical pathology, molecular microbiology, and chronobiology are verifying these exact protocols. Written through the dual lens of a former biology lecturer and a modern systems thinker, Prophecy Proven reveals the profound physiological mechanisms behind 1,400-year-old revelations.",
    formats: [
      { type: "Hardcover Edition", price: "USD 19.63 / £15.49", pages: 284, badge: "Collector Edition" },
      { type: "Paperback Edition", price: "USD 12.99 / £9.99", pages: 284, badge: "Popular" },
      { type: "Kindle eBook", price: "USD 4.99 / £3.99", badge: "Instant Read" }
    ],
    keyHighlights: [
      "Intermittent Fasting & Autophagy: How Sunnah Monday/Thursday fasts trigger cellular repair validated by the 2016 Nobel Prize in Medicine.",
      "Right-Side Sleep Posture: Cardiovascular hemodynamic optimization and glymphatic brain detoxification documented in current neurology.",
      "Nigella Sativa (Black Seed) & Thymoquinone: Molecular anti-inflammatory pathways backed by over 1,200 peer-reviewed PubMed studies.",
      "Purity, Miswak & The Oral Microbiome: Modern dental research verifying natural antimicrobial efficacy over synthetic mouthwashes."
    ],
    sampleExcerpt: {
      chapterTitle: "Chapter 3: The Cellular Engine of Autophagy",
      text: [
        "In 2016, Yoshinori Ohsumi was awarded the Nobel Prize in Physiology or Medicine for unraveling the mechanisms of autophagy—the body’s innate cellular recycling protocol. When nutrients are withheld, lysosomes degrade damaged organelles and misfolded proteins, essentially purging cellular debris.",
        "Fourteen centuries prior, in the arid desert of the Arabian Peninsula, regular bi-weekly fasting on Mondays and Thursdays was established not merely as ritual, but as an indispensable biological cadence. When we map fasting hours onto modern metabolic timelines, the synchronization is breathtaking.",
        "This is not coincidental folklore; it is the precision of foundational design, verified under electron microscopes millennia later."
      ]
    },
    amazonUrl: "https://www.amazon.co.uk/Prophecy-Proven-Spoken-Years-Science/dp/B0H9BRF4ZW?ref_=ast_author_dp&th=1&psc=1",
    lookInsideUrl: "https://read.amazon.co.uk/sample/B0H9BRF4ZW?clientId=share",
    isBestseller: true
  },
  {
    id: "fish-that-swallowed-a-prophet",
    title: "The Fish That Swallowed a Prophet",
    subtitle: "A Story of Courage, Hope and Forgiveness",
    category: "children",
    categoryLabel: "Islamic Children's Storybook",
    coverImage: coverFishProphet,
    rating: 5.0,
    reviewCount: 46,
    publishDate: "2026",
    publisher: "Amazon KDP Publishing",
    asinOrIsbn: "B0HDMHCMTL",
    tagline: "A timeless, heartwarming journey of Prophet Yunus for young readers exploring courage, hope, and sincere repentance.",
    synopsis: "Specially crafted for children and families, 'The Fish That Swallowed a Prophet' brings the inspiring Quranic story of Prophet Yunus (Jonah) to life with warmth and emotional resonance. Guided through deep oceanic waters inside the belly of the giant fish, children discover the profound power of prayer, admitting mistakes, patience in hardship, and the limitless mercy of the Creator. Richly illustrated to spark curiosity and bedtime conversations.",
    formats: [
      { type: "Paperback Edition", price: "USD 11.99 / £8.99", pages: 48, badge: "Amazon Verified" },
      { type: "Hardcover Edition", price: "USD 18.50 / £14.25", pages: 48, badge: "Illustrated Keepsake" }
    ],
    keyHighlights: [
      "The beloved story of Prophet Yunus told in gentle, child-accessible narrative prose.",
      "Teaches core emotional and spiritual values: humility, sincere dua, and never losing hope.",
      "Vibrant full-color storybook illustrations capturing deep ocean wonders and coastal landscapes.",
      "Published and formatted in collaboration with educators and international creative teams."
    ],
    sampleExcerpt: {
      chapterTitle: "In the Belly of the Great Fish: A Whispered Prayer",
      text: [
        "In the deep, dark calm of the sea, where no sunlight could reach, Yunus remembered the Creator. He bowed his heart in humble prayer: 'Lā ilāha illā Anta, subhānaka, innī kuntu minaz-zālimīn' (There is no deity except You; exalted are You. Indeed, I have been among the wrongdoers).",
        "Even in the loneliest ocean depths, a sincere prayer is always heard. Hope returned like a warm glow in the waters."
      ]
    },
    amazonUrl: "https://www.amazon.co.uk/dp/B0HDMHCMTL",
    lookInsideUrl: "https://www.amazon.co.uk/dp/B0HDMHCMTL",
    isNewRelease: true
  },
  {
    id: "ramadan-historical-places-coloring",
    title: "Islamic Historical Places Coloring Book",
    subtitle: "10 Days of Ramadan Discovery (30 Days of Ramadan: A Coloring Journey for Kids)",
    category: "children",
    categoryLabel: "Ramadan Activity & Coloring Book",
    coverImage: coverRamadanPlaces,
    rating: 5.0,
    reviewCount: 39,
    publishDate: "2026",
    publisher: "Amazon KDP Publishing",
    asinOrIsbn: "B0GMF2377T",
    tagline: "Explore iconic Islamic architecture and holy sanctuaries through 10 days of mindful coloring and discovery.",
    synopsis: "Take young explorers on an architectural and spiritual adventure during the blessed month of Ramadan. 'Islamic Historical Places Coloring Book' showcases 10 breathtaking landmarks across the Islamic world—including the Holy Kaaba in Makkah, the Prophet's Mosque in Madinah, Masjid Al-Aqsa, the Blue Mosque, the Alhambra, and historic desert fortresses. Paired with historical fun facts, geometric pattern outlines, and vocabulary tracing.",
    formats: [
      { type: "Paperback Edition", price: "USD 9.99 / £7.85", pages: 56, badge: "8.5 x 11 In" },
      { type: "Ramadan Activity Edition", price: "USD 9.99", badge: "Single-Sided Print" }
    ],
    keyHighlights: [
      "10 majestic historical sanctuaries presented with engaging cultural and spiritual context for kids.",
      "Single-sided bleed-resistant pages tailored for coloring pencils, gel pens, and markers.",
      "Promotes geographic curiosity and appreciation of Islamic heritage and geometric art.",
      "Part of the popular '30 Days of Ramadan: A Coloring Journey for Kids' series."
    ],
    sampleExcerpt: {
      chapterTitle: "Discovery Day 1: The Sanctuary of Makkah",
      text: [
        "Welcome to Makkah, the peaceful heart of the Muslim world! Here stands the sacred Kaaba, surrounded by pilgrims from every corner of the earth.",
        "Color the golden door, trace the geometric crescent archways, and discover how communities have gathered here in brotherhood for over a millennium."
      ]
    },
    amazonUrl: "https://www.amazon.co.uk/dp/B0GMF2377T",
    lookInsideUrl: "https://www.amazon.co.uk/dp/B0GMF2377T",
    isNewRelease: true
  },
  {
    id: "sunnah-fruits-of-jannah",
    title: "Sunnah Fruits of Jannah",
    subtitle: "A Ramadan Coloring Adventure For Kids (30 Days of Ramadan: A Coloring Journey for Kids)",
    category: "children",
    categoryLabel: "Children's Activity Book",
    coverImage: coverJannah,
    rating: 5.0,
    reviewCount: 88,
    publishDate: "2026",
    publisher: "KDP Kids Discovery",
    asinOrIsbn: "B0GNBZC681",
    tagline: "Inspiring young hearts through faith, nature, and creative coloring adventures.",
    synopsis: "Specially designed for children aged 4 to 8, Sunnah Fruits of Jannah turns the blessings of wholesome nutrition into an interactive coloring journey. From golden sweet dates to jewel-like pomegranates, succulent figs, and soothing honey, each page pairs easy-to-read rhyming facts with bold, high-contrast coloring scenes, maze puzzles, and handwriting tracing.",
    formats: [
      { type: "Paperback Edition", price: "$9.99", pages: 64, badge: "Amazon Verified" },
      { type: "Activity Coloring Edition", price: "$9.99", badge: "8.5 x 11 In" }
    ],
    keyHighlights: [
      "Featuring blessed foods mentioned in the Quran: Dates, Pomegranates, Figs, Olives, Grapes, Honey, and more.",
      "Single-sided printing with bleed-prevention backing for marker and crayon friendliness.",
      "Engaging tracing exercises that cultivate fine motor skills and English handwriting.",
      "Positive character-building values: gratitude (Shukr), sharing, and wholesome eating."
    ],
    sampleExcerpt: {
      chapterTitle: "Activity Spotlight: The Ruby Pomegranate",
      text: [
        "Did you know? Inside every ruby pomegranate sits hundreds of glistening seeds, each wrapped in a sweet juicy jewel!",
        "Color the pomegranate trees with emerald green leaves, trace the word 'GRATITUDE', and guide the friendly bee through the garden maze to the honeycomb blossom."
      ]
    },
    amazonUrl: "https://www.amazon.com/dp/B0GNBZC681",
    lookInsideUrl: "https://www.amazon.com/dp/B0GNBZC681?asin=B0GNBZC681&revisionId=&format=4&depth=1",
    isNewRelease: true
  },
  {
    id: "fun-colouring-animals-kids",
    title: "A Fun Colouring Book for Kids Aged 3 to 6",
    subtitle: "Colour the Animals with Fun: Playful Wildlife & Farm Friends",
    category: "children",
    categoryLabel: "Early Childhood Coloring Book",
    coverImage: coverAnimalsKids,
    rating: 5.0,
    reviewCount: 31,
    publishDate: "2026",
    publisher: "Amazon KDP Publishing",
    asinOrIsbn: "B0GHLHJ62R",
    tagline: "Super cute, bold-outline animals designed specifically for little hands aged 3 to 6.",
    synopsis: "Spark hours of joyful creativity and fine motor development! 'A Fun Colouring Book for Kids Aged 3 to 6' is filled with adorable, easy-to-color jungle creatures, friendly farm animals, and ocean friends. Thick dark outlines make it effortless for toddlers and preschoolers to stay within the lines, building confidence, color recognition, and hand-eye coordination.",
    formats: [
      { type: "Paperback Edition", price: "USD 8.99 / £6.99", pages: 50, badge: "Large 8.5 x 11 In" },
      { type: "Preschool Edition", price: "USD 8.99", badge: "Thick Bold Outlines" }
    ],
    keyHighlights: [
      "Extra-thick bold lines specifically engineered for toddler and preschool grip development.",
      "Features beloved animals: playful lions, happy elephants, cheeky monkeys, dolphins, and puppy friends.",
      "Single-sided printing prevents bleed-through from heavy crayons or markers.",
      "Encourages screen-free relaxation and creative artistic expression."
    ],
    sampleExcerpt: {
      chapterTitle: "Spotlight Animal: The Gentle Forest Elephant",
      text: [
        "Meet Ellie the Elephant! She loves splashing water in the river with her long trunk.",
        "Pick your favorite blues, purples, or greys to give Ellie a vibrant new look, and count the 5 shiny stars above her head!"
      ]
    },
    amazonUrl: "https://www.amazon.co.uk/dp/B0GHLHJ62R",
    lookInsideUrl: "https://www.amazon.co.uk/dp/B0GHLHJ62R",
    isNewRelease: true
  },
  {
    id: "childs-day-in-dua",
    title: "A Child's Day In Dua",
    subtitle: "A Colorful Guide to Daily Supplications with Arabic, Transliteration, and English Meanings (30 Days of Ramadan: A Coloring Journey for Kids)",
    category: "children",
    categoryLabel: "Islamic Children's Activity Book",
    coverImage: coverDua,
    rating: 5.0,
    reviewCount: 38,
    publishDate: "2026",
    publisher: "Amazon KDP Publishing",
    asinOrIsbn: "B0GM6QLXMV",
    tagline: "A vibrant, heartfelt guide for young minds to learn essential daily supplications with Arabic, transliteration, and English meanings.",
    synopsis: "Make prayer and mindfulness a cherished part of your child’s daily routine. 'A Child's Day In Dua' offers an enchanting, richly illustrated journey through essential daily supplications—from waking up in the morning, entering the home, eating meals, to bedtime prayers. Each page features the original Arabic text in clear script, simplified phonetic transliteration for effortless pronunciation, and accessible English translations accompanied by delightful coloring illustrations.",
    formats: [
      { type: "Paperback Edition", price: "USD 10.58 / £8.35", pages: 72, badge: "8.5 x 11 In" },
      { type: "Activity / Coloring Edition", price: "USD 10.58", badge: "Single-Sided Print" }
    ],
    keyHighlights: [
      "Clear, large-print Arabic script paired with simplified phonetic transliteration for effortless pronunciation.",
      "Easy child-friendly English explanations that illuminate the deeper spiritual beauty behind each daily prayer.",
      "Covers all key daily moments: waking up, eating, leaving home, entering the masjid, seeking protection, and sleeping.",
      "Delightful high-contrast coloring scenes designed to keep young children aged 4-9 creatively immersed.",
      "Part of the acclaimed '30 Days of Ramadan: A Coloring Journey for Kids' series."
    ],
    sampleExcerpt: {
      chapterTitle: "Morning Supplication: Welcoming the New Day",
      text: [
        "Al-hamdu lillāhilladhī ahyānā ba'da mā amātanā wa ilayhin-nushūr. (All praise is due to Allah, who gave us life after taking it, and unto Him is the resurrection).",
        "Every morning is a fresh gift. Color the rising sun in warm golden yellows, trace the Arabic letters with pride, and whisper thank you to the Creator for a brand new day of joy and kindness."
      ]
    },
    amazonUrl: "https://www.amazon.co.uk/dp/B0GM6QLXMV",
    lookInsideUrl: "https://www.amazon.co.uk/dp/B0GM6QLXMV",
    isNewRelease: true
  }
];

export const SERVICES_DATA: ServicePackage[] = [
  {
    id: "kdp-interior-formatting",
    title: "Amazon KDP Paperback & Hardcover Formatting",
    shortDesc: "Pixel-perfect interior typography, gutter margins, running headers, and zero-bleed error guarantee for Amazon KDP Print.",
    fullDesc: "Complete interior layout and typographical formatting for non-fiction, scientific literature, memoirs, and novels. Formatted strictly in compliance with Amazon KDP print-on-demand requirements, ensuring zero gutter-pinch and flawless print approval.",
    deliverables: [
      "Ready-to-upload print PDF tailored to your exact trim size (5.5x8.5, 6x9, etc.)",
      "Dynamic clickable Table of Contents (TOC) with linked chapters",
      "Custom running headers, footers, drop caps, and ornamental section dividers",
      "Gutter margin and spine width calculations matching your exact page count",
      "Zero-bleed error guarantee with expedited approval"
    ],
    turnaround: "24 – 48 Hours",
    popularFor: "Non-fiction, academic literature, poetry, and memoirs",
    platforms: ["Fiverr", "Upwork", "Direct"],
    fiverrUrl: "https://www.fiverr.com/s/jyj6bEo",
    upworkUrl: "https://www.upwork.com/freelancers/~01ac0cab41bb7e8fbb",
    iconName: "file-text",
    gigImage: gigFormatting
  },
  {
    id: "conversion-cover-design",
    title: "Conversion-Focused Book Cover Design",
    shortDesc: "High-CTR paperback wrap, hardcover dust jacket, and Kindle eBook covers engineered for thumbnail clickability.",
    fullDesc: "Book buyers judge by thumbnails in under two seconds. We design high-contrast, visually arresting covers that tell an emotional story at 80px while rendering in crisp 300 DPI CMYK for print.",
    deliverables: [
      "Full print wrap (Front cover, spine with exact thickness, and barcode-ready back cover)",
      "High-resolution 300 DPI CMYK PDF print file + RGB Kindle cover",
      "Photorealistic 3D book mockups for Amazon A+ Content and social promotion",
      "Typography hierarchy optimized for thumbnail legibility on Amazon mobile app",
      "Editable source files (PSD / InDesign / Illustrator)"
    ],
    turnaround: "48 Hours",
    popularFor: "Self-published authors, business books, and thrillers",
    platforms: ["Fiverr", "Upwork"],
    fiverrUrl: "https://www.fiverr.com/s/jyj6bEo",
    upworkUrl: "https://www.upwork.com/freelancers/~01ac0cab41bb7e8fbb",
    iconName: "palette",
    gigImage: gigCoverDesign
  },
  {
    id: "children-activity-book-publishing",
    title: "Children's Activity & Storybook Creation",
    shortDesc: "End-to-end production of children's coloring books, tracing guides, and illustrated storybooks ready for Amazon KDP.",
    fullDesc: "From conceptualization and illustration upscaling to 8.5x11 single-sided page layout and bleed configuration. Having successfully published multiple coloring books on Amazon, Samsul provides battle-tested production quality.",
    deliverables: [
      "Custom 8.5x11 high-contrast line art illustrations ready for coloring",
      "Single-sided print layout with bleed buffers to prevent ink bleed-through",
      "Handwriting tracing guidelines, dot-to-dot mazes, and word searches",
      "Eye-catching colorful front and back cover designs tailored for parents & teachers",
      "Amazon KDP backend category and keyword setup"
    ],
    turnaround: "3 – 5 Days",
    popularFor: "Coloring books, tracing guides, and children's faith literature",
    platforms: ["Fiverr", "Direct"],
    fiverrUrl: "https://www.fiverr.com/s/jyj6bEo",
    upworkUrl: "https://www.upwork.com/freelancers/~01ac0cab41bb7e8fbb",
    iconName: "search",
    gigImage: gigChildrenBooks
  },
  {
    id: "ai-publishing-automation",
    title: "AI Operations & Automated Publishing Workflows",
    shortDesc: "Bespoke LLM pipelines, autonomous QA scripts, and content operational frameworks for digital creators and publishers.",
    fullDesc: "Harnessing the power of generative AI and Python automation (rooted in Harvard CS50 and University of Helsinki AI foundations) to eliminate repetitive publishing bottlenecks.",
    deliverables: [
      "Custom Python scripts for batch manuscript formatting and typography validation",
      "Amazon A10 algorithm keyword extraction and competitor gap analysis pipelines",
      "Automated multilingual translation verification and glossary enforcement",
      "Content moderation and copyright risk scanning agent workflows",
      "Full documentation and ongoing workflow maintenance"
    ],
    turnaround: "Project Based",
    popularFor: "Publishing houses, agencies, and prolific independent authors",
    platforms: ["Upwork", "Direct"],
    fiverrUrl: "https://www.fiverr.com/s/jyj6bEo",
    upworkUrl: "https://www.upwork.com/freelancers/~01ac0cab41bb7e8fbb",
    iconName: "bot"
  }
];

export const TIMELINE_MILESTONES: Milestone[] = [
  {
    period: "2025 – Present",
    title: "Independent Author & KDP Publisher",
    organization: "Amazon Kindle Direct Publishing",
    location: "Global",
    type: "work",
    summary: "Authored and published scientific non-fiction and bestselling children's educational activity books reaching readers in the UK, US, and Europe.",
    achievements: [
      "Published 'Prophecy Proven'—unifying biomedical research with 1,400-year-old Sunnah health traditions.",
      "Authored acclaimed children's titles: 'The Fish That Swallowed a Prophet', 'Sunnah Fruits of Jannah', and 'A Child\\'s Day In Dua'.",
      "Ranked in top competitive Amazon KDP subcategories across religion, science, and children's activity books."
    ],
    badgeText: "Amazon KDP Author"
  },
  {
    period: "Aug 2025 – Present",
    title: "Global Volunteer Media & Outreach Contributor",
    organization: "United Nations Volunteers (UNV)",
    location: "Global / Online",
    type: "volunteering",
    summary: "Active contributor to UN Sustainable Development Goal 17: Partnerships for the Goals through digital media production and outreach.",
    achievements: [
      "Authored educational digital media scripts focusing on international development cooperation.",
      "Assisted in amplifying multi-stakeholder partnership narratives across social media channels.",
      "Promoting literacy, open science, and sustainable development awareness globally."
    ],
    badgeText: "UN Volunteer SDG 17"
  },
  {
    period: "2024 – Present",
    title: "Publishing Strategist & AI Operations Specialist",
    organization: "Fiverr Pro & Upwork Freelance Platforms",
    location: "Remote",
    type: "work",
    summary: "Providing end-to-end self-publishing consulting, interior typography, conversion cover design, and AI workflow engineering.",
    achievements: [
      "100% 5-star client satisfaction rating across book formatting and print cover design orders.",
      "Engineered automated layout QA scripts saving self-publishing clients 20+ hours per title.",
      "Delivered over 50+ print-ready manuscripts with zero Amazon KDP rejection flags."
    ],
    badgeText: "Top Rated Talent"
  },
  {
    period: "Jan 2024 – Sep 2025",
    title: "College Lecturer in Biology",
    organization: "Sylhet Science and Technology College",
    location: "Sylhet, Bangladesh",
    type: "work",
    summary: "Taught pre-university students cellular biology, human physiology, genetics, and scientific methodology.",
    achievements: [
      "Trained 300+ students with an above-average distinction rate in board examinations.",
      "Pioneered multimedia interactive slide presentations and simulated biology laboratory modules.",
      "Grounding in biological sciences directly sparked the rigorous scientific methodology behind 'Prophecy Proven'."
    ],
    badgeText: "Academic Foundation"
  },
  {
    period: "Academic & Tech Credentials",
    title: "Computer Science & Artificial Intelligence Foundations",
    organization: "Harvard University, University of Helsinki & Google Cloud",
    location: "Verified Certifications",
    type: "education",
    summary: "Rigorous formal training in computer science, algorithmic complexity, artificial intelligence principles, and enterprise generative AI.",
    achievements: [
      "Harvard University: CS50x Certificate in Computer Science (C, Python, SQL, Algorithms, Web Development).",
      "University of Helsinki & Reaktor: Elements of AI Certification (Search algorithms, Bayesian probability, Neural networks).",
      "Google Cloud: Generative AI Leader certification (Enterprise LLM deployments and cloud infrastructure)."
    ],
    badgeText: "Harvard CS50x & Helsinki AI"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Najmul Hossain",
    initials: "NH",
    avatarColor: "bg-blue-600",
    role: "Sales coordinator | Telesales Specialist at Euro Foods Group, England",
    connection: "1st",
    openToWork: true,
    service: "Print Design",
    rating: 5.0,
    date: "September 22, 2026",
    quote: "I had a great experience working with Samsul for my paperback print design.👍 He took care of the formatting and print setup for Amazon KDP without any hassle. The journey was smooth, his communication was quick, and the final result looks fantastic. Will definitely work with him again.😊"
  },
  {
    name: "Badrul Hossin",
    initials: "BH",
    avatarColor: "bg-emerald-600",
    role: "IT Service Engineer",
    connection: "1st",
    openToWork: true,
    service: "Ghostwriting & Publishing",
    rating: 5.0,
    date: "September 21, 2026",
    quote: "Working with Samsul on my book publishing project was an absolute pleasure. He handled everything from stunning book illustrations and professional formatting to the final Amazon KDP publishing process seamlessly. The entire journey was smooth, and his communication and quick response time made the collaboration effortless. Highly recommended for anyone looking to bring their book to life 👍"
  },
  {
    name: "Dr. Tariq Rahman",
    initials: "TR",
    avatarColor: "bg-amber-600",
    role: "Health & Integrative Medicine Author",
    connection: "1st",
    openToWork: false,
    service: "Paperback & Hardcover Formatting",
    rating: 5.0,
    date: "August 14, 2026",
    quote: "Samsul formatted my 320-page non-fiction book and designed the hardcover wrap. It was approved on Amazon KDP on the first attempt with zero bleed warnings. His speed and precision are unmatched."
  }
];
