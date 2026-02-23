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
  FiZap
} from 'react-icons/fi';
import CurrentlyBuilding from '../CurrentlyBuilding';
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
  ContactGrid,
  ContactLeft,
  ContactRight,
  AvailRow,
  AvailDot,
  ContactFooter,
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
  TimelineEdgeFade,
  SocialSidebar,
  SocialIconsCol,
  SocialBar,
  SidebarIconLink
} from './IntroElements';

const experienceTimeline = [
  {
    year: '2026',
    icon: FiZap,
    company: 'Career Break',
    role: 'Independent Builder',
    period: '2026 – Present',
    current: true,
    caseStudy: {
      role: 'Independent Builder',
      focus: 'Learning + Shipping',
      currentLine: 'Intentional career break: learning deeply and building products.',
      whatIDid: [
        'Products being built: 5 (MediReco, Pawlog, House of Agents + 2 in pipeline).',
        'Experiments per week: 6-8 across AI workflows, automation, and product UX.',
        'Current technical focus: event-driven systems, AI integration reliability, and practical automation tooling.'
      ],
      challenges: [
        'Balancing deep learning with consistent shipping cadence while maintaining production quality.',
        'Prioritizing high-signal experiments and validating real user problems before scaling.'
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

const stackGroups = [
  {
    title: 'Backend',
    icon: FiServer,
    chips: [
      { label: 'Python', icon: FiCode },
      { label: 'Django', icon: FiLayers },
      { label: 'FastAPI', icon: FiZap },
      { label: 'GraphQL', icon: FiActivity }
    ]
  },
  {
    title: 'Cloud & Systems',
    icon: FiCloud,
    chips: [
      { label: 'AWS', icon: FiCloud },
      { label: 'Event-Driven', icon: FiActivity },
      { label: 'Serverless', icon: FiZap },
      { label: 'Observability', icon: FiDatabase }
    ]
  },
  {
    title: 'AI & Automation',
    icon: FiCpu,
    chips: [
      { label: 'LLM Integrations', icon: FiCpu },
      { label: 'Automation Pipelines', icon: FiLayers },
      { label: 'Agentic Workflows', icon: FiSend }
    ]
  }
];

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/lucifer-ved', label: 'GitHub', tooltip: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/vedantsolanki/', label: 'LinkedIn', tooltip: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:vedantsolanki004@gmail.com', label: 'Email', tooltip: 'Email' },
  { icon: FiSend, href: '#contact', label: 'Connect', tooltip: 'Contact' }
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
            <StackChip className="neu-sm" key={chip.label}>
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

  useEffect(() => {
    const timelineNode = timelineScrollRef.current;
    if (!timelineNode) return;

    const activeNode = timelineNode.querySelector(`[data-milestone="${activeExperienceIndex}"]`);
    if (activeNode) {
      activeNode.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }

    requestAnimationFrame(updateTimelineFade);
  }, [activeExperienceIndex, updateTimelineFade]);

  useEffect(() => {
    setDetailMotionToken((prev) => prev + 1);
  }, [activeExperienceIndex]);

  const onSelectMilestone = useCallback((idx) => {
    if (idx !== activeExperienceIndex) {
      setActiveExperienceIndex(idx);
    }
  }, [activeExperienceIndex]);

  const activeExperience = experienceTimeline[activeExperienceIndex] || experienceTimeline[0];

  return (
    <>
      <IntroContainer>

        {/* ── Hero ── */}
        <HeroStage id="hello">
          <HeroContent className="reveal">
            <HeroHeading className="neu-emboss-soft">
              <span>HI !</span>
              <span>I'M VED.</span>
            </HeroHeading>
            <HeroText>
              A tech enthusiast with 10+ years of experience, fueled by curiosity and innovation.{' '}
              <strong>Passionate about building systems</strong> that are reliable, scalable, and maintainable.
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
                      onMouseEnter={() => onSelectMilestone(idx)}
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
                      <TimelineLabel>{item.company}</TimelineLabel>
                    </TimelineMilestone>
                  ))}
                </TimelineTrack>
              </TimelineScroll>
              <TimelineEdgeFade $side="left" $visible={timelineFade.left} />
              <TimelineEdgeFade $side="right" $visible={timelineFade.right} />
            </TimelineWrap>

            <ExperienceCard className="neu-lg reveal" style={{ marginTop: '1.45rem' }}>
              <ExperienceDetailMotion $token={detailMotionToken}>
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
            </ExperienceCard>
          </SectionInner>
        </Section>

        {/* ── Contact ── */}
        <Section id="contact">
          <SectionInner>
            <ContactGrid>
              <ContactLeft className="reveal">
                <SectionKicker>Contact</SectionKicker>
                <SectionTitle>Ready to start?</SectionTitle>
                <SectionDescription>
                  Share your context, current bottleneck, and timeline. I will respond with a practical execution plan.
                </SectionDescription>
                <ul style={{ color: 'var(--textSoft)', fontSize: '0.9rem', marginTop: '1rem', paddingLeft: '1.1rem', lineHeight: 1.85 }}>
                  <li>Understand your challenge</li>
                  <li>Verify I'm the right fit</li>
                  <li>Define scope and first milestone</li>
                </ul>
                <div style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                  <a
                    href="https://www.linkedin.com/in/vedantsolanki/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neu-lg no-hover"
                    style={{ padding: '0.75rem 1.5rem', borderRadius: '999px', fontSize: '0.9rem', fontWeight: '700', color: 'var(--text)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                  >
                    <FiLinkedin /> LinkedIn →
                  </a>
                  <a
                    href="mailto:vedantsolanki004@gmail.com"
                    className="neu-md no-hover"
                    style={{ padding: '0.75rem 1.5rem', borderRadius: '999px', fontSize: '0.9rem', fontWeight: '600', color: 'var(--text)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                  >
                    <FiMail /> Email →
                  </a>
                </div>
              </ContactLeft>

              <ContactRight className="neu-lg reveal">
                <div style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--text)', marginBottom: '0.25rem' }}>Availability</div>
                <AvailRow>
                  <AvailDot />
                  <span style={{ color: 'var(--textSoft)', fontSize: '0.88rem' }}>Open to new projects in 2026</span>
                </AvailRow>
                <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <div className="neu-inset-md" style={{ padding: '1rem 1.5rem', textAlign: 'center', borderRadius: '1rem' }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text)' }}>~24h</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--textSoft)', marginTop: '0.2rem' }}>Avg. response</div>
                  </div>
                  <div className="neu-inset-md" style={{ padding: '1rem 1.5rem', textAlign: 'center', borderRadius: '1rem' }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text)' }}>+10</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--textSoft)', marginTop: '0.2rem' }}>Years exp.</div>
                  </div>
                </div>
                <div style={{ fontSize: '0.88rem', fontWeight: '600', color: 'var(--text)', marginBottom: '0.5rem' }}>Next steps:</div>
                <ol style={{ color: 'var(--textSoft)', fontSize: '0.88rem', paddingLeft: '1.1rem', lineHeight: 1.9 }}>
                  <li>Quick intro call (30 min)</li>
                  <li>Scope alignment</li>
                  <li>Project kickoff 🚀</li>
                </ol>
                <ContactFooter>
                  © {new Date().getFullYear()} Ved Solanki
                </ContactFooter>
              </ContactRight>
            </ContactGrid>
          </SectionInner>
        </Section>

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
