import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiSend,
  FiServer,
  FiCloud,
  FiCpu,
  FiCode,
  FiLayers,
  FiDatabase,
  FiActivity,
  FiZap,
  FiSmartphone,
  FiBookOpen,
  FiPackage,
  FiGitMerge,
  FiShare2,
  FiTarget,
  FiTerminal,
  FiGrid,
  FiPenTool,
  FiUsers,
  FiHeart,
  FiSmile,
  FiHardDrive,
  FiImage,
  FiFilm,
  FiMic,
  FiSearch,
  FiBook,
  FiMessageSquare,
  FiStar,
  FiGlobe
} from 'react-icons/fi';
import {
  SiPython,
  SiDjango,
  SiJavascript,
  SiTypescript,
  SiPostgresql,
  SiDocker,
  SiAmazonaws,
  SiGraphql,
  SiTailwindcss,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiGooglecloud,
  SiMicrosoftazure,
  SiGithubactions,
  SiFirebase
} from 'react-icons/si';
import CurrentlyBuilding from '../CurrentlyBuilding';
import Certifications from '../Certifications';
import GithubActivity from '../GithubActivity';
import Contact from '../Contact';
import {
  IntroContainer,
  HeroStage,
  HeroContent,
  HeroHeading,
  HeroText,
  StackCard,
  StackLabel,
  StackGroup,
  StackGroupTitle,
  StackGroupIcon,
  ChipRow,
  StackChip,
  StackChipIcon,
  HideOnMobile,
  MobileOnlyStackSection,
  MobileStackInner,
  Section,
  SectionInner,
  SectionTop,
  SectionKicker,
  SectionTitle,
  SectionDescription,
  ExperienceCard,
  ExperienceHead,
  ExperienceCompany,
  ExperienceRole,
  ExperiencePeriod,
  ExperienceImpact,
  ExperienceDetailMotion,
  ExperienceHeight,
  TagRow,
  Tag,
  CaseStudyWrap,
  CaseTopBar,
  CaseTopRole,
  CaseTopWebsite,
  CaseCurrentLine,
  CaseSectionTitle,
  CaseBlock,
  CaseList,
  TimelineWrap,
  TimelineScroll,
  TimelineTrack,
  TimelineMilestone,
  TimelineYear,
  TimelineYearRow,
  TimelineNowBadge,
  TimelineTick,
  TimelineIcon,
  TimelineLabel,
  TimelineSubLabel,
  TimelineEdgeFade,
  SocialSidebar,
  SocialIconsCol,
  SocialBar,
  SidebarIconLink,
  BottomToolsMarqueeSection,
  ToolsMarqueeViewport,
  ToolsMarqueeTrack,
  ToolsMarqueeGroup,
  ToolCard,
  ToolIcon,
  ToolName
} from './IntroElements';

const experienceTimeline = [
  {
    year: '2026',
    icon: FiZap,
    company: 'IdeaForgeLabs',
    subLabel: 'Career break',
    role: 'Founder, IdeaForgeLabs',
    period: '2026 – Present',
    current: true,
    caseStudy: {
      role: 'Founder, IdeaForgeLabs',
      website: 'https://theideaforgelabs.com/',
      whatIDid: [
        'Took an intentional career break to learn deeply and build products end to end, and started IdeaForgeLabs, a founder-led studio building websites, apps and AI systems for small businesses.',
        'Built 9 products across iOS, Android, macOS, web and Meta Ray-Ban Display, including NextRenew, Origo, Stowbox, Japo and CaninePages.',
        'Built Origo, a local macOS control plane for AI agent tooling: MCP servers, secrets, skills, prompts and instructions.',
        'Completed 5 certifications in generative AI, prompt engineering and Google Cloud, and preparing for Microsoft exam AI-103 (Azure AI Apps and Agents).'
      ],
      challenges: [
        'Balancing deep learning with consistent shipping cadence while maintaining production quality.',
        'Prioritizing high-signal experiments and validating real user problems before scaling.',
        'Distribution turned out to be harder than building: shipping a product is not the same as getting it in front of the right users. I am learning marketing engineering (positioning, analytics, answer-engine optimization and content systems like Northstar) to close that gap.'
      ]
    }
  },
  {
    year: '2024',
    icon: FiServer,
    company: 'Capillary',
    role: 'Technical Solution Architect',
    period: '2024 – 2025',
    caseStudy: {
      role: 'Technical Solution Architect',
      website: 'https://www.capillarytech.com/',
      whatIDid: [
        'Placeholder: project and ownership details will be added.'
      ],
      challenges: [
        'Placeholder: key challenges and solutions will be added.'
      ]
    }
  },
  {
    year: '2023',
    icon: FiCpu,
    company: 'SmartQ',
    role: 'Technical Solution Architect',
    period: '2023 – Present',
    impact: 'Owned architecture for integrations and personalization workflows with production-grade monitoring and reliability controls.',
    tags: ['Python', 'AWS', 'System Design', 'Observability'],
    caseStudy: {
      role: 'Technical Solution Architect',
      website: 'https://www.thesmartq.com/',
      whatIDid: [
        'Led the development of a favorites feature, enabling users to mark preferred items and receive personalized suggestions based on food preferences, time of day, and usage patterns.',
        'Led architecture and integration development with a Swedish company for smart walk-in stores and vending machines, significantly improving operational efficiency.',
        'Architected a cloud monitoring system with region-specific alerting policies, improving operational reliability and response time across API, system, and service failures.',
        'Designed and implemented a third-party integration for ordering from vending machines directly through the app, improving end-user experience.'
      ],
      challenges: [
        'Configuration management across regions and features was error-prone. I built an internal portal (React + Google Sheets) to track and document configs reliably.',
        'Third-party integrations caused frequent API timeouts due to external server limits. We tuned App Engine infrastructure configuration to stabilize performance.',
        'Google Secret Manager outages disrupted credential access. I introduced region-specific monitoring and alert policies to detect service outages and critical API failures faster.'
      ]
    }
  },
  {
    year: '2022',
    icon: FiCode,
    company: 'Itilite',
    role: 'Senior Software Engineer',
    period: '2022 – 2023',
    caseStudy: {
      role: 'Senior Software Engineer',
      website: 'https://www.itilite.com/',
      whatIDid: [
        'Led a team to enhance corporate travel and expense management solutions, developing and optimizing backend features using Python, Django, GraphQL, and PostgreSQL.',
        'Optimized Docker images by introducing multi-stage builds and volume management, reducing deployment time by 50%.'
      ]
    }
  },
  {
    year: '2021',
    icon: FiActivity,
    company: 'OLX People',
    role: 'Software Engineer 2',
    period: '2021 – 2022',
    caseStudy: {
      role: 'Software Engineer 2',
      website: 'https://www.olxpeople.com/',
      whatIDid: [
        'Worked on an e-bike service targeting blue-collar workers.',
        'Worked on the attendance module used by blue-collar workers to mark attendance using mobile devices.',
        'Built an automated bot to generate ESIC cards for blue-collar workers.'
      ]
    }
  },
  {
    year: '2017',
    icon: FiLayers,
    company: 'Visible Alpha',
    role: 'Software Engineer 2',
    period: '2017 – 2021',
    caseStudy: {
      role: 'Software Engineer 2',
      website: 'https://app.visiblealpha.com',
      whatIDid: [
        'Designed and built a module used by hedge fund analysts to understand forecast and historical data across sectors and industries.',
        'Developed an automated service to fetch files from SFTP, parse them, and feed required data to the database, replacing a manual process.',
        'Co-developed an in-house web analytics tool to track user feature usage, interactions, and time spent.',
        'Laid the foundation for migrating the backend application from MySQL 5.6 to MySQL 8.0.',
        'Contributed to sharding work that improved data fetching performance by 20%.',
        'Contributed to migrating the frontend application from Angular 2 to Angular 8.'
      ],
      challenges: [
        'Designed an effective approach to fetch data for multiple companies while minimizing module grid load time.',
        'Planned MySQL 5.6 to 8.0 query upgrades with minimal code change and a clear rollback path for production safety.',
        'Learned the frontend codebase deeply enough to support the Angular 2 to Angular 8 migration.'
      ]
    }
  },
  {
    year: '2016',
    icon: FiDatabase,
    company: 'Godcast',
    role: 'Software Engineer',
    period: '2016 – 2017',
    caseStudy: {
      role: 'Software Engineer',
      website: 'https://m.apkpure.com/godcast/in.godcast.app',
      whatIDid: [
        'Single-handedly developed new features for the Android application along with server-side requirements.',
        'Single-handedly migrated data from Facebook Parse DB to MongoDB, moved media files to AWS, and deployed the application to Heroku.',
        'Wrote a script to scrape data from the company Facebook page to learn about user base behavior and content preferences.',
        'Built a Python/Django web application for one healthcare customer.'
      ]
    }
  },
  {
    year: '2015',
    icon: FiCode,
    company: 'Vistaar Technologies',
    role: 'Software Engineer Trainee',
    period: '9 months',
    caseStudy: {
      role: 'Software Engineer Trainee',
      website: 'https://www.vistaar.com/',
      whatIDid: [
        'Contributed in developing one of the modules for a pricing management solution.'
      ]
    }
  }
];

// Official site or repo for each tool, keyed by label. Concepts (RAG, Serverless…) stay unlinked.
const techLinks = {
  Python: 'https://www.python.org/',
  Django: 'https://www.djangoproject.com/',
  FastAPI: 'https://fastapi.tiangolo.com/',
  PostgreSQL: 'https://www.postgresql.org/',
  GraphQL: 'https://graphql.org/',
  Docker: 'https://www.docker.com/',
  AWS: 'https://aws.amazon.com/',
  'AWS Lambda': 'https://aws.amazon.com/lambda/',
  'Google Cloud': 'https://cloud.google.com/',
  'GitHub Actions': 'https://github.com/features/actions',
  JavaScript: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  TypeScript: 'https://www.typescriptlang.org/',
  'Claude Code': 'https://www.claude.com/product/claude-code',
  Codex: 'https://openai.com/codex/',
  'OpenAI Codex': 'https://openai.com/codex/',
  'GitHub Copilot': 'https://github.com/features/copilot',
  Lovable: 'https://lovable.dev/',
  'Replit Agent': 'https://replit.com/ai',
  'Firebase Studio': 'https://firebase.studio/',
  'Google Stitch': 'https://stitch.withgoogle.com/',
  'Grok Bot': 'https://grok.com/',
  OpenClaw: 'https://github.com/openclaw/openclaw',
  'Hermes Agent': 'https://github.com/NousResearch/hermes-agent',
  'ChatGPT Agent': 'https://openai.com/index/introducing-chatgpt-agent/',
  Manus: 'https://manus.im/',
  LangChain: 'https://github.com/langchain-ai/langchain',
  LangGraph: 'https://github.com/langchain-ai/langgraph',
  'Claude Agent SDK': 'https://github.com/anthropics/claude-agent-sdk-python',
  'OpenAI Agents SDK': 'https://github.com/openai/openai-agents-python',
  CrewAI: 'https://github.com/crewAIInc/crewAI',
  LlamaIndex: 'https://github.com/run-llama/llama_index',
  'Agent Skills': 'https://agentskills.io/',
  MCP: 'https://modelcontextprotocol.io/',
  'MCP Servers': 'https://github.com/modelcontextprotocol/servers',
  'Claude API': 'https://docs.claude.com/',
  'OpenAI API': 'https://platform.openai.com/docs',
  'Azure AI Foundry': 'https://ai.azure.com/',
  'xAI Grok API': 'https://docs.x.ai/',
  Jev: 'https://typesafe.ai/',
  'Hugging Face': 'https://huggingface.co/',
  Ollama: 'https://ollama.com/',
  n8n: 'https://n8n.io/',
  'Nano Banana': 'https://deepmind.google/models/gemini-image/',
  Sora: 'https://openai.com/sora/',
  ElevenLabs: 'https://elevenlabs.io/',
  Perplexity: 'https://www.perplexity.ai/',
  NotebookLM: 'https://notebooklm.google/',
  ChatGPT: 'https://chatgpt.com/',
  Gemini: 'https://gemini.google.com/',
  Firecrawl: 'https://www.firecrawl.dev/',
  Tailwind: 'https://tailwindcss.com/',
  Illustrator: 'https://www.adobe.com/products/illustrator.html',
  Photoshop: 'https://www.adobe.com/products/photoshop.html'
};

// Spread onto a chip: renders it as a quiet anchor when the label has a link.
const linkProps = (label) => (techLinks[label]
  ? { as: 'a', href: techLinks[label], target: '_blank', rel: 'noopener noreferrer' }
  : {});

const stackGroups = [
  {
    title: 'Backend',
    icon: FiServer,
    chips: [
      { label: 'Python', icon: FiCode },
      { label: 'Django', icon: FiLayers },
      { label: 'FastAPI', icon: FiZap },
      { label: 'PostgreSQL', icon: FiDatabase },
      { label: 'GraphQL', icon: FiActivity },
      { label: 'Docker', icon: FiPackage }
    ]
  },
  {
    title: 'Cloud & DevOps',
    icon: FiCloud,
    chips: [
      { label: 'AWS', icon: FiCloud },
      { label: 'AWS Lambda', icon: FiZap },
      { label: 'Google Cloud', icon: SiGooglecloud },
      { label: 'GitHub Actions', icon: FiGitMerge }
    ]
  },
  {
    title: 'AI & Agents',
    icon: FiCpu,
    chips: [
      { label: 'Claude & OpenAI APIs', icon: FiCpu },
      { label: 'Claude Agent SDK', icon: FiTerminal },
      { label: 'LangGraph', icon: FiShare2 },
      { label: 'MCP Servers', icon: FiLayers },
      { label: 'RAG', icon: FiDatabase },
      { label: 'Jev', icon: FiTarget },
      { label: 'Azure AI Foundry', icon: FiBookOpen, learning: true }
    ]
  },
  {
    title: 'AI-Native Build',
    icon: FiTerminal,
    chips: [
      { label: 'Claude Code', icon: FiTerminal },
      { label: 'Codex', icon: FiCode },
      { label: 'GitHub Copilot', icon: FiGithub },
      { label: 'Google Stitch', icon: FiPenTool },
      { label: 'Grok Bot', icon: FiUsers },
      { label: 'Agent Skills', icon: FiGrid },
      { label: 'iOS & macOS Apps', icon: FiSmartphone }
    ]
  }
];

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/lucifer-ved', label: 'GitHub', tooltip: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/vedantsolanki/', label: 'LinkedIn', tooltip: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:lucifer.ved@gmail.com', label: 'Email', tooltip: 'Email' },
  { icon: FiSend, href: '#contact', label: 'Connect', tooltip: 'Contact' }
];

const toolTiles = [
  { label: 'Python', icon: SiPython },
  { label: 'Django', icon: SiDjango },
  { label: 'FastAPI', icon: FiZap },
  { label: 'PostgreSQL', icon: SiPostgresql },
  { label: 'Docker', icon: SiDocker },
  { label: 'AWS', icon: SiAmazonaws },
  { label: 'AWS Lambda', icon: FiZap },
  { label: 'Google Cloud', icon: SiGooglecloud },
  { label: 'GraphQL', icon: SiGraphql },
  { label: 'GitHub Actions', icon: SiGithubactions },
  { label: 'JavaScript', icon: SiJavascript },
  { label: 'TypeScript', icon: SiTypescript },
  { label: 'Event-Driven', icon: FiActivity },
  { label: 'Serverless', icon: FiCloud },
  { label: 'Observability', icon: FiActivity },
  { label: 'Claude Code', icon: FiTerminal },
  { label: 'OpenAI Codex', icon: FiCode },
  { label: 'GitHub Copilot', icon: FiGithub },
  { label: 'Lovable', icon: FiHeart },
  { label: 'Replit Agent', icon: FiTerminal },
  { label: 'Firebase Studio', icon: SiFirebase },
  { label: 'Google Stitch', icon: FiPenTool },
  { label: 'Grok Bot', icon: FiUsers },
  { label: 'OpenClaw', icon: FiCpu },
  { label: 'Hermes Agent', icon: FiSend },
  { label: 'ChatGPT Agent', icon: FiCpu },
  { label: 'Manus', icon: FiCpu },
  { label: 'LangChain', icon: FiShare2 },
  { label: 'LangGraph', icon: FiShare2 },
  { label: 'Claude Agent SDK', icon: FiTerminal },
  { label: 'OpenAI Agents SDK', icon: FiCpu },
  { label: 'CrewAI', icon: FiUsers },
  { label: 'LlamaIndex', icon: FiDatabase },
  { label: 'Agent Skills', icon: FiGrid },
  { label: 'MCP', icon: FiLayers },
  { label: 'Claude API', icon: FiCpu },
  { label: 'OpenAI API', icon: FiCpu },
  { label: 'Azure AI Foundry', icon: SiMicrosoftazure },
  { label: 'xAI Grok API', icon: FiCpu },
  { label: 'Jev', icon: FiTarget },
  { label: 'Hugging Face', icon: FiSmile },
  { label: 'Ollama', icon: FiHardDrive },
  { label: 'RAG', icon: FiDatabase },
  { label: 'Vector DB', icon: FiDatabase },
  { label: 'Prompt Eval', icon: FiActivity },
  { label: 'Agents', icon: FiCpu },
  { label: 'n8n', icon: FiLayers },
  { label: 'Automation', icon: FiZap },
  { label: 'Nano Banana', icon: FiImage },
  { label: 'Sora', icon: FiFilm },
  { label: 'ElevenLabs', icon: FiMic },
  { label: 'Perplexity', icon: FiSearch },
  { label: 'NotebookLM', icon: FiBook },
  { label: 'ChatGPT', icon: FiMessageSquare },
  { label: 'Gemini', icon: FiStar },
  { label: 'Firecrawl', icon: FiGlobe },
  { label: 'Tailwind', icon: SiTailwindcss },
  { label: 'Illustrator', icon: SiAdobeillustrator },
  { label: 'Photoshop', icon: SiAdobephotoshop }
];

const renderStackContent = () => (
  <>
    <StackLabel>Technical Stack</StackLabel>
    {stackGroups.map((group) => (
      <StackGroup key={group.title}>
        <StackGroupTitle>
          <StackGroupIcon><group.icon /></StackGroupIcon>
          {group.title}
        </StackGroupTitle>
        <ChipRow>
          {group.chips.map((chip) => (
            <StackChip
              className={chip.learning ? 'no-hover' : 'neu-sm no-hover'}
              $learning={chip.learning}
              title={chip.learning ? 'Currently learning' : undefined}
              key={chip.label}
              {...linkProps(chip.label)}
            >
              <StackChipIcon><chip.icon /></StackChipIcon>
              {chip.label}
            </StackChip>
          ))}
        </ChipRow>
      </StackGroup>
    ))}
  </>
);

const Intro = () => {
  const [activeExperienceIndex, setActiveExperienceIndex] = useState(0);
  const [detailMotionToken, setDetailMotionToken] = useState(0);
  const [timelineFade, setTimelineFade] = useState({ left: false, right: true });
  const timelineScrollRef = useRef(null);

  const updateTimelineFade = useCallback(() => {
    const timelineNode = timelineScrollRef.current;
    if (!timelineNode) return;

    const maxScrollLeft = timelineNode.scrollWidth - timelineNode.clientWidth;
    setTimelineFade({
      left: timelineNode.scrollLeft > 8,
      right: timelineNode.scrollLeft < maxScrollLeft - 8
    });
  }, []);

  useEffect(() => {
    const timelineNode = timelineScrollRef.current;
    if (!timelineNode) return;

    const handleTimelineScroll = () => updateTimelineFade();
    updateTimelineFade();

    timelineNode.addEventListener('scroll', handleTimelineScroll, { passive: true });
    window.addEventListener('resize', handleTimelineScroll);

    return () => {
      timelineNode.removeEventListener('scroll', handleTimelineScroll);
      window.removeEventListener('resize', handleTimelineScroll);
    };
  }, [updateTimelineFade]);

  // Centre the chosen milestone by scrolling the timeline strip only (never the
  // page), and only for clicks and keyboard; moving the strip under a hovering
  // pointer would select the next milestone and set off a chain of switches.
  const centreOnSelect = useRef(false);
  useEffect(() => {
    const timelineNode = timelineScrollRef.current;
    if (!timelineNode) return;

    if (centreOnSelect.current) {
      const activeNode = timelineNode.querySelector(`[data-milestone="${activeExperienceIndex}"]`);
      if (activeNode) {
        const left = activeNode.offsetLeft - (timelineNode.clientWidth - activeNode.offsetWidth) / 2;
        timelineNode.scrollTo({ left, behavior: 'smooth' });
      }
      centreOnSelect.current = false;
    }

    requestAnimationFrame(updateTimelineFade);
  }, [activeExperienceIndex, updateTimelineFade]);

  useEffect(() => {
    setDetailMotionToken((prev) => prev + 1);
  }, [activeExperienceIndex]);

  const onSelectMilestone = useCallback((idx) => {
    if (idx !== activeExperienceIndex) {
      centreOnSelect.current = true;
      setActiveExperienceIndex(idx);
    }
  }, [activeExperienceIndex]);

  // Hover intent: switch only when the pointer rests on a milestone briefly,
  // so sweeping across the timeline doesn't flicker through every job
  const hoverTimer = useRef(null);
  const onHoverMilestone = useCallback((idx) => {
    clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setActiveExperienceIndex(idx), 140);
  }, []);
  const onLeaveMilestone = useCallback(() => clearTimeout(hoverTimer.current), []);
  useEffect(() => () => clearTimeout(hoverTimer.current), []);

  // Animate the card's height between jobs with different amounts of text
  const detailRef = useRef(null);
  const [detailHeight, setDetailHeight] = useState(null);
  useEffect(() => {
    const node = detailRef.current;
    if (!node || typeof ResizeObserver === 'undefined') return undefined;
    const observer = new ResizeObserver(([entry]) => setDetailHeight(entry.contentRect.height));
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const activeExperience = experienceTimeline[activeExperienceIndex] || experienceTimeline[0];

  return (
    <>
      <IntroContainer>

        {/* ── Hero ── */}
        <HeroStage id="hello">
          <HeroContent className="reveal">
            <HeroHeading className="neu-emboss-soft">
              <span>HI !</span>
              <span className="hero-line-wide">I'M VEDANT.</span>
            </HeroHeading>
            <HeroText>
              A tech enthusiast with 10+ years of experience, fueled by curiosity and innovation.{' '}
              <strong>Passionate about building systems</strong> that are reliable, scalable, and maintainable.{' '}
              Right now I'm on an intentional career break, shipping my own products at IdeaForgeLabs.
            </HeroText>
          </HeroContent>

          <HideOnMobile>
            <StackCard className="neu-lg reveal">
              {renderStackContent()}
            </StackCard>
          </HideOnMobile>
        </HeroStage>

        <MobileOnlyStackSection>
          <MobileStackInner>
            <StackCard className="neu-lg reveal">
              {renderStackContent()}
            </StackCard>
          </MobileStackInner>
        </MobileOnlyStackSection>

        {/* ── Currently Building ── */}
        <Section id="results">
          <SectionInner>
            <SectionTop className="reveal">
              <SectionKicker>Building</SectionKicker>
              <SectionTitle>Currently building</SectionTitle>
              <SectionDescription>
                Live and in-progress products with clear architecture context.
              </SectionDescription>
            </SectionTop>
            <CurrentlyBuilding />
            <GithubActivity />
          </SectionInner>
        </Section>

        {/* ── Experience ── */}
        <Section id="evidence">
          <SectionInner>
            <SectionTop className="reveal">
              <SectionKicker>Experience</SectionKicker>
              <SectionTitle>Work history</SectionTitle>
              <SectionDescription>
                Real production ownership across product, platform, and architecture.
              </SectionDescription>
            </SectionTop>
            <TimelineWrap className="reveal">
              <TimelineScroll ref={timelineScrollRef}>
                <TimelineTrack>
                  {experienceTimeline.map((item, idx) => (
                    <TimelineMilestone
                      key={`${item.company}-${item.year}`}
                      type="button"
                      onClick={() => onSelectMilestone(idx)}
                      onMouseEnter={() => onHoverMilestone(idx)}
                      onMouseLeave={onLeaveMilestone}
                      onFocus={() => onSelectMilestone(idx)}
                      $active={idx === activeExperienceIndex}
                      data-milestone={idx}
                      aria-pressed={idx === activeExperienceIndex}
                      aria-label={`${item.company} (${item.period})`}
                    >
                      <TimelineYearRow>
                        <TimelineYear>{item.year}</TimelineYear>
                        {item.current && <TimelineNowBadge>Now</TimelineNowBadge>}
                      </TimelineYearRow>
                      <TimelineTick $active={idx === activeExperienceIndex} />
                      <TimelineIcon $active={idx === activeExperienceIndex} $current={item.current}>
                        <item.icon />
                      </TimelineIcon>
                      <TimelineLabel>
                        {item.company}
                        {item.subLabel && <TimelineSubLabel>{item.subLabel}</TimelineSubLabel>}
                      </TimelineLabel>
                    </TimelineMilestone>
                  ))}
                </TimelineTrack>
              </TimelineScroll>
              <TimelineEdgeFade $side="left" $visible={timelineFade.left} />
              <TimelineEdgeFade $side="right" $visible={timelineFade.right} />
            </TimelineWrap>

            <ExperienceCard className="neu-lg reveal" style={{ marginTop: '1.45rem' }}>
              <ExperienceHeight style={detailHeight ? { height: detailHeight } : undefined}>
              <ExperienceDetailMotion ref={detailRef} $token={detailMotionToken}>
                {activeExperience.caseStudy ? (
                  <>
                    <CaseTopBar>
                      <CaseTopRole className="neu-sm"><strong>Role</strong> {activeExperience.caseStudy.role}</CaseTopRole>
                      {activeExperience.caseStudy.focus && (
                        <CaseTopRole className="neu-sm"><strong>Focus</strong> {activeExperience.caseStudy.focus}</CaseTopRole>
                      )}
                      {activeExperience.caseStudy.website && (
                        <CaseTopWebsite
                          className="neu-sm no-hover"
                          href={activeExperience.caseStudy.website}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Website
                        </CaseTopWebsite>
                      )}
                    </CaseTopBar>
                    {activeExperience.caseStudy.currentLine && (
                      <CaseCurrentLine>{activeExperience.caseStudy.currentLine}</CaseCurrentLine>
                    )}
                    <CaseStudyWrap className="neu-inset-md">
                      <CaseBlock>
                        <CaseSectionTitle>What I did</CaseSectionTitle>
                        <CaseList>
                          {activeExperience.caseStudy.whatIDid.map((point, idx) => (
                            <li key={`work-${activeExperience.company}-${idx}`}>{point}</li>
                          ))}
                        </CaseList>
                      </CaseBlock>

                      {activeExperience.caseStudy.challenges?.length > 0 && (
                        <CaseBlock>
                          <CaseSectionTitle>Challenges</CaseSectionTitle>
                          <CaseList>
                            {activeExperience.caseStudy.challenges.map((point, idx) => (
                              <li key={`challenge-${activeExperience.company}-${idx}`}>{point}</li>
                            ))}
                          </CaseList>
                        </CaseBlock>
                      )}
                    </CaseStudyWrap>
                  </>
                ) : (
                  <>
                    <ExperienceHead>
                      <div>
                        <ExperienceCompany>{activeExperience.company}</ExperienceCompany>
                        <ExperienceRole>{activeExperience.role}</ExperienceRole>
                      </div>
                      <ExperiencePeriod>{activeExperience.period}</ExperiencePeriod>
                    </ExperienceHead>
                    <ExperienceImpact>{activeExperience.impact}</ExperienceImpact>
                    <TagRow>
                      {activeExperience.tags.map((tag) => (
                        <Tag className="neu-inset-sm" key={tag}>{tag}</Tag>
                      ))}
                    </TagRow>
                  </>
                )}
              </ExperienceDetailMotion>
              </ExperienceHeight>
            </ExperienceCard>
          </SectionInner>
        </Section>

        {/* ── Learning ── */}
        <Section id="learning">
          <SectionInner>
            <SectionTop className="reveal">
              <SectionKicker>Learning</SectionKicker>
              <SectionTitle>Certifications</SectionTitle>
              <SectionDescription>
                Verified certificates earned during the break, plus what I'm studying now.
              </SectionDescription>
            </SectionTop>

            <Certifications />
          </SectionInner>
        </Section>

        {/* ── Contact ── */}
        <Section id="contact">
          <SectionInner>
            <Contact />
          </SectionInner>
        </Section>

        <BottomToolsMarqueeSection aria-label="Tools marquee">
          <ToolsMarqueeViewport>
            <ToolsMarqueeTrack>
              <ToolsMarqueeGroup>
                {toolTiles.map(({ label, icon: Icon }) => (
                  <ToolCard key={`marquee-a-${label}`} className="neu-sm no-hover" title={label} aria-label={label} {...linkProps(label)}>
                    <ToolIcon><Icon /></ToolIcon>
                    <ToolName>{label}</ToolName>
                  </ToolCard>
                ))}
              </ToolsMarqueeGroup>
              <ToolsMarqueeGroup aria-hidden="true">
                {toolTiles.map(({ label, icon: Icon }) => (
                  <ToolCard key={`marquee-b-${label}`} className="neu-sm no-hover" title={label} tabIndex={-1} {...linkProps(label)}>
                    <ToolIcon><Icon /></ToolIcon>
                    <ToolName>{label}</ToolName>
                  </ToolCard>
                ))}
              </ToolsMarqueeGroup>
            </ToolsMarqueeTrack>
          </ToolsMarqueeViewport>
        </BottomToolsMarqueeSection>

      </IntroContainer>

      {/* ── Desktop social sidebar (fixed left) ── */}
      <SocialSidebar>
        <SocialIconsCol>
          {socialLinks.map(({ icon: Icon, href, label, tooltip }) => (
            <SidebarIconLink
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="neu-sm tooltip tooltip-right no-hover"
              aria-label={label}
              data-tooltip={tooltip}
              data-plain={label === 'GitHub' || label === 'LinkedIn'}
            >
              <Icon />
            </SidebarIconLink>
          ))}
        </SocialIconsCol>
      </SocialSidebar>

      {/* ── Mobile social bar (fixed bottom) ── */}
      <SocialBar>
        {socialLinks.map(({ icon: Icon, href, label, tooltip }) => (
          <SidebarIconLink
            key={label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="neu-sm tooltip tooltip-top no-hover"
            aria-label={label}
            data-tooltip={tooltip}
            data-plain={label === 'GitHub' || label === 'LinkedIn'}
          >
            <Icon />
          </SidebarIconLink>
        ))}
      </SocialBar>
    </>
  );
};

export default Intro;
