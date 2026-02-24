import styled from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 120;
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  background: transparent;

  @media screen and (max-width: 900px) {
    background: var(--bg);
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    border-bottom: 1px solid rgba(128, 128, 128, 0.12);
  }

  @media screen and (max-width: 760px) {
    top: 0;
    left: 0;
    right: 0;
  }
`;

export const NavInner = styled.div`
  max-width: min(1280px, 94vw);
  margin: 0 auto;
  padding: 0.7rem 1rem 0.35rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.9rem;

  @media screen and (max-width: 900px) {
    padding: 0.48rem 0.9rem;
  }

  @media screen and (max-width: 760px) {
    padding: 0.48rem 0.9rem;
    gap: 0.65rem;
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
  width: 28px;
  height: 28px;
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
    font-size: 0.78rem;
    line-height: 1;
    font-weight: 800;
    letter-spacing: 0.02em;
    color: var(--text);
  }

  @media screen and (max-width: 760px) {
    width: 24px;
    height: 24px;

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
`;

export const BrandLast = styled.span`
  font-weight: 700;
  color: var(--text);
`;

export const NavMenu = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 1.45rem;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 1080px) {
    gap: 1rem;
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const NavAnchor = styled.a`
  color: var(--textSoft);
  font-size: 0.97rem;
  font-weight: 500;
  white-space: nowrap;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: var(--text);
    text-decoration: none;
    transform: none;
  }

  &.nav-active {
    color: var(--text);
    font-weight: 700;
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
  font-size: 0.97rem;
  font-weight: 700;
  padding: 0.56rem 1rem;
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
  background: var(--surface);
  color: var(--text);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.56rem 1rem;
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

  @media screen and (max-width: 900px) {
    padding: 0.5rem 0.75rem;
  }

  @media screen and (max-width: 760px) {
    padding: 0.46rem 0.66rem;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;
