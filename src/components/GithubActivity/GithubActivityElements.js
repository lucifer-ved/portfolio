import styled, { css } from 'styled-components';

// Mirrors the Work history card: page-coloured raised card (neu-lg depth),
// pressed-in pills and a pressed-in well. Explicit shadows because the global
// .neu-* classes don't apply at runtime.
const raisedLg = '-10px -10px 15px var(--shadowLight), 10px 10px 15px var(--shadowDark)';
const pressed = 'inset -3px -3px 6px var(--shadowLight), inset 3px 3px 6px var(--shadowDark)';
const well = 'inset -2px -2px 5px var(--shadowLight), inset 2px 2px 5px var(--shadowDark)';
const gold = '#f1c75a';

// Green steps per contribution level: deeper in light theme so empty and busy
// days stay distinct. Written as static rules keyed on data-level, since
// prop-based values inside the theme selector don't apply.
const levelLight = ['rgba(47, 158, 109, 0.3)', 'rgba(47, 158, 109, 0.5)', 'rgba(47, 158, 109, 0.72)', 'rgba(47, 158, 109, 0.95)'];
const levelDark = ['rgba(103, 196, 150, 0.28)', 'rgba(103, 196, 150, 0.5)', 'rgba(103, 196, 150, 0.72)', 'rgba(103, 196, 150, 0.95)'];

const levelRules = (palette) => palette
  .map((color, i) => `[data-level='${i + 1}'] { background: ${color}; box-shadow: none; }`)
  .join('\n');

export const ActivityCard = styled.article`
  margin-top: 2.75rem;
  border-radius: 1.1rem;
  padding: clamp(1rem, 2.2vw, 1.4rem);
  background: transparent;
  box-shadow: ${raisedLg};

  @media screen and (max-width: 760px) {
    margin-top: 1.6rem;
    padding: 1.35rem 1.2rem;
  }

  ${levelRules(levelLight)}

  html[data-theme='dark'] & {
    ${levelRules(levelDark)}
  }
`;

export const ActivityHead = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.7rem 1rem;

  @media screen and (max-width: 760px) {
    gap: 1.1rem;
  }
`;

export const ActivityTitle = styled.h3`
  margin: 0;
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  color: var(--text);
  font-size: 0.98rem;
  font-weight: 700;
`;

export const StatRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  /* Phones: an even 2 × 2 grid reads faster than wrapped pills */
  @media screen and (max-width: 760px) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.6rem;
  }
`;

export const StatPill = styled.span`
  border-radius: 999px;
  padding: 0.34rem 0.74rem;
  color: var(--text);
  font-size: 0.74rem;
  font-weight: 700;
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
  box-shadow: ${pressed};

  span {
    color: var(--textSoft);
    font-weight: 500;
  }

  @media screen and (max-width: 760px) {
    border-radius: 0.9rem;
    padding: 0.7rem 0.8rem;
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
    font-size: 1.15rem;
    font-weight: 800;

    span {
      font-size: 0.72rem;
    }
  }
`;

export const GraphWell = styled.div`
  margin-top: 1rem;

  @media screen and (max-width: 760px) {
    margin-top: 1.3rem;
  }

  border-radius: 1rem;
  padding: 0.9rem 1rem 0.85rem;
  box-shadow: ${well};
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: var(--muted) transparent;
`;

const columns = css`
  display: grid;
  grid-template-columns: repeat(${({ $weeks }) => $weeks}, minmax(10px, 1fr));
  gap: 3px;
  min-width: calc(${({ $weeks }) => $weeks} * 13px);
`;

export const MonthRow = styled.div`
  ${columns}
  height: 1rem;
  margin-bottom: 0.35rem;
  color: var(--textSoft);
  font-size: 0.66rem;
  white-space: nowrap;
`;

export const Grid = styled.div`
  ${columns}
  grid-auto-flow: column;
  grid-template-rows: repeat(7, auto);
`;

export const Cell = styled.span`
  display: block;
  width: 100%;
  aspect-ratio: 1;
  border-radius: 3px;
  background: transparent;
  box-shadow: inset -1px -1px 2px var(--shadowLight), inset 1px 1px 2px var(--shadowDark);
  outline: ${({ $marked }) => ($marked ? `1.5px solid ${gold}` : 'none')};
  outline-offset: 1px;
`;

export const Legend = styled.div`
  margin-top: 0.75rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem 1rem;
  color: var(--textSoft);
  font-size: 0.72rem;

  @media screen and (max-width: 760px) {
    margin-top: 1.1rem;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    text-align: center;
    gap: 0.8rem;
  }
`;

export const LegendGroup = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;

  ${Cell} {
    width: 10px;
  }
`;

export const ProfileLink = styled.a`
  color: var(--text);
  font-weight: 600;
  text-decoration: none;

  @media screen and (max-width: 760px) {
    min-height: 2.75rem;
    display: inline-flex;
    align-items: center;
    font-size: 0.82rem;
  }
`;
