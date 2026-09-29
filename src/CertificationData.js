// Certificate images live in public/certificates/<credentialId>.png
// (export page 1 of each Coursera PDF). A badge shows its View button
// only once that image exists; Verify always links to Coursera.

const coursera = (credentialId) => ({
  image: `${process.env.PUBLIC_URL}/certificates/${credentialId}.png`,
  link: `https://coursera.org/verify/${credentialId}`
});

export const Certificates = [
  {
    title: 'Generative AI for Security Fundamentals',
    issuer: 'Edureka',
    mark: 'ED',
    platform: 'Coursera',
    date: 'Sep 23, 2026',
    credentialId: '0TYKR52531SA',
    ...coursera('0TYKR52531SA')
  },
  {
    title: 'Prompt Engineering for ChatGPT',
    issuer: 'Vanderbilt University',
    mark: 'VU',
    platform: 'Coursera',
    date: 'Sep 21, 2026',
    credentialId: 'AEBIPOGDY3Q9',
    ...coursera('AEBIPOGDY3Q9')
  },
  {
    title: 'Modernize Infrastructure and Applications with Google Cloud',
    issuer: 'Google Cloud',
    mark: 'GC',
    platform: 'Coursera',
    date: 'Sep 16, 2026',
    credentialId: 'FSDY9F2LM0OF',
    ...coursera('FSDY9F2LM0OF')
  },
  {
    title: 'Digital Transformation with Google Cloud',
    issuer: 'Google Cloud',
    mark: 'GC',
    platform: 'Coursera',
    date: 'Sep 16, 2026',
    credentialId: 'GY3SN3GPTVDQ',
    ...coursera('GY3SN3GPTVDQ')
  },
  {
    title: 'Develop Generative AI Applications: Get Started',
    issuer: 'IBM',
    mark: 'IBM',
    platform: 'Coursera',
    date: 'Sep 9, 2026',
    credentialId: 'UYNN4TI0D25S',
    ...coursera('UYNN4TI0D25S')
  }
];

export const ExamPrep = {
  title: 'Azure AI Apps and Agents Developer Associate',
  issuer: 'Microsoft',
  mark: 'MS',
  exam: 'AI-103',
  status: 'Preparing',
  link: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-apps-and-agents-developer-associate/'
};

// Topics in progress, shown as one line of chips (no progress tracking).
export const NowLearning = [
  'Agentic AI in Python',
  'LangChain & LangGraph',
  'RAG applications',
  'LLM security',
  'ML on Google Cloud',
  'Marketing analytics'
];
