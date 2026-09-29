import styled, { css, keyframes } from 'styled-components';

// Explicit shadows throughout: the global .neu-* classes don't apply at runtime,
// and App.js only animates elements that exist when the page first mounts.
// Cards mirror the Work history card: page-coloured raised card (neu-lg depth),
// raised pills (neu-sm) and a pressed-in well (neu-inset-md).
const raised = '-5px -5px 10px var(--shadowLight), 5px 5px 10px var(--shadowDark)';
const raisedLg = '-10px -10px 15px var(--shadowLight), 10px 10px 15px var(--shadowDark)';
const pressed = 'inset -3px -3px 6px var(--shadowLight), inset 3px 3px 6px var(--shadowDark)';
const pressedSoft = 'inset -2px -2px 5px var(--shadowLight), inset 2px 2px 5px var(--shadowDark)';

const stageAccent = {
  concept: 'rgba(151, 161, 183, 0.95)',
  mvp: 'rgba(122, 146, 220, 0.92)',
  beta: 'rgba(93, 176, 200, 0.92)',
  live: 'rgba(103, 196, 150, 0.92)',
  stashed: 'rgba(128, 128, 128, 0.7)'
};

const accentFor = (stage = '') => stageAccent[stage.toLowerCase()] || stageAccent.concept;

/* Studio strip */

export const StudioStrip = styled.div`
  margin-top: 1.45rem;
  border-radius: 1.25rem;
  padding: 1rem 1.2rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.9rem 1.5rem;
`;

export const StudioIdentity = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;
  min-width: 0;
`;

export const StudioMark = styled.span`
  width: 2.6rem;
  height: 2.6rem;
  flex: none;
  border-radius: 0.8rem;
  display: grid;
  place-items: center;
  color: var(--text);
  font-size: 0.76rem;
  font-weight: 900;
  letter-spacing: 0.04em;
`;

export const StudioName = styled.strong`
  display: block;
  color: var(--text);
  font-size: 0.98rem;
  font-weight: 700;
`;

export const StudioLine = styled.span`
  display: block;
  margin-top: 0.1rem;
  color: var(--textSoft);
  font-size: 0.8rem;
  line-height: 1.45;
`;

export const StudioStats = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
`;

export const StudioPill = styled.a`
  border-radius: 999px;
  padding: 0.36rem 0.78rem;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  color: var(--text);
  font-size: 0.76rem;
  font-weight: 600;
  white-space: nowrap;
  text-decoration: none;

  span {
    color: var(--textSoft);
    font-weight: 500;
  }
`;

/* Board shell + controls */

export const BuildShell = styled.div`
  margin-top: 1.1rem;
  border-radius: 1.35rem;
  padding: clamp(1rem, 2vw, 1.4rem);
`;

export const BoardHead = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
`;

export const StageFilter = styled.div`
  position: relative;
  display: inline-flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  padding: 0.3rem;
  border-radius: 999px;
  box-shadow: ${pressed};

  @media screen and (max-width: 760px) {
    border-radius: 1.1rem;
  }
`;

// The raised pill that slides to the selected stage
export const StageIndicator = styled.span`
  position: absolute;
  z-index: 0;
  border-radius: 999px;
  background: var(--surface);
  box-shadow: -3px -3px 6px var(--shadowLight), 3px 3px 6px var(--shadowDark);
  pointer-events: none;
  transition:
    left 0.45s cubic-bezier(0.22, 1, 0.36, 1),
    top 0.45s cubic-bezier(0.22, 1, 0.36, 1),
    width 0.45s cubic-bezier(0.22, 1, 0.36, 1);

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const StageButton = styled.button`
  position: relative;
  z-index: 1;
  border: none;
  cursor: pointer;
  font: inherit;
  font-size: 0.76rem;
  font-weight: 600;
  border-radius: 999px;
  padding: 0.4rem 0.8rem;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: ${({ $active }) => ($active ? 'var(--text)' : 'var(--textSoft)')};
  background: transparent;
  transition: color 0.3s ease;

  &:hover {
    color: var(--text);
  }

  span {
    color: var(--textSoft);
    font-weight: 500;
    font-variant-numeric: tabular-nums;
  }
`;

export const StageDot = styled.span`
  width: 0.5rem;
  height: 0.5rem;
  flex: none;
  border-radius: 999px;
  background: ${({ $stage }) => accentFor($stage)};
`;

export const BoardControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.55rem;
`;

export const StashSwitch = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  font: inherit;
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  color: var(--text);
  font-size: 0.78rem;
  font-weight: 600;
  padding: 0.2rem 0.1rem;
  margin-right: 0.35rem;

  &:focus-visible {
    outline: 2px solid var(--muted);
    outline-offset: 4px;
    border-radius: 999px;
  }
`;

export const SwitchTrack = styled.span`
  position: relative;
  width: 2.5rem;
  height: 1.4rem;
  border-radius: 999px;
  flex: none;
  background: ${({ $on }) => ($on ? 'rgba(128, 128, 128, 0.22)' : 'transparent')};
  box-shadow: ${pressed};
  transition: background 0.25s ease;
`;

export const SwitchKnob = styled.span`
  position: absolute;
  top: 0.2rem;
  left: 0.2rem;
  width: 1rem;
  height: 1rem;
  border-radius: 999px;
  background: ${({ $on }) => ($on ? 'var(--text)' : 'var(--textSoft)')};
  box-shadow: -2px -2px 4px var(--shadowLight), 2px 2px 4px var(--shadowDark);
  transform: translateX(${({ $on }) => ($on ? '1.1rem' : '0')});
  transition: transform 0.25s ease, background 0.25s ease;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const RoundButton = styled.button`
  border: none;
  cursor: pointer;
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 999px;
  display: grid;
  place-items: center;
  color: var(--text);
  font-size: 1rem;
  background: var(--surface);
  box-shadow: ${raised};
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-1px);
  }

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

/* Carousel: one row, fixed height, scrolls sideways */

export const Carousel = styled.div`
  margin-top: 1.1rem;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(250px, calc((100% - 4.05rem) / 4));
  gap: 1.35rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-padding-inline: 1.2rem;
  scroll-behavior: smooth;
  /* Room for the deep card shadows, which a scroll container would otherwise clip */
  margin: 0.2rem -1.2rem 0;
  padding: 1.2rem 1.2rem 1.6rem;
  scrollbar-width: thin;
  scrollbar-color: var(--muted) transparent;

  @media screen and (max-width: 760px) {
    grid-auto-columns: minmax(240px, 78%);
  }

  @media (prefers-reduced-motion: reduce) {
    scroll-behavior: auto;
  }
`;

const cardInA = keyframes`
  from { opacity: 0; transform: translateY(14px) scale(0.98); }
  to { opacity: var(--card-opacity, 1); transform: none; }
`;
const cardInB = keyframes`
  from { opacity: 0; transform: translateY(14px) scale(0.98); }
  to { opacity: var(--card-opacity, 1); transform: none; }
`;

export const BuildCard = styled.article`
  scroll-snap-align: start;
  border-radius: 1.1rem;
  padding: 1.1rem;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background: transparent;
  box-shadow: ${raisedLg};
  --card-opacity: ${({ $muted }) => ($muted ? 0.72 : 1)};
  opacity: var(--card-opacity);

  &[hidden] {
    display: none;
  }

  ${({ $cycle }) => $cycle > 0 && css`
    animation: ${$cycle % 2 ? cardInA : cardInB} 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;
  `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const CardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const StageChip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  border-radius: 999px;
  padding: 0.26rem 0.6rem;
  color: var(--text);
  font-size: 0.7rem;
  font-weight: 700;
  box-shadow: ${raised};
`;

export const CardProgress = styled.span`
  color: var(--textSoft);
  font-size: 0.74rem;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
`;

export const CardName = styled.h4`
  margin: 0.15rem 0 0;
  color: var(--text);
  font-size: 1rem;
  font-weight: 650;
  letter-spacing: 0.01em;
`;

export const CardDescription = styled.p`
  margin: 0;
  color: var(--textSoft);
  font-size: 0.78rem;
  line-height: 1.45;
`;

export const CardFoot = styled.div`
  margin-top: auto;
  padding-top: 0.45rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const CardWell = styled.div`
  border-radius: 0.9rem;
  padding: 0.7rem 0.8rem 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  box-shadow: ${pressedSoft};
`;

export const CardPlatform = styled.span`
  color: var(--textSoft);
  font-size: 0.64rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const CardReason = styled.span`
  color: var(--textSoft);
  font-size: 0.74rem;
  font-style: italic;
`;

export const ProgressTrack = styled.div`
  position: relative;
  height: 0.42rem;
  border-radius: 999px;
  overflow: hidden;
  box-shadow: ${pressedSoft};
`;

export const ProgressFill = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  border-radius: 999px;
  background: ${({ $stage }) => accentFor($stage)};
  opacity: 0.9;
`;

export const CardLink = styled.a`
  align-self: flex-start;
  border-radius: 999px;
  padding: 0.32rem 0.68rem;
  display: inline-flex;
  align-items: center;
  gap: 0.33rem;
  color: var(--text);
  font-size: 0.73rem;
  font-weight: 700;
  text-decoration: none;
  box-shadow: ${raised};
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-1px);
  }
`;

export const EmptyState = styled.div`
  align-self: start;
  border-radius: 1rem;
  padding: 1.4rem;
  color: var(--textSoft);
  font-size: 0.8rem;
  box-shadow: ${pressedSoft};
`;
