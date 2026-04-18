// ============================================
// Core Application Constants & Messaging
// ============================================

export const SITE_CONFIG = {
  name: 'GoldenLeaf Financials',
  tagline: 'Protect Your Finances. Build Your Future.',
  description: 'Whether your finances are strong or need work, we help you take the next step.',
  url: 'https://goldenleaffinancials.com',
};

export const NAVIGATION = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services.html' },
  { label: 'Products', href: '/products.html' },
  { label: 'Team', href: '/team.html' },
  { label: 'About', href: '/about.html' },
  { label: 'Contact', href: '/contact.html' },
];

// ============================================
// DUAL PATH MESSAGING (Core UX Concept)
// ============================================

export const DUAL_PATHS = {
  strong: {
    title: 'Already in a Good Place?',
    description: 'Optimize, protect, and grow your wealth',
    benefits: [
      'Maximize investment returns',
      'Protect your assets',
      'Plan for long-term growth',
      'Tax optimization strategies',
    ],
    cta: 'Optimize My Wealth',
    color: 'accent',
  },
  improve: {
    title: 'Need to Improve Your Finances?',
    description: 'Fix credit, reduce risk, build foundation',
    benefits: [
      'Debt reduction strategies',
      'Financial health assessment',
      'Personalized improvement plan',
    ],
    cta: 'Start Improving Today',
    color: 'secondary',
  },
};

// ============================================
// SERVICES
// ============================================

export const SERVICES = [
  {
    id: 'credit-protection',
    title: 'Credit & Risk Protection',
    icon: '🛡️',
    description: 'Strengthen your credit profile and protect your identity',
    benefits: [
      'Credit monitoring & alerts',
      'Identity theft protection',
      'Dispute resolution support',
      'Credit guidance and support',
    ],
    outcome: 'Secure better financial options while minimizing risk',
    featured: true,
  },
  {
    id: 'financial-optimization',
    title: 'Financial Health Optimization',
    icon: '📊',
    description: 'Maximize existing financial strength',
    benefits: [
      'Comprehensive financial audit',
      'Budget optimization',
      'Expense reduction strategies',
      'Cash flow maximization',
    ],
    outcome: 'Increase savings and financial efficiency',
    featured: true,
  },
  {
    id: 'business-funding',
    title: 'Business & Personal Funding',
    icon: '💰',
    description: 'Access capital for growth opportunities',
    benefits: [
      'Small business loans',
      'Personal credit lines',
      'Investment capital access',
      'Funding strategy consulting',
    ],
    outcome: 'Unlock growth capital and business opportunities',
    featured: true,
  },
  {
    id: 'wealth-planning',
    title: 'Long-Term Wealth Planning',
    icon: '🚀',
    description: 'Build lasting wealth and financial security',
    benefits: [
      'Retirement planning',
      'Investment portfolio management',
      'Estate planning',
      'Generational wealth building',
    ],
    outcome: 'Secure your financial future',
    featured: true,
  },
];

// ============================================
// PROCESS STEPS (4-Step Journey)
// ============================================

export const PROCESS_STEPS = [
  {
    step: 1,
    title: 'Assess',
    description: 'Where are you now?',
    details: 'Comprehensive financial health evaluation',
    icon: '📋',
  },
  {
    step: 2,
    title: 'Protect',
    description: 'Secure your current position',
    details: 'Risk mitigation and asset protection',
    icon: '🔒',
  },
  {
    step: 3,
    title: 'Improve',
    description: 'Fix gaps and weaknesses',
    details: 'Targeted strategies for financial improvement',
    icon: '📈',
  },
  {
    step: 4,
    title: 'Build',
    description: 'Grow wealth and opportunities',
    details: 'Long-term wealth accumulation strategies',
    icon: '🌟',
  },
];

// ============================================
// FAQ
// ============================================

export const FAQ = [
  {
    question: 'How long does financial improvement typically take?',
    answer:
      'Results vary by situation, but most clients see meaningful improvements within 3-6 months of implementing our strategies.',
  },
  {
    question: 'Is there an upfront cost?',
    answer:
      'No. Our initial consultation is completely free. We only get paid when you see real results.',
  },
  {
    question: 'What if my situation is very poor?',
    answer:
      'We work with clients at all financial levels. Our strategies are designed to help you improve from wherever you are right now.',
  },
  {
    question: 'How is my financial data protected?',
    answer:
      'We use bank-level encryption and comply with all financial privacy regulations. Your data is never shared without your consent.',
  },
  {
    question: 'Can I work with you if I already have an advisor?',
    answer:
      'Absolutely. Our services complement existing financial advice. We work collaboratively with other professionals.',
  },
  {
    question: 'What does a typical engagement look like?',
    answer:
      'We start with an assessment, create a personalized plan, and provide ongoing support and monitoring. Most engagements last 6-12 months.',
  },
];

// ============================================
// RESULTS & METRICS
// ============================================

export const RESULTS = [
  {
    metric: '+250',
    label: 'Average Credit Score Improvement',
    subtitle: 'for clients in first 6 months',
  },
  {
    metric: '94%',
    label: 'Client Success Rate',
    subtitle: 'achieving their financial goals',
  },
  {
    metric: '$2.3M',
    label: 'Capital Secured',
    subtitle: 'for small business clients',
  },
  {
    metric: '15+ yrs',
    label: 'Combined Industry Experience',
    subtitle: 'from our advisory team',
  },
];

// ============================================
// CTA COPY
// ============================================

export const CTA_TEXT = {
  urgent:
    'The best time to fix or protect your finances was yesterday. The next best time is today.',
  form_primary: 'Get Your Financial Game Plan',
  form_secondary: 'Start Your Free Consultation',
  schedule: 'Schedule a Call',
};
