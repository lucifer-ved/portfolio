import styled from 'styled-components';

// Mirrors the Work history card: page-coloured raised card (neu-lg depth),
// raised pills (neu-sm) and a pressed-in well (neu-inset-md). Static values are
// the fallback; App.js animates them for elements present on first render.
const raisedLg = '-10px -10px 15px var(--shadowLight), 10px 10px 15px var(--shadowDark)';
const raisedSm = '-5px -5px 10px var(--shadowLight), 5px 5px 10px var(--shadowDark)';
const pressed = 'inset -3px -3px 6px var(--shadowLight), inset 3px 3px 6px var(--shadowDark)';
const well = 'inset -2px -2px 5px var(--shadowLight), inset 2px 2px 5px var(--shadowDark)';
const gold = '#f1c75a';

/* Now learning */

export const NowRow = styled.div`
  margin-top: 1.2rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem 0.6rem;
`;

export const NowLabel = styled.span`
  margin-right: 0.3rem;
  color: var(--textSoft);
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

export const TopicChip = styled.span`
  border-radius: 999px;
  padding: 0.3rem 0.68rem;
  color: var(--text);
  font-size: 0.74rem;
  box-shadow: ${pressed};
`;

/* Badge grid */

export const BadgeGrid = styled.div`
  margin-top: 1.2rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(0.9rem, 1.6vw, 1.2rem);

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const Badge = styled.article`
  border-radius: 1.1rem;
  padding: 1.2rem 1.2rem 1.1rem;
  min-width: 0;
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  grid-template-rows: auto 1fr auto;
  column-gap: 0.9rem;
  background: transparent;
  box-shadow: ${raisedLg};

  ${({ $exam }) => $exam && `
    background: rgba(241, 199, 90, 0.08);
    border: 1px dashed rgba(241, 199, 90, 0.6);
    box-shadow: none;
  `}
`;

export const BadgeMark = styled.span`
  grid-row: 1 / 3;
  width: 3rem;
  height: 3rem;
  border-radius: 999px;
  display: grid;
  place-items: center;
  color: ${({ $exam }) => ($exam ? gold : 'var(--text)')};
  font-size: 0.7rem;
  font-weight: 900;
  letter-spacing: 0.03em;
  box-shadow: ${({ $exam }) => ($exam ? 'none' : raisedSm)};
`;

export const BadgeTitle = styled.h3`
  margin: 0;
  color: var(--text);
  font-size: 0.92rem;
  font-weight: 650;
  line-height: 1.3;
`;

export const BadgeMeta = styled.div`
  margin-top: 0.25rem;
  color: var(--textSoft);
  font-size: 0.74rem;
`;

export const BadgeFoot = styled.div`
  grid-column: 1 / -1;
  margin-top: 1rem;
  padding: 0.55rem 0.55rem 0.55rem 0.9rem;
  border-radius: 1rem;
  box-shadow: ${well};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  min-width: 0;
`;

export const CredentialId = styled.code`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--textSoft);
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 0.7rem;
  letter-spacing: 0.02em;
`;

export const BadgeActions = styled.div`
  display: flex;
  flex: none;
  gap: 0.45rem;
`;

const pill = `
  border: none;
  cursor: pointer;
  font: inherit;
  border-radius: 999px;
  padding: 0.32rem 0.7rem;
  display: inline-flex;
  align-items: center;
  gap: 0.33rem;
  background: transparent;
  color: var(--text);
  font-size: 0.74rem;
  font-weight: 700;
  white-space: nowrap;
  text-decoration: none;
  box-shadow: ${raisedSm};
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-1px);
  }
`;

export const PillButton = styled.button`
  ${pill}
`;

export const PillLink = styled.a`
  ${pill}
`;

export const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  padding: 0.18rem 0.5rem;
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${gold};
  background: rgba(241, 199, 90, 0.15);
  border: 1px solid rgba(241, 199, 90, 0.48);
  box-shadow: inset 0 0 0 1px rgba(241, 199, 90, 0.18), 0 0 14px rgba(241, 199, 90, 0.24);
  text-shadow: 0 0 8px rgba(241, 199, 90, 0.28);
  white-space: nowrap;
`;

export const LightboxMeta = styled.div`
  margin-top: 0.3rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.2rem 0.7rem;
  color: var(--textSoft);
  font-size: 0.76rem;

  code {
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 0.72rem;
  }
`;

export const LightboxActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.55rem;
`;

/* Lightbox */

export const LightboxBackdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(1rem, 4vw, 3rem);
  background: rgba(var(--fade-color), 0.82);
  backdrop-filter: blur(6px);
  animation: certFade 220ms ease both;

  @keyframes certFade {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const LightboxPanel = styled.div`
  width: min(980px, 100%);
  max-height: 100%;
  overflow: auto;
  border-radius: 1.5rem;
  padding: clamp(0.75rem, 2vw, 1.2rem);
  background: var(--bg);
  box-shadow: -10px -10px 15px var(--shadowLight), 10px 10px 15px var(--shadowDark);
  animation: certRise 260ms ease both;

  img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 0.9rem;
  }

  @keyframes certRise {
    from { opacity: 0; transform: translateY(12px) scale(0.985); }
    to { opacity: 1; transform: none; }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const LightboxImageWrap = styled.div`
  border-radius: 1rem;
  padding: 0.5rem;
`;

export const LightboxFooter = styled.div`
  a {
    box-shadow: inset -3px -3px 6px var(--shadowLight), inset 3px 3px 6px var(--shadowDark);
  }

  margin-top: 0.95rem;
  padding: 0 0.3rem 0.2rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem 1.2rem;

  > div {
    min-width: 0;
  }
`;

export const LightboxTitle = styled.h3`
  margin: 0;
  color: var(--text);
  font-size: 1.05rem;
  font-weight: 700;
  line-height: 1.3;
`;

export const CloseButton = styled.button`
  border: none;
  background: var(--surface);
  box-shadow: -4px -4px 8px var(--shadowLight), 4px 4px 8px var(--shadowDark);
  cursor: pointer;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 999px;
  display: inline-grid;
  place-items: center;
  color: var(--text);
  font-size: 1.05rem;
`;
