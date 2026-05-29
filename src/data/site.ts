// src/data/site.ts
// ─────────────────────────────────────────────────────────────
// Single source of truth for all site content.
// Update this file to change any text, links, or data without
// touching component or layout files.
// ─────────────────────────────────────────────────────────────

export const siteConfig = {
  name: 'Dr. Elara Voss',
  title: 'Dr. Elara Voss — Specialist Dermatologist',
  description:
    'Dr. Elara Voss offers evidence-based dermatological care in Johannesburg — from medical skin conditions to advanced cosmetic treatments.',
  tagline: 'Specialist Dermatologist · Johannesburg',
  practiceName: 'Dr. Elara Voss Dermatology',
  practiceNo: 'MP 0000000',
  year: 2026,
};

export const contact = {
  address: '12 Rivonia Rd, Sandton',
  phone: '+27 11 000 0000',
  email: 'hello@drvoss.co.za',
};

export const hours = [
  { day: 'Monday – Wednesday', time: '08:00 – 17:00', closed: false },
  { day: 'Thursday',           time: '08:00 – 19:00', closed: false },
  { day: 'Friday',             time: '08:00 – 15:00', closed: false },
  { day: 'Saturday',           time: '08:00 – 12:00', closed: false },
  { day: 'Sunday',             time: 'Closed',         closed: true  },
];

export const stats = [
  { value: '15+',   label: 'Years Experience' },
  { value: '3 200+',label: 'Patients Treated' },
  { value: '4.9★',  label: 'Patient Rating'   },
];

export const services = [
  {
    icon: 'biotech',
    title: 'Medical Dermatology',
    description:
      'Diagnosis and treatment of eczema, psoriasis, acne, rosacea, fungal infections, and other chronic skin conditions.',
  },
  {
    icon: 'manage_search',
    title: 'Skin Cancer Screening',
    description:
      'Full body mole mapping, dermoscopy, and early detection of melanoma and non-melanoma skin cancers using advanced imaging.',
  },
  {
    icon: 'vaccines',
    title: 'Injectables & Fillers',
    description:
      'Anti-wrinkle injections, dermal fillers and lip enhancements performed with precision for natural, subtle results.',
  },
  {
    icon: 'wb_sunny',
    title: 'Laser Treatments',
    description:
      'Fractional CO₂ laser resurfacing, laser hair removal, pigmentation correction and vascular lesion treatment.',
  },
  {
    icon: 'spa',
    title: 'Chemical Peels',
    description:
      'Medical-grade peels targeting sun damage, hyperpigmentation, acne scarring and uneven skin texture.',
  },
  {
    icon: 'child_care',
    title: 'Paediatric Dermatology',
    description:
      'Gentle, specialised care for children with eczema, birthmarks, warts, and other childhood skin conditions.',
  },
];

export const about = {
  name: 'Dr. Elara Voss',
  yearsOfPractice: '15+',
  bio: [
    'With over 15 years dedicated to dermatological medicine, Dr. Voss combines deep clinical expertise with a patient-first approach. She earned her fellowship through the College of Dermatologists of South Africa and holds a special interest in skin cancer prevention and complex inflammatory skin disorders.',
    'Dr. Voss believes every patient deserves a thorough consultation, clear communication, and a personalised treatment plan — never rushed, always evidence-based.',
  ],
  credentials: [
    'MBChB — University of Cape Town',
    'FC Derm (SA) — College of Dermatologists of South Africa',
    'Member — South African Society of Dermatology',
    'Advanced Laser Certification — American Society for Laser Medicine',
  ],
};

export const testimonials = [
  {
    initial: 'S',
    name: 'Siyanda M.',
    detail: 'Treated for Acne · 2024',
    quote:
      'After years of struggling with cystic acne and feeling self-conscious, Dr. Voss finally gave me a plan that actually worked. I feel like myself again.',
  },
  {
    initial: 'P',
    name: 'Patrick D.',
    detail: 'Skin Cancer Screening · 2024',
    quote:
      'The skin cancer screening was thorough and Dr. Voss caught something my GP had missed. Her attention to detail could well have saved my life.',
  },
  {
    initial: 'L',
    name: 'Lerato K.',
    detail: 'Anti-Wrinkle Treatment · 2025',
    quote:
      'I was nervous about injectables but Dr. Voss made me feel completely at ease. The results look incredibly natural — everyone asks what I\'m doing differently!',
  },
];

export const serviceOptions = [
  'Medical Dermatology Consultation',
  'Skin Cancer Screening',
  'Injectables & Fillers',
  'Laser Treatments',
  'Chemical Peels',
  'Paediatric Dermatology',
  'Other / General Enquiry',
];

export const timeSlots = [
  '08:00 – 09:00',
  '09:00 – 10:00',
  '10:00 – 11:00',
  '11:00 – 12:00',
  '13:00 – 14:00',
  '14:00 – 15:00',
  '15:00 – 16:00',
];

export const navLinks = [
  { href: '#services',      label: 'Services'   },
  { href: '#about',         label: 'About'      },
  { href: '#testimonials',  label: 'Patients'   },
];
