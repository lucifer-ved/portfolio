import styled, { css, keyframes } from 'styled-components';

/* ── Page wrapper ── */
export const IntroContainer = styled.main`
  width: 100%;
  scroll-snap-type: y proximity;

  @media screen and (min-width: 1280px) {
    padding-left: 1.35rem;
  }
`;

/* ── Hero section: 2-column grid ── */
export const HeroStage = styled.section`
  position: relative;
  min-height: calc(100vh - 4.25rem);
  scroll-margin-top: 5rem;
  scroll-snap-align: start;
  padding: 5.5rem 1.5rem 4rem;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(360px, 480px);
  gap: clamp(1.5rem, 3vw, 4rem);
  align-items: center;
  max-width: min(1280px, 94vw);
  margin: 0 auto;

  @media screen and (min-width: 1280px) {
    padding-left: 4.2rem;
    grid-template-columns: minmax(0, 1fr) minmax(340px, 450px);
    gap: clamp(1.25rem, 2vw, 2.4rem);
    box-sizing: border-box;
  }

  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr;
    min-height: auto;
    padding: 5.5rem 1.5rem 3rem;
    gap: 2.5rem;
  }

  @media screen and (max-width: 760px) {
    min-height: 100svh;
    padding: 5.3rem 1rem 7.2rem;
    gap: 0;
    align-items: center;
    align-content: center;
  }
`;

/* ── Generic content sections ── */
export const Section = styled.section`
  min-height: calc(100vh - 4.25rem);
  scroll-margin-top: 5rem;
  scroll-snap-align: start;
  padding: 4.25rem 1.5rem 3rem;
  display: flex;
  align-items: center;

  @media screen and (max-width: 760px) {
    min-height: auto;
    padding: 3rem 1rem 6.8rem;
    display: block;
  }
`;

/* ── Max-width inner wrapper inside Section ── */
export const SectionInner = styled.div`
  max-width: min(1280px, 94vw);
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;

  @media screen and (min-width: 1280px) {
    padding-left: 4.2rem;
  }
`;

/* ── Hero left column ── */
export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 760px;
  margin: 0 auto;

  @media screen and (max-width: 760px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-align: left;
    min-height: calc(100svh - 12.5rem);
  }
`;

export const HeroHeading = styled.h1`
  margin-top: 0.7rem;
  line-height: 0.88;
  letter-spacing: -0.018em;
  font-size: clamp(4.2rem, 8.2vw, 8.1rem);
  font-weight: 900;
  text-transform: none;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: max-content;
  color: var(--bg);
  text-shadow:
    -9px -9px 18px var(--shadowLight),
    9px 9px 18px var(--shadowDark),
    0 0 20px rgba(0, 0, 0, 0.22);

  @media screen and (min-width: 1280px) {
    font-size: clamp(3.8rem, 6.9vw, 7.1rem);
  }

  span {
    display: block;
    width: max-content;
    transition: transform 0.2s ease, text-shadow 0.2s ease;
    cursor: pointer;
    white-space: nowrap;
    position: relative;
    -webkit-text-stroke: 1px rgba(39, 46, 54, 0.16);
    text-stroke: 1px rgba(39, 46, 54, 0.16);
  }

  span.hero-line-wide {
    letter-spacing: -0.03em;
    font-size: 0.9em;
  }

  html[data-theme='dark'] & span {
    -webkit-text-stroke: 1px rgba(228, 232, 239, 0.06);
    text-stroke: 1px rgba(228, 232, 239, 0.06);
  }

  span:hover {
    transform: translateY(-2px);
    text-shadow:
      -4px -4px 8px var(--shadowLight),
      4px 4px 8px var(--shadowDark);
  }

  @media screen and (max-width: 760px) {
    margin-top: 0.5rem;
    font-size: clamp(4rem, 18vw, 5.6rem);
    letter-spacing: -0.012em;
    line-height: 0.84;
    align-items: flex-start;
    margin-left: 0;
    margin-right: 0;
    text-shadow:
      -7px -7px 14px var(--shadowLight),
      7px 7px 14px var(--shadowDark),
      0 0 14px rgba(0, 0, 0, 0.2);

    span.hero-line-wide {
      font-size: 0.86em;
      letter-spacing: -0.035em;
    }

    span {
      -webkit-text-stroke: 1px rgba(39, 46, 54, 0.22);
      text-stroke: 1px rgba(39, 46, 54, 0.22);
    }

    html[data-theme='dark'] & span {
      -webkit-text-stroke: 1px rgba(228, 232, 239, 0.08);
      text-stroke: 1px rgba(228, 232, 239, 0.08);
    }
  }
`;

export const HeroText = styled.p`
  max-width: 680px;
  margin-top: 1.35rem;
  color: var(--textSoft);
  font-size: clamp(1rem, 1.18vw, 1.18rem);
  line-height: 1.7;

  strong {
    color: var(--text);
  }

  @media screen and (max-width: 760px) {
    margin-top: 1rem;
    font-size: 1rem;
    line-height: 1.64;
    max-width: min(92vw, 560px);
    margin-left: 0;
    margin-right: 0;
    text-align: left;
  }
`;

export const HeroMeta = styled.p`
  margin-top: 1.1rem;
  color: var(--textSoft);
  font-size: 0.95rem;

  @media screen and (max-width: 760px) {
    margin-top: 0.9rem;
    font-size: 0.88rem;
    line-height: 1.45;
  }
`;

/* ── Hero right column: stack card ── */
export const StackCard = styled.aside`
  position: relative;
  z-index: 2;
  border-radius: 1.28rem;
  padding: 1.6rem;
  width: 100%;
  justify-self: end;

  @media screen and (min-width: 1280px) {
    max-width: 450px;
    padding: 1.4rem 1.35rem;
  }

  @media screen and (max-width: 1100px) {
    max-width: 540px;
  }

  @media screen and (max-width: 760px) {
    max-width: 100%;
    padding: 1.15rem 1rem;
    border-radius: 1.1rem;
  }
`;

export const StackLabel = styled.div`
  color: var(--textSoft);
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

export const StackGroup = styled.div`
  margin-top: 1.15rem;

  @media screen and (max-width: 760px) {
    margin-top: 0.9rem;
  }
`;

export const StackGroupTitle = styled.h3`
  color: var(--text);
  font-size: 1rem;
  margin-bottom: 0.6rem;
  line-height: 1.1;
  display: flex;
  align-items: center;
  gap: 0.4rem;

  @media screen and (max-width: 760px) {
    font-size: 0.92rem;
    margin-bottom: 0.5rem;
  }
`;

export const StackGroupIcon = styled.span`
  display: inline-flex;
  color: var(--textSoft);
  font-size: 0.86rem;
`;

export const ChipRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.58rem;

  @media screen and (max-width: 760px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.5rem;
  }
`;

export const StackChip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.42rem;
  border-radius: 999px;
  padding: 0.46rem 0.84rem;
  color: var(--text);
  font-size: 0.84rem;
  background: var(--surface);
  box-shadow: inset -3px -3px 6px var(--shadowLight), inset 3px 3px 6px var(--shadowDark);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: inset -2px -2px 4px var(--shadowLight), inset 2px 2px 4px var(--shadowDark);
  }

  @media screen and (max-width: 760px) {
    width: 100%;
    padding: 0.43rem 0.65rem;
    font-size: 0.8rem;
    gap: 0.36rem;
    justify-content: flex-start;
  }
`;

export const StackChipIcon = styled.span`
  display: inline-flex;
  color: var(--textSoft);
  font-size: 0.78rem;
`;

export const HideOnMobile = styled.div`
  @media screen and (max-width: 760px) {
    display: none;
  }
`;

export const MobileOnlyStackSection = styled.section`
  display: none;

  @media screen and (max-width: 760px) {
    display: block;
    padding: 0 1rem 6.8rem;
    scroll-margin-top: 5rem;
  }
`;

export const MobileStackInner = styled.div`
  max-width: min(1280px, 94vw);
  margin: 0 auto;
`;

/* ── Section header block ── */
export const SectionTop = styled.div`
  margin-bottom: 0.75rem;

  @media screen and (max-width: 760px) {
    margin-bottom: 0.6rem;
  }
`;

export const SectionKicker = styled.span`
  color: var(--textSoft);
  font-size: 0.74rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

export const SectionTitle = styled.h2`
  margin-top: 0.38rem;
  color: var(--text);
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  font-weight: 700;
  letter-spacing: -0.01em;
`;

export const SectionDescription = styled.p`
  margin-top: 0.55rem;
  color: var(--textSoft);
  line-height: 1.6;
  max-width: 640px;
  font-size: 0.95rem;
`;

/* ── Activity / tools layouts ── */
export const CenteredSectionTop = styled(SectionTop)`
  text-align: center;

  ${SectionDescription} {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ActivityWrap = styled.div`
  margin-top: 1.6rem;
  display: grid;
  gap: 1rem;
  justify-items: center;
`;

export const ActivityCaption = styled.p`
  margin: 0;
  color: var(--textSoft);
  font-size: 0.92rem;
  text-align: center;
  max-width: 720px;
  line-height: 1.55;

  @media screen and (max-width: 760px) {
    font-size: 0.84rem;
    max-width: 95%;
  }
`;

export const ActivityHeatmapCard = styled.div`
  width: min(100%, 960px);
  border-radius: 1.35rem;
  padding: 1.25rem 1.2rem;

  @media screen and (max-width: 760px) {
    padding: 0.9rem 0.75rem;
    border-radius: 1.1rem;
    overflow-x: auto;
  }
`;

export const ActivityMonths = styled.div`
  margin-left: 2.4rem;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 0.35rem;
  color: var(--textSoft);
  font-size: 0.76rem;
  margin-bottom: 0.5rem;

  @media screen and (max-width: 760px) {
    min-width: 660px;
    margin-left: 2.15rem;
    font-size: 0.68rem;
  }
`;

export const ActivityGridWrap = styled.div`
  display: grid;
  grid-template-columns: 2rem auto;
  align-items: start;
  gap: 0.4rem;

  @media screen and (max-width: 760px) {
    min-width: 700px;
  }
`;

export const ActivityDayLabels = styled.div`
  display: grid;
  grid-template-rows: repeat(7, 0.62rem);
  gap: 0.23rem;
  padding-top: 0.05rem;
  color: var(--textSoft);
  font-size: 0.68rem;
  line-height: 1;
`;

export const ActivityGrid = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(7, 0.62rem);
  grid-auto-columns: 0.62rem;
  gap: 0.23rem;
`;

export const ActivityCell = styled.span`
  border-radius: 2px;
  background: ${({ $level }) => {
    if ($level >= 4) return 'rgba(90, 197, 117, 0.92)';
    if ($level === 3) return 'rgba(108, 214, 132, 0.9)';
    if ($level === 2) return 'rgba(131, 230, 152, 0.82)';
    if ($level === 1) return 'rgba(185, 210, 195, 0.7)';
    return 'rgba(255, 255, 255, 0.08)';
  }};
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.03);
`;

export const ActivityFooter = styled.div`
  display: grid;
  justify-items: center;
  gap: 0.35rem;
  margin-top: 0.25rem;
  color: var(--textSoft);
`;

export const ActivityFooterIcon = styled.span`
  width: 54px;
  height: 54px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--icon-color);
  font-size: 1.45rem;
`;

export const ActivityFooterText = styled.p`
  margin: 0;
  text-align: center;
  font-size: 0.9rem;
  line-height: 1.5;

  strong {
    color: var(--text);
    font-weight: 700;
  }
`;

export const ToolsWrap = styled.div`
  margin-top: 1.55rem;
  position: relative;
`;

export const ToolsScroll = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding: 0.2rem 0.15rem 0.4rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ToolsTrack = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.9rem;
  min-width: max-content;
  padding: 0.15rem 0.1rem;
`;

export const ToolCard = styled.div`
  width: 74px;
  height: 74px;
  border-radius: 1rem;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.32rem;
  color: var(--text);
  text-align: center;
  padding: 0.45rem;

  @media screen and (max-width: 760px) {
    width: 66px;
    height: 66px;
    border-radius: 0.9rem;
  }
`;

export const ToolIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--icon-color);
  font-size: 1.55rem;
  line-height: 1;

  @media screen and (max-width: 760px) {
    font-size: 1.3rem;
  }
`;

export const ToolName = styled.span`
  color: var(--textSoft);
  font-size: 0.62rem;
  line-height: 1.1;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const toolsMarqueeMove = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-50% - 0.45rem));
  }
`;

export const BottomToolsMarqueeSection = styled.div`
  position: relative;
  margin: 0 auto 5.4rem;
  width: min(1280px, 94vw);
  box-sizing: border-box;

  @media screen and (min-width: 1280px) {
    padding-left: 4.2rem;
  }

  @media screen and (max-width: 760px) {
    width: calc(100% - 2rem);
    margin: 0 auto 5.9rem;
  }
`;

export const ToolsMarqueeViewport = styled.div`
  position: relative;
  overflow: hidden;
  padding: 0.25rem 0;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 56px;
    z-index: 2;
    pointer-events: none;
  }

  &::before {
    left: 0;
    background: linear-gradient(to right, var(--bg), rgba(var(--fade-color), 0));
  }

  &::after {
    right: 0;
    background: linear-gradient(to left, var(--bg), rgba(var(--fade-color), 0));
  }

  @media screen and (max-width: 760px) {
    overflow-x: auto;
    overflow-y: hidden;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }

    &::before,
    &::after {
      width: 26px;
    }
  }
`;

export const ToolsMarqueeTrack = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
  gap: 0.9rem;
  animation: ${toolsMarqueeMove} 28s linear infinite;
  will-change: transform;

  &:hover {
    animation-play-state: paused;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }

  @media screen and (max-width: 760px) {
    animation: none;
    gap: 0.6rem;
    padding: 0 0.1rem;
  }
`;

export const ToolsMarqueeGroup = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.9rem;

  @media screen and (max-width: 760px) {
    gap: 0.6rem;
  }
`;

/* ── 3-column card grid ── */
export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.9rem;
  margin-top: 2rem;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.article`
  border-radius: 1.2rem;
  padding: 1.5rem;
`;

export const CardIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.75rem;
  color: var(--icon-color);
`;

export const CardTitle = styled.h3`
  color: var(--text);
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const CardText = styled.p`
  color: var(--textSoft);
  line-height: 1.6;
  font-size: 0.88rem;
`;

/* ── Experience timeline ── */
export const TimelineWrap = styled.div`
  position: relative;
  margin-top: 1.9rem;
  max-width: 1120px;
  margin-left: auto;
  margin-right: auto;
`;

export const TimelineScroll = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding: 0.45rem 2.8rem 0.9rem;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 760px) {
    padding: 0.25rem 0.9rem 0.6rem;
  }
`;

export const TimelineTrack = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 1.35rem;
  min-width: max-content;
  padding: 0.25rem 0.2rem;

  &::before {
    content: '';
    position: absolute;
    left: 0.65rem;
    right: 0.65rem;
    top: 2.55rem;
    height: 2px;
    background: rgba(122, 132, 142, 0.36);
  }
`;

export const TimelineMilestone = styled.button`
  position: relative;
  z-index: 1;
  width: 136px;
  border: none;
  background: transparent;
  padding: 0.2rem 0.35rem 0.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => (props.$active ? 'var(--text)' : 'var(--textSoft)')};
  transition: transform 0.2s ease, color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    color: var(--text);
  }
`;

export const TimelineYear = styled.span`
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.06em;
`;

export const TimelineYearRow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
`;

export const TimelineNowBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 0.18rem 0.5rem;
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #f1c75a;
  background: rgba(241, 199, 90, 0.15);
  border: 1px solid rgba(241, 199, 90, 0.48);
  box-shadow:
    inset 0 0 0 1px rgba(241, 199, 90, 0.18),
    0 0 14px rgba(241, 199, 90, 0.24);
  text-shadow: 0 0 8px rgba(241, 199, 90, 0.28);
  animation: nowPulse 2.2s ease-in-out infinite;

  @keyframes nowPulse {
    0%,
    100% {
      box-shadow:
        inset 0 0 0 1px rgba(241, 199, 90, 0.18),
        0 0 10px rgba(241, 199, 90, 0.18);
    }
    50% {
      box-shadow:
        inset 0 0 0 1px rgba(241, 199, 90, 0.28),
        0 0 18px rgba(241, 199, 90, 0.32);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const TimelineTick = styled.span`
  width: 2px;
  height: 22px;
  margin-top: 0.82rem;
  border-radius: 999px;
  background: ${(props) => (props.$active ? 'rgba(229, 231, 235, 0.88)' : 'rgba(120, 132, 143, 0.52)')};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: -7px;
    left: 50%;
    transform: translateX(-50%);
    width: ${(props) => (props.$active ? '12px' : '9px')};
    height: ${(props) => (props.$active ? '12px' : '9px')};
    border-radius: 50%;
    background: var(--surface);
    box-shadow:
      -2px -2px 4px var(--shadowLight),
      2px 2px 4px var(--shadowDark);
  }
`;

export const TimelineIcon = styled.span`
  width: 46px;
  height: 46px;
  margin-top: 0.68rem;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--icon-color);
  font-size: 1.05rem;
  background: var(--surface);
  box-shadow:
    -5px -5px 10px var(--shadowLight),
    5px 5px 10px var(--shadowDark);
  transition: box-shadow 0.2s ease, transform 0.2s ease;

  ${(props) =>
    props.$current &&
    css`
      color: var(--text);
      box-shadow:
        -5px -5px 10px var(--shadowLight),
        5px 5px 10px var(--shadowDark),
        0 0 16px rgba(150, 170, 200, 0.22);
    `}

  ${(props) =>
    props.$active &&
    css`
      transform: translateY(-1px);
      box-shadow:
        inset -5px -5px 10px var(--shadowLight),
        inset 5px 5px 10px var(--shadowDark);
    `}
`;

export const TimelineLabel = styled.span`
  margin-top: 0.62rem;
  font-size: 0.82rem;
  font-weight: 600;
  text-align: center;
  max-width: 120px;
  line-height: 1.25;
`;

export const TimelineEdgeFade = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 88px;
  z-index: 3;
  pointer-events: none;
  opacity: ${(props) => (props.$visible ? 1 : 0)};
  transition: opacity 0.2s ease;

  ${(props) =>
    props.$side === 'left'
      ? `
    left: 0;
    background: linear-gradient(to right, var(--bg), rgba(var(--fade-color), 0));
  `
      : `
    right: 0;
    background: linear-gradient(to left, var(--bg), rgba(var(--fade-color), 0));
  `}

  @media screen and (max-width: 760px) {
    width: 34px;
  }
`;

/* ── Experience list ── */
export const ExperienceList = styled.div`
  display: grid;
  gap: 0.75rem;
  margin-top: 2rem;
`;

export const ExperienceCard = styled.article`
  border-radius: 1.1rem;
  padding: 1.55rem 1.65rem;
  width: fit-content;
  max-width: min(100%, 980px);
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 760px) {
    padding: 1rem;
    width: 100%;
    max-width: 100%;
  }
`;

export const ExperienceHead = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
  align-items: flex-start;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ExperienceCompany = styled.h3`
  color: var(--text);
  font-size: 1rem;
  font-weight: 600;
`;

export const ExperienceRole = styled.p`
  color: var(--textSoft);
  margin-top: 0.2rem;
  font-size: 0.86rem;
`;

export const ExperiencePeriod = styled.span`
  color: var(--textSoft);
  font-size: 0.78rem;
  white-space: nowrap;
`;

export const ExperienceImpact = styled.p`
  margin-top: 0.65rem;
  color: var(--text);
  line-height: 1.68;
  font-size: 0.9rem;
  opacity: 0.85;
`;

const detailFadeInA = keyframes`
  from {
    opacity: 0.58;
    transform: translateY(3px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const detailFadeInB = keyframes`
  from {
    opacity: 0.58;
    transform: translateY(3px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ExperienceDetailMotion = styled.div`
  animation: ${(props) => (props.$token % 2 === 0 ? detailFadeInA : detailFadeInB)} 150ms ease-out;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.75rem;
`;

export const Tag = styled.span`
  border-radius: 999px;
  padding: 0.28rem 0.6rem;
  color: var(--text);
  font-size: 0.74rem;
`;

export const CaseStudyWrap = styled.div`
  margin-top: 1rem;
  padding: 0.95rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.95rem;

  @media screen and (max-width: 760px) {
    margin-top: 0.8rem;
    padding: 0.68rem;
    gap: 0.75rem;
  }
`;

export const CaseSectionTitle = styled.h4`
  color: var(--text);
  font-size: 0.94rem;
  font-weight: 700;
  margin-bottom: 0.55rem;
`;

export const CaseTopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.7rem;
  padding: 0.02rem 0.08rem 0.62rem;

  @media screen and (max-width: 760px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 0.55rem;
    padding-bottom: 0.62rem;
  }
`;

export const CaseTopRole = styled.div`
  color: var(--text);
  font-size: 0.82rem;
  font-weight: 700;
  line-height: 1.35;
  border-radius: 999px;
  padding: 0.44rem 0.86rem;
  white-space: nowrap;

  strong {
    color: var(--textSoft);
    font-weight: 600;
    margin-right: 0.28rem;
  }
`;

export const CaseTopWebsite = styled.a`
  color: var(--text);
  font-size: 0.82rem;
  font-weight: 700;
  text-decoration: none;
  border-radius: 999px;
  padding: 0.44rem 0.86rem;
  white-space: nowrap;
`;

export const CaseCurrentLine = styled.p`
  margin: 0.15rem 0.08rem 0.2rem;
  color: var(--textSoft);
  font-size: 0.88rem;
  line-height: 1.55;
`;

export const CaseBlock = styled.div`
  padding-top: 0.75rem;

  &:last-child {
    padding-bottom: 0.72rem;
  }
`;

export const CaseList = styled.ol`
  margin: 0;
  padding-left: 1.15rem;
  color: var(--textSoft);
  font-size: 0.86rem;
  line-height: 1.7;
  max-width: 88ch;

  li + li {
    margin-top: 0.5rem;
  }

  @media screen and (max-width: 760px) {
    font-size: 0.82rem;
    line-height: 1.6;
    padding-left: 1rem;
  }
`;

/* ── FAQ item ── */
export const FaqList = styled.div`
  max-width: 740px;
  margin: 2rem auto 0;
`;

export const FaqItem = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid rgba(128, 128, 128, 0.18);

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

export const FaqIconWrap = styled.span`
  width: 36px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 999px;
  color: var(--icon-color);
`;

export const FaqQuestion = styled.div`
  font-weight: 600;
  color: var(--text);
  margin-bottom: 0.45rem;
  font-size: 0.97rem;
`;

export const FaqAnswer = styled.p`
  color: var(--textSoft);
  font-size: 0.88rem;
  line-height: 1.65;
`;

/* ── Contact section ── */
export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  align-items: center;

  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const ContactLeft = styled.div``;

export const ContactRight = styled.div`
  border-radius: 1.3rem;
  padding: 2rem;
`;

export const AvailRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 1rem 0 1.5rem;
`;

export const AvailDot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #19b47b;
  display: inline-block;
  flex-shrink: 0;
`;

export const ContactFooter = styled.div`
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(128, 128, 128, 0.15);
  font-size: 0.8rem;
  color: var(--textSoft);
  text-align: center;
`;

/* ── Social sidebar (desktop: fixed left) ── */
export const SocialSidebar = styled.div`
  display: none;

  @media screen and (min-width: 1280px) {
    display: block;
    position: fixed;
    z-index: 30;
    top: 50%;
    transform: translateY(-50%);
    left: 2.8rem;
  }
`;

export const SocialIconsCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.9rem;
`;

/* ── Social bar (mobile: fixed bottom) ── */
export const SocialBar = styled.div`
  display: flex;
  position: fixed;
  z-index: 55;
  bottom: 0;
  left: 0;
  right: 0;
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  background: rgba(var(--fade-color), 0.88);
  padding: 0.65rem 2rem;
  justify-content: space-around;
  align-items: center;

  @media screen and (min-width: 1280px) {
    display: none;
  }

  @media screen and (max-width: 760px) {
    padding: 0.48rem 0.9rem;
    border-top: 1px solid rgba(128, 128, 128, 0.12);
    background: var(--bg);
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
`;

export const SidebarIconLink = styled.a`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--icon-color);
  text-decoration: none;

  &:visited {
    color: var(--icon-color);
  }

  &[data-plain='true'] {
    background: transparent !important;
    box-shadow:
      -5px -5px 10px var(--shadowLight),
      5px 5px 10px var(--shadowDark) !important;
  }

  svg {
    width: 21px;
    height: 21px;
  }

  @media screen and (max-width: 760px) {
    width: 36px;
    height: 36px;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

/* ── Activity / tools showcase sections ── */
/* ── Legacy footer (kept for backward compat) ── */
export const Footer = styled.footer`
  border-radius: 1.1rem;
  background: var(--surface);
  padding: 0.95rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.8rem;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const FooterLinks = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const FooterLink = styled.a`
  color: var(--text);
  padding: 0.4rem 0.58rem;
  border-radius: 999px;
  font-size: 0.8rem;
`;

export const FooterText = styled.p`
  color: var(--textSoft);
  font-size: 0.88rem;
`;
