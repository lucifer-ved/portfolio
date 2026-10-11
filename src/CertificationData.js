// Certificate images live in public/certificates/<credentialId>.png
// (export page 1 of each Coursera PDF). A badge shows its View button
// only once that image exists; Verify links to the issuing platform.

// Issuer logos live in public/logos/; a badge falls back to its initials without one.
const logo = (file) => `${process.env.PUBLIC_URL}/logos/${file}`;

const coursera = (credentialId) => ({
  image: `${process.env.PUBLIC_URL}/certificates/${credentialId}.png`,
  link: `https://coursera.org/verify/${credentialId}`
});

export const Certificates = [
  {
    title: 'Azure AI Apps and Agents Developer Associate',
    issuer: 'Microsoft',
    mark: 'MS',
    logo: logo('microsoft.svg'),
    platform: 'Microsoft Learn',
    exam: 'AI-103',
    credentialId: 'B6D539794C2159BB',
    link: 'https://learn.microsoft.com/api/credentials/share/en-us/VedantSolanki-3803/B6D539794C2159BB?sharingId=44727EE6B703727C'
  },
  {
    title: 'Generative AI for Security Fundamentals',
    issuer: 'Edureka',
    mark: 'ED',
    logo: logo('edureka.png'),
    platform: 'Coursera',
    date: 'Sep 23, 2026',
    credentialId: '0TYKR52531SA',
    ...coursera('0TYKR52531SA')
  },
  {
    title: 'Prompt Engineering for ChatGPT',
    issuer: 'Vanderbilt University',
    mark: 'VU',
    logo: logo('vanderbilt.png'),
    platform: 'Coursera',
    date: 'Sep 21, 2026',
    credentialId: 'AEBIPOGDY3Q9',
    ...coursera('AEBIPOGDY3Q9')
  },
  {
    title: 'Modernize Infrastructure and Applications with Google Cloud',
    issuer: 'Google Cloud',
    mark: 'GC',
    logo: logo('google-cloud.svg'),
    platform: 'Coursera',
    date: 'Sep 16, 2026',
    credentialId: 'FSDY9F2LM0OF',
    ...coursera('FSDY9F2LM0OF')
  },
  {
    title: 'Digital Transformation with Google Cloud',
    issuer: 'Google Cloud',
    mark: 'GC',
    logo: logo('google-cloud.svg'),
    platform: 'Coursera',
    date: 'Sep 16, 2026',
    credentialId: 'GY3SN3GPTVDQ',
    ...coursera('GY3SN3GPTVDQ')
  },
  {
    title: 'Develop Generative AI Applications: Get Started',
    issuer: 'IBM',
    mark: 'IBM',
    logo: logo('ibm.svg'),
    platform: 'Coursera',
    date: 'Sep 9, 2026',
    credentialId: 'UYNN4TI0D25S',
    // The largest course of the set: its badge gets the gold dashed highlight
    highlight: true,
    ...coursera('UYNN4TI0D25S')
  }
];

// Topics in progress, shown as one line of chips (no progress tracking).
export const NowLearning = [
  'Agentic AI in Python',
  'LangChain & LangGraph',
  'RAG applications',
  'LLM security',
  'ML on Google Cloud',
  'Marketing analytics'
];
