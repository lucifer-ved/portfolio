import styled, { keyframes } from 'styled-components';

// Explicit shadows: the global .neu-* classes don't apply at runtime.
const raisedLg = '-10px -10px 15px var(--shadowLight), 10px 10px 15px var(--shadowDark)';
const raisedSm = '-5px -5px 10px var(--shadowLight), 5px 5px 10px var(--shadowDark)';
const pressed = 'inset -3px -3px 6px var(--shadowLight), inset 3px 3px 6px var(--shadowDark)';

export const ContactLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
  gap: clamp(2rem, 5vw, 4.5rem);
  align-items: center;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 760px) {
    & > div:first-child {
      text-align: center;
    }
  }
`;

export const Kicker = styled.span`
  color: var(--textSoft);
  font-size: 0.74rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

// Same embossed treatment as the hero heading, so the page opens and closes alike
export const Emboss = styled.h2`
  margin: 0.8rem 0 0;
  font-size: clamp(3.6rem, 9vw, 7.4rem);
  font-weight: 900;
  line-height: 0.88;
  letter-spacing: -0.02em;
  color: var(--bg);
  text-shadow:
    -9px -9px 18px var(--shadowLight),
    9px 9px 18px var(--shadowDark),
    0 0 20px rgba(0, 0, 0, 0.18);

  span {
    display: block;
    -webkit-text-stroke: 1px rgba(39, 46, 54, 0.16);
  }

  html[data-theme='dark'] & span {
    -webkit-text-stroke: 1px rgba(228, 232, 239, 0.06);
  }

  /* Phones: same scale as the hero heading, so the page opens and closes alike */
  @media screen and (max-width: 760px) {
    font-size: clamp(4rem, 19vw, 5.6rem);
    line-height: 0.84;
    text-shadow:
      -7px -7px 14px var(--shadowLight),
      7px 7px 14px var(--shadowDark),
      0 0 14px rgba(0, 0, 0, 0.2);
  }
`;

export const Lead = styled.p`
  margin: 1.5rem auto 0 0;
  max-width: 34em;

  @media screen and (max-width: 760px) {
    margin: 1.5rem auto 0;
  }

  color: var(--textSoft);
  font-size: clamp(1rem, 1.2vw, 1.12rem);
  line-height: 1.7;

  strong {
    color: var(--text);
  }
`;

export const Facts = styled.div`
  margin-top: 1.4rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;

  /* Phones: availability as the headline pill, location and work mode as one
     quiet line under it, instead of three full-width rows */
  @media screen and (max-width: 760px) {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    align-items: center;
    gap: 0.9rem 0;
  }
`;

export const Fact = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  border-radius: 999px;
  padding: 0.42rem 0.85rem;
  color: var(--text);
  font-size: 0.8rem;
  font-weight: 600;
  box-shadow: ${pressed};

  @media screen and (max-width: 760px) {
    font-size: 0.84rem;

    /* Location and work mode: plain text, joined by a dot */
    &:not(:first-child) {
      padding: 0;
      border-radius: 0;
      box-shadow: none;
      color: var(--textSoft);
      font-weight: 500;
    }

    &:first-child {
      grid-column: 1 / -1;
      justify-self: center;
      padding: 0.5rem 1rem;
    }

    &:last-child::before {
      content: '·';
      /* The item's own 0.45rem gap sits after the dot, so less margin on that side */
      margin: 0 0.1rem 0 0.55rem;
      color: var(--textSoft);
    }
  }
`;

export const LiveDot = styled.i`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 999px;
  background: #19b47b;
  box-shadow: 0 0 10px rgba(25, 180, 123, 0.6);
`;

export const Card = styled.div`
  border-radius: 1.5rem;
  padding: clamp(1.4rem, 3vw, 2.2rem);
  display: grid;
  gap: 1.6rem;
  background: transparent;
  box-shadow: ${raisedLg};
`;

export const Question = styled.span`
  color: var(--text);
  font-size: 0.95rem;
  font-weight: 700;

  @media screen and (max-width: 760px) {
    text-align: center;
    font-size: 1.02rem;
  }
`;

export const TopicTrack = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.3rem;
  padding: 0.35rem;
  border-radius: 999px;
  box-shadow: ${pressed};

  /* Phones use TopicList instead */
  @media screen and (max-width: 760px) {
    display: none;
  }
`;

// The raised pill that slides to the selected topic
export const TopicIndicator = styled.span`
  position: absolute;
  z-index: 0;
  border-radius: 999px;
  background: var(--surface);
  box-shadow: -4px -4px 8px var(--shadowLight), 4px 4px 8px var(--shadowDark);
  pointer-events: none;
  transition:
    left 0.45s cubic-bezier(0.22, 1, 0.36, 1),
    top 0.45s cubic-bezier(0.22, 1, 0.36, 1),
    width 0.45s cubic-bezier(0.22, 1, 0.36, 1);

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const Topic = styled.button`
  position: relative;
  z-index: 1;
  border: none;
  cursor: pointer;
  font: inherit;
  border-radius: 999px;
  padding: 0.6rem 0.4rem;
  font-size: 0.84rem;
  font-weight: 600;
  white-space: nowrap;
  color: ${({ $active }) => ($active ? 'var(--text)' : 'var(--textSoft)')};
  background: transparent;
  transition: color 0.3s ease;

  &:hover {
    color: var(--text);
  }

  @media screen and (max-width: 760px) {
    min-height: 2.75rem;
    font-size: 0.88rem;
  }
`;

/* Phones: topics as a vertical list, each with its one-line promise */
export const TopicList = styled.div`
  display: none;

  @media screen and (max-width: 760px) {
    position: relative;
    display: grid;
    gap: 0.25rem;
    padding: 0.35rem;
    border-radius: 1.3rem;
    box-shadow: ${pressed};
  }
`;

export const TopicListIndicator = styled.span`
  position: absolute;
  z-index: 0;
  border-radius: 1rem;
  background: var(--surface);
  box-shadow: -4px -4px 8px var(--shadowLight), 4px 4px 8px var(--shadowDark);
  pointer-events: none;
  transition:
    top 0.45s cubic-bezier(0.22, 1, 0.36, 1),
    height 0.45s cubic-bezier(0.22, 1, 0.36, 1);

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const TopicRow = styled.button`
  position: relative;
  z-index: 1;
  border: none;
  background: transparent;
  cursor: pointer;
  font: inherit;
  text-align: left;
  border-radius: 1rem;
  padding: 0.8rem 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: ${({ $active }) => ($active ? 'var(--text)' : 'var(--textSoft)')};
  transition: color 0.3s ease;
  -webkit-tap-highlight-color: transparent;
`;

export const TopicRadio = styled.span`
  width: 1.15rem;
  height: 1.15rem;
  flex: none;
  border-radius: 50%;
  display: grid;
  place-items: center;
  box-shadow: ${pressed};

  &::after {
    content: '';
    width: 0.45rem;
    height: 0.45rem;
    border-radius: 50%;
    background: var(--text);
    transform: scale(${({ $active }) => ($active ? 1 : 0)});
    transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  }
`;

export const TopicText = styled.span`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  min-width: 0;

  strong {
    font-size: 0.95rem;
    font-weight: 700;
  }

  span {
    color: var(--textSoft);
    font-size: 0.8rem;
    line-height: 1.4;
  }
`;

const fitIn = keyframes`
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: none; }
`;

export const Fit = styled.p`
  margin: 0;
  animation: ${fitIn} 0.45s cubic-bezier(0.22, 1, 0.36, 1) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }

  min-height: 4.8em;
  color: var(--textSoft);
  font-size: 0.95rem;
  line-height: 1.65;

  b {
    color: var(--text);
    font-weight: 650;
  }

  @media screen and (max-width: 760px) {
    min-height: 0;
    text-align: center;

    b {
      display: none;
    }
  }
`;

export const Actions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.8rem;

  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const BigButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  border-radius: 999px;
  padding: 1rem 1.2rem;
  color: var(--text);
  font-size: 1rem;
  font-weight: 800;
  text-decoration: none;
  box-shadow: ${raisedSm};
  transition: transform 0.18s ease;

  svg {
    font-size: 1.1rem;
  }

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.98);
    box-shadow: ${pressed};
  }
`;

export const Footer = styled.div`
  margin-top: clamp(2.5rem, 5vw, 3.5rem);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.6rem;
  color: var(--textSoft);
  font-size: 0.78rem;

  /* Phones: centred, one line each, clear of the section dock */
  @media screen and (max-width: 760px) {
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    text-align: center;
    gap: 0.45rem;
    padding-top: 1.4rem;
    border-top: 1px solid rgba(128, 128, 128, 0.14);
    font-size: 0.84rem;
  }

  a {
    color: var(--text);
    font-weight: 600;
    text-decoration: none;
  }
`;
