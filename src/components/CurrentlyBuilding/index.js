import React, { useRef, useState } from 'react';
import useSlidingIndicator from '../../hooks/useSlidingIndicator';
import { FiChevronLeft, FiChevronRight, FiExternalLink } from 'react-icons/fi';
import {
  StudioStrip,
  StudioIdentity,
  StudioMark,
  StudioName,
  StudioLine,
  StudioStats,
  StudioPill,
  BuildShell,
  BoardHead,
  StageFilter,
  StageIndicator,
  StageButton,
  StageDot,
  BoardControls,
  StashSwitch,
  SwitchTrack,
  SwitchKnob,
  RoundButton,
  Carousel,
  BuildCard,
  CardTop,
  StageChip,
  CardProgress,
  CardName,
  CardDescription,
  CardFoot,
  CardWell,
  CardPlatform,
  CardReason,
  ProgressTrack,
  ProgressFill,
  CardLink,
  EmptyState,
  BoardLabel
} from './CurrentlyBuildingElements';

const studio = {
  name: 'IdeaForgeLabs',
  mark: 'IFL',
  line: 'Also taking client work: websites, apps, AI automation, custom AI, AEO',
  link: 'https://theideaforgelabs.com/'
};

// Stages and progress are self-reported; update as products move.
const builds = [
  {
    name: 'Northstar',
    stage: 'MVP',
    progress: 55,
    description: 'One product source in, positioning and a week of content out.',
    platform: 'AI web app',
    link: 'https://theideaforgelabs.com/northstar'
  },
  {
    name: 'Unspiral',
    stage: 'MVP',
    progress: 50,
    description: 'Settles a looping thought and returns one clear next step.',
    platform: 'iOS · Privacy-first',
    link: 'https://theideaforgelabs.com/unspiral'
  },
  {
    name: 'Japo',
    stage: 'Beta',
    progress: 80,
    description: 'A pocket mala: a japa counter you pull bead by bead with your thumb.',
    platform: 'Android · Offline, no ads',
    link: 'https://japo-app.netlify.app/'
  },
  {
    name: 'LinguaLens',
    stage: 'Concept',
    progress: 70,
    description: 'Live interpreter for Meta Ray-Ban Display, with a reply and how to say it.',
    platform: 'Smart glasses',
    link: 'https://theideaforgelabs.com/lingualens'
  },
  {
    name: 'Stowbox',
    stage: 'Live',
    progress: 75,
    description: 'Private warranty vault with coverage details and deadlines.',
    platform: 'iOS & Android · Local-first',
    link: 'https://theideaforgelabs.com/stowbox'
  },
  {
    name: 'NextRenew',
    stage: 'Live',
    progress: 92,
    description: 'Subscription tracker built around the renewal date.',
    platform: 'iOS & Android',
    link: 'https://theideaforgelabs.com/nextrenew'
  },
  {
    name: 'Origo',
    stage: 'Live',
    progress: 90,
    description: 'One local dashboard for the whole AI agent stack.',
    platform: 'macOS · Dev tools',
    link: 'https://theideaforgelabs.com/origo'
  },
  {
    name: 'CaninePages',
    stage: 'Live',
    progress: 95,
    description: 'Dog-care directory across six Indian cities.',
    platform: 'Web directory',
    link: 'https://theideaforgelabs.com/caninepages'
  }
];

// Paused or shelved products. Shape: { name, description, platform, reason, link }
const stashed = [
  {
    name: 'FuelNote',
    description: 'Calories and macros from a photo, voice note or text, tuned for Indian food.',
    platform: 'Mobile · AI nutrition',
    link: 'https://theideaforgelabs.com/fuelnote'
  }
];

const platformCount = 5;

// Shipped work first, so visitors see live products before early ideas.
const stageOrder = ['Live', 'Beta', 'MVP', 'Concept'];
const filterOrder = ['Concept', 'MVP', 'Beta', 'Live'];

const products = [
  ...[...builds].sort((a, b) => stageOrder.indexOf(a.stage) - stageOrder.indexOf(b.stage)),
  ...stashed.map((item) => ({ ...item, stage: 'Stashed' }))
];

const countFor = (stage) => products.filter((item) => item.stage === stage).length;

const CurrentlyBuilding = () => {
  const [filter, setFilter] = useState('All');
  const [showStashed, setShowStashed] = useState(false);
  const carouselRef = useRef(null);
  const filterRef = useRef(null);
  // Bumped on every filter change so the visible cards replay their entrance
  const [animCycle, setAnimCycle] = useState(0);

  const filters = ['All', ...filterOrder, ...(showStashed ? ['Stashed'] : [])];
  const activeFilter = filters.includes(filter) ? filter : 'All';

  const isVisible = (item) => {
    if (activeFilter === 'All') return showStashed || item.stage !== 'Stashed';
    return item.stage === activeFilter;
  };
  const visibleCount = products.filter(isVisible).length;
  const visibleNames = products.filter(isVisible).map((item) => item.name);

  const indicator = useSlidingIndicator(filterRef, '[aria-pressed="true"]', [filter, showStashed]);

  const selectFilter = (next) => {
    setFilter(next);
    setAnimCycle((n) => n + 1);
    if (carouselRef.current) carouselRef.current.scrollLeft = 0;
  };

  const scrollByCard = (direction) => {
    const node = carouselRef.current;
    if (!node) return;
    const card = node.querySelector('article:not([hidden])');
    const step = card ? card.getBoundingClientRect().width + 16 : 300;
    node.scrollBy({ left: direction * step, behavior: 'smooth' });
  };

  return (
    <>
      <StudioStrip className="neu-sm reveal">
        <StudioIdentity>
          <StudioMark className="neu-inset-md">{studio.mark}</StudioMark>
          <div>
            <StudioName>{studio.name}</StudioName>
            <StudioLine>{studio.line}</StudioLine>
          </div>
        </StudioIdentity>
        <StudioStats>
          <StudioPill as="span" className="neu-inset-sm">
            {products.length} <span>products</span>
          </StudioPill>
          <StudioPill as="span" className="neu-inset-sm">
            {platformCount} <span>platforms</span>
          </StudioPill>
          <StudioPill
            className="neu-inset-sm no-hover"
            href={studio.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            theideaforgelabs.com <FiExternalLink />
          </StudioPill>
        </StudioStats>
      </StudioStrip>

      <BuildShell className="neu-lg reveal">
        <BoardLabel>Products <span>{visibleCount} shown</span></BoardLabel>
        <BoardHead>
          <StageFilter ref={filterRef} role="group" aria-label="Filter by stage">
            {indicator && <StageIndicator aria-hidden="true" style={indicator} />}
            {filters.map((stage) => (
              <StageButton
                key={stage}
                type="button"
                className="no-hover"
                $active={stage === activeFilter}
                aria-pressed={stage === activeFilter}
                onClick={() => selectFilter(stage)}
              >
                {stage !== 'All' && <StageDot $stage={stage} />}
                {stage}
                <span>
                  {stage === 'All'
                    ? products.filter((item) => showStashed || item.stage !== 'Stashed').length
                    : countFor(stage)}
                </span>
              </StageButton>
            ))}
          </StageFilter>

          <BoardControls>
            <StashSwitch
              type="button"
              role="switch"
              className="no-hover"
              aria-checked={showStashed}
              onClick={() => {
              setShowStashed((prev) => !prev);
              setAnimCycle((n) => n + 1);
            }}
            >
              <SwitchTrack $on={showStashed}>
                <SwitchKnob $on={showStashed} />
              </SwitchTrack>
              Show stashed
            </StashSwitch>
            <RoundButton type="button" className="no-hover" aria-label="Previous products" onClick={() => scrollByCard(-1)}>
              <FiChevronLeft />
            </RoundButton>
            <RoundButton type="button" className="no-hover" aria-label="Next products" onClick={() => scrollByCard(1)}>
              <FiChevronRight />
            </RoundButton>
          </BoardControls>
        </BoardHead>

        {/* Cards stay mounted and are hidden when filtered out, so App.js keeps tracking their shadows */}
        <Carousel ref={carouselRef}>
          {products.map((item) => {
            const isStashed = item.stage === 'Stashed';
            return (
              <BuildCard
                className="neu-lg"
                key={item.name}
                hidden={!isVisible(item)}
                $muted={isStashed}
                $cycle={animCycle}
                style={{ animationDelay: `${Math.max(0, visibleNames.indexOf(item.name)) * 60}ms` }}
              >
                <CardTop>
                  <StageChip className="neu-sm">
                    <StageDot $stage={item.stage} />
                    {item.stage}
                  </StageChip>
                  {!isStashed && <CardProgress>{item.progress}%</CardProgress>}
                </CardTop>

                <CardName>{item.name}</CardName>
                <CardDescription>{item.description}</CardDescription>

                <CardFoot>
                  <CardWell className="neu-inset-md">
                    <CardPlatform>{item.platform}</CardPlatform>
                    {isStashed ? (
                      <CardReason>{item.reason || 'Paused for now'}</CardReason>
                    ) : (
                      <ProgressTrack>
                        <ProgressFill $stage={item.stage} style={{ width: `${item.progress}%` }} />
                      </ProgressTrack>
                    )}
                  </CardWell>
                  {item.link && (
                    <CardLink className="neu-sm no-hover" href={item.link} target="_blank" rel="noopener noreferrer">
                      <FiExternalLink /> Open
                    </CardLink>
                  )}
                </CardFoot>
              </BuildCard>
            );
          })}
          {visibleCount === 0 && <EmptyState>No builds in this stage yet</EmptyState>}
        </Carousel>
      </BuildShell>
    </>
  );
};

export default CurrentlyBuilding;
