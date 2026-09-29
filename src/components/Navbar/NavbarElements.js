import styled from 'styled-components';

// Quiet navbar: no container, so it sits on the page like the floating social icons.
// It keeps the page colour behind it (with a soft fade) only so scrolled content stays readable.
// Explicit shadows because the global .neu-* classes don't apply at runtime.
const raisedSm = '-5px -5px 10px var(--shadowLight), 5px 5px 10px var(--shadowDark)';
const pressed = 'inset -3px -3px 6px var(--shadowLight), inset 3px 3px 6px var(--shadowDark)';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 120;
  background: var(--bg);

  /* Soft fade instead of an edge, so the nav never reads as a bar */
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    height: 1.25rem;
    background: linear-gradient(to bottom, var(--bg), transparent);
    pointer-events: none;
  }
`;

export const NavInner = styled.div`
  max-width: min(1280px, 94vw);
  margin: 0 auto;
  padding: 0.75rem 1rem 0.45rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.9rem;

  @media screen and (max-width: 900px) {
    padding: 0.6rem 0.9rem 0.4rem;
  }

  @media screen and (max-width: 760px) {
    padding: 0.55rem 0.75rem 0.4rem;
    gap: 0.5rem;
  }
`;

export const NavBrand = styled.a`
  color: var(--text);
  font-size: 1rem;
  font-weight: 400;
  display: inline-flex;
  align-items: center;
  gap: 0.48rem;
  letter-spacing: -0.01em;
  white-space: nowrap;

  @media screen and (max-width: 760px) {
    font-size: 0.92rem;
    gap: 0.38rem;
  }
`;

export const BrandIconChip = styled.span`
  width: 2.3rem;
  height: 2.3rem;
  border-radius: 999px;
  box-shadow: ${pressed};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--icon-color);
  flex-shrink: 0;

  svg {
    width: 26px;
    height: 26px;
  }

  span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 0.72rem;
    line-height: 1;
    font-weight: 900;
    letter-spacing: 0.02em;
    color: var(--text);
  }

  @media screen and (max-width: 760px) {
    width: 2.1rem;
    height: 2.1rem;

    svg {
      width: 22px;
      height: 22px;
    }

    span {
      font-size: 0.66rem;
    }
  }
`;

export const BrandName = styled.span`
  display: inline-flex;
  align-items: baseline;
  gap: 0.28rem;
`;

export const BrandFirst = styled.span`
  font-weight: 300;
  color: var(--textSoft);

  @media screen and (max-width: 360px) {
    display: none;
  }
`;

export const BrandLast = styled.span`
  font-weight: 700;
  color: var(--text);
`;

export const NavMenu = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.2rem;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const NavAnchor = styled.a`
  position: relative;
  padding: 0.45rem 0.95rem;
  border-radius: 999px;
  color: var(--textSoft);
  font-size: 0.95rem;
  font-weight: 500;
  white-space: nowrap;
  text-decoration: none;
  transition: color 0.2s ease;

  @media screen and (max-width: 1080px) {
    padding: 0.45rem 0.7rem;
  }

  &:hover {
    color: var(--text);
    text-decoration: none;
    transform: none;
  }

  &.nav-active {
    color: var(--text);
    font-weight: 700;
  }

  /* Current section: bold label with a small dot underneath */
  &.nav-active::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0.05rem;
    width: 0.3rem;
    height: 0.3rem;
    border-radius: 999px;
    transform: translateX(-50%);
    background: var(--text);
    box-shadow: 0 0 8px rgba(128, 128, 128, 0.5);
  }
`;

export const NavActions = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  @media screen and (max-width: 900px) {
    gap: 0.35rem;
  }

  @media screen and (max-width: 760px) {
    gap: 0.3rem;
  }
`;

export const NavButton = styled.a`
  color: var(--text);
  background: transparent;
  box-shadow: ${raisedSm};
  font-size: 0.92rem;
  font-weight: 700;
  padding: 0.52rem 1rem;
  border-radius: 999px;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;

  [data-accent='on'] & {
    background: #ffc738 !important;
    color: #1a1a1a !important;
    box-shadow: none !important;
  }

  @media screen and (max-width: 900px) {
    font-size: 0.84rem;
    padding: 0.5rem 0.75rem;
  }

  @media screen and (max-width: 760px) {
    font-size: 0.8rem;
    padding: 0.46rem 0.66rem;
  }
`;

export const ThemeToggleButton = styled.button`
  border: none;
  appearance: none;
  background: transparent;
  box-shadow: ${raisedSm};
  color: var(--text);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.45rem;
  height: 2.45rem;
  padding: 0;
  border-radius: 999px;
  gap: 0.35rem;
  font-size: 0.97rem;
  font-weight: 700;
  white-space: nowrap;

  .theme-icon-light,
  .theme-icon-dark {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 0;
  }

  svg {
    width: 18px;
    height: 18px;
  }

  @media screen and (max-width: 760px) {
    width: 2.2rem;
    height: 2.2rem;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;
