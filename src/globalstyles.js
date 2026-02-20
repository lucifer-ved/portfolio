import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --bg: #eff2f9;
    --surface: #f1f5f9;
    --muted: #b5bfc6;
    --text: #2b3440;
    --textSoft: #7e909e;

    /* accent off by default — identical to lastbrain.fr look */
    --accent: var(--muted);
    --accent-soft: rgba(181, 191, 198, 0.0);

    --shadowLight: #fcfcfc;
    --shadowDark: rgba(22, 27, 29, 0.23);

    --fade-color: 239, 242, 249;

    --cursor-dot: #6b7280;
    --cursor-ring: #9ca3af;
    --cursor-hover: #000000;

    --icon-color: #4b5563;

    --grid-line: rgba(0, 0, 0, 0.04);
  }

  [data-theme='dark'] {
    --bg: #1c1c1c;
    --surface: #191919;
    --muted: #757575;
    --text: #e5e7eb;
    --textSoft: #9ca3af;

    --accent: var(--muted);
    --accent-soft: rgba(117, 117, 117, 0.0);

    --shadowLight: rgba(55, 55, 55, 0.7);
    --shadowDark: rgba(0, 0, 0, 0.5);

    --fade-color: 19, 19, 19;

    --cursor-dot: #9ca3af;
    --cursor-ring: #6b7280;
    --cursor-hover: #e5e7eb;

    --icon-color: #d1d5db;

    --grid-line: rgba(255, 255, 255, 0.015);
  }

  /* contrast color toggle ON */
  [data-accent='on'] {
    --accent: #FFC738;
    --accent-soft: rgba(255, 199, 56, 0.12);
  }

  [data-theme='dark'][data-accent='on'] {
    --accent: #FFC738;
    --accent-soft: rgba(255, 199, 56, 0.10);
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  html,
  body,
  #root {
    min-height: 100%;
  }

  body {
    background: var(--bg);
    color: var(--text);
    position: relative;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    overflow-x: hidden;
  }

  body::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    filter: opacity(0.1);
    z-index: 1000;
    mix-blend-mode: multiply;
  }

  [data-theme='dark'] body::after {
    filter: opacity(0.7);
    mix-blend-mode: screen;
  }

  /* Theme hints for common floating chat launchers (when not iframe-restricted). */
  [data-theme='dark'] .intercom-lightweight-app-launcher,
  [data-theme='dark'] .crisp-client .cc-kv6t,
  [data-theme='dark'] #chat-widget-launcher,
  [data-theme='dark'] [class*='chat-launcher'] {
    filter: saturate(0.85) brightness(0.9);
  }

  [data-theme='light'] .intercom-lightweight-app-launcher,
  [data-theme='light'] .crisp-client .cc-kv6t,
  [data-theme='light'] #chat-widget-launcher,
  [data-theme='light'] [class*='chat-launcher'] {
    filter: saturate(0.9) brightness(1);
  }

  .bg-neu {
    background: var(--bg);
  }

  .surface-neu {
    background: var(--surface);
  }

  .text-soft {
    color: var(--textSoft);
  }

  .text-strong {
    color: var(--text);
  }

  .icon-color {
    color: var(--icon-color);
  }

  .lucide {
    width: 18px;
    height: 18px;
  }

  .bottom-fade {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 3.5rem;
    z-index: 50;
    pointer-events: none;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    background: linear-gradient(
      to top,
      rgba(var(--fade-color), 0.92),
      rgba(var(--fade-color), 0.55) 40%,
      rgba(var(--fade-color), 0) 100%
    );
    -webkit-mask-image: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    mask-image: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  }

  @media (min-width: 768px) {
    .bottom-fade {
      height: 6rem;
    }
  }

  .floating-message {
    position: fixed;
    right: 1.15rem;
    bottom: 1.15rem;
    min-width: 108px;
    height: 56px;
    border-radius: 999px;
    border: none;
    padding: 0 0.95rem 0 0.55rem;
    gap: 0.55rem;
    background: var(--surface);
    box-shadow: -10px -10px 14px var(--shadowLight), 10px 10px 14px var(--shadowDark);
    z-index: 1150;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--text);
    transition: transform 0.18s ease, box-shadow 0.18s ease, color 0.18s ease;
  }

  .floating-message__ring {
    width: 36px;
    height: 36px;
    border-radius: 999px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-shadow: inset -4px -4px 8px var(--shadowLight), inset 4px 4px 8px var(--shadowDark);
    color: inherit;
    flex: 0 0 auto;
  }

  .floating-message svg {
    width: 17px;
    height: 17px;
  }

  .floating-message__label {
    font-size: 0.9rem;
    font-weight: 700;
    line-height: 1;
    letter-spacing: 0.01em;
  }

  .floating-message:hover {
    transform: translateY(-2px) scale(1.02);
    color: var(--accent);
    box-shadow: -8px -8px 12px var(--shadowLight), 8px 8px 12px var(--shadowDark);
  }

  .floating-message:active {
    transform: scale(0.97);
    box-shadow: inset -6px -6px 12px var(--shadowLight), inset 6px 6px 12px var(--shadowDark);
  }

  @media (max-width: 760px) {
    .floating-message {
      right: 0.9rem;
      bottom: 5.1rem;
      min-width: 98px;
      height: 52px;
      padding: 0 0.85rem 0 0.48rem;
    }

    .floating-message__ring {
      width: 34px;
      height: 34px;
    }

    .floating-message__label {
      font-size: 0.84rem;
    }

    /* Chat widget kept disabled on mobile for cleaner layout */
    iframe[src*='landbot'],
    [id*='landbot'],
    [class*='landbot'] {
      display: none !important;
      visibility: hidden !important;
    }
  }

  .neu-sm {
    background: var(--surface);
    border-radius: 1.25rem;
    box-shadow: -5px -5px 10px var(--shadowLight), 5px 5px 10px var(--shadowDark);
  }

  .neu-md {
    background: var(--surface);
    border-radius: 1.25rem;
    box-shadow: -10px -10px 10px var(--shadowLight), 10px 10px 10px var(--shadowDark);
  }

  .neu-lg {
    background: var(--surface);
    border-radius: 1.5rem;
    box-shadow: -10px -10px 15px var(--shadowLight), 10px 10px 15px var(--shadowDark);
  }

  .neu-emboss {
    color: var(--surface);
    text-shadow: -5px -5px 10px var(--shadowLight), 5px 5px 10px var(--shadowDark);
  }

  .neu-emboss-soft {
    color: var(--surface);
    text-shadow: -8px -8px 16px var(--shadowLight), 8px 8px 16px var(--shadowDark);
  }

  .neu-browser {
    background: var(--surface);
    border-radius: 9999px;
    box-shadow: -10px -10px 20px var(--shadowLight), 10px 10px 20px var(--shadowDark);
  }

  .neu-dot {
    width: 12px;
    height: 12px;
    border-radius: 9999px;
    background: var(--surface);
    box-shadow: inset -5px -5px 10px var(--shadowLight), inset 5px 5px 10px var(--shadowDark);
  }

  .neu-inset-sm {
    background: var(--surface);
    border-radius: 9999px;
    box-shadow: inset -5px -5px 10px var(--shadowLight), inset 5px 5px 10px var(--shadowDark);
  }

  .neu-inset-md {
    background: var(--surface);
    border-radius: 1rem;
    box-shadow: inset -2px -2px 5px var(--shadowLight), inset 2px 2px 5px var(--shadowDark);
  }

  .reveal {
    opacity: 0;
    transform: translateY(14px);
    filter: blur(4px);
    transition: opacity 0.7s ease, transform 0.7s ease, filter 0.7s ease;
  }

  .reveal.show {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }

  .snap-y {
    scroll-snap-type: y mandatory;
  }

  .snap-start {
    scroll-snap-align: start;
  }

  .nav-active {
    color: var(--text);
    font-weight: 700;
  }

  a:not(.no-hover):hover {
    transform: translateY(-2px) scale(1.01);
    filter: saturate(1.04);
    transition: transform 0.18s ease, filter 0.18s ease;
  }

  button:not(.no-hover):hover {
    transform: translateY(-2px) scale(1.01);
    filter: saturate(1.04);
    transition: transform 0.18s ease, filter 0.18s ease;
  }

  a:not(.no-hover):active {
    transform: translateY(0) scale(0.98);
  }

  button:not(.no-hover):active {
    transform: translateY(0) scale(0.98);
  }

  .neu-sm:active,
  .neu-md:active,
  .neu-lg:active {
    box-shadow: inset -8px -8px 16px var(--shadowLight), inset 8px 8px 16px var(--shadowDark) !important;
    transform: scale(0.98) !important;
    transition: all 0.1s ease;
  }

  button:active {
    transform: scale(0.98) !important;
  }

  .theme-toggle {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease;
  }

  .theme-toggle:hover {
    transform: scale(1.05);
  }

  .theme-toggle .lucide {
    width: 20px;
    height: 20px;
  }

  @media (pointer: fine) {
    * {
      cursor: none;
    }
  }

  .custom-cursor {
    position: fixed;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1.5px solid var(--cursor-ring);
    background: transparent;
    pointer-events: none;
    z-index: 9999;
    transform: translate(-50%, -50%);
    transition: transform 0.14s ease, border-color 0.2s ease;
    display: none;
  }

  @media (pointer: fine) {
    .custom-cursor {
      display: block;
    }
  }

  .custom-cursor::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 5px;
    height: 5px;
    background: var(--cursor-dot);
    border-radius: 50%;
    transition: width 0.2s ease, height 0.2s ease, background 0.2s ease;
  }

  .custom-cursor::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 1.6px;
    height: 9px;
    border-radius: 999px;
    background: var(--cursor-ring);
    transform: translate(-50%, 2px);
    transition: height 0.2s ease, transform 0.2s ease, background 0.2s ease;
  }

  .custom-cursor.hover {
    transform: translate(-50%, -50%) scale(1.16);
    border-color: var(--cursor-hover);
  }

  .custom-cursor.hover::before {
    width: 6px;
    height: 6px;
    background: var(--cursor-hover);
  }

  .custom-cursor.hover::after {
    height: 11px;
    transform: translate(-50%, 1px);
    background: var(--cursor-hover);
  }

  .custom-cursor.active {
    transform: translate(-50%, -50%) scale(0.92);
  }

  .custom-cursor.active::after {
    height: 7px;
    transform: translate(-50%, 3px);
  }

  .tooltip {
    position: relative;
  }

  .tooltip::before {
    content: attr(data-tooltip);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    padding: 0.5rem 0.75rem;
    background: var(--surface);
    color: var(--text);
    font-size: 0.75rem;
    font-weight: 500;
    white-space: nowrap;
    border-radius: 0.5rem;
    box-shadow: -5px -5px 10px var(--shadowLight), 5px 5px 10px var(--shadowDark);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease, transform 0.2s ease;
    z-index: 100;
  }

  .tooltip::after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease;
    z-index: 100;
  }

  .tooltip-right::before {
    left: calc(100% + 1rem);
    top: 50%;
    transform: translateY(-50%);
  }

  .tooltip-right::after {
    left: calc(100% + 0.5rem);
    top: 50%;
    transform: translateY(-50%);
    border-width: 5px 5px 5px 0;
    border-style: solid;
    border-color: transparent var(--surface) transparent transparent;
  }

  .tooltip-top::before {
    bottom: calc(100% + 0.75rem);
    top: auto;
  }

  .tooltip-top::after {
    bottom: calc(100% + 0.25rem);
    top: auto;
    border-width: 5px 5px 0 5px;
    border-style: solid;
    border-color: var(--surface) transparent transparent transparent;
  }

  .tooltip:hover::before,
  .tooltip:hover::after {
    opacity: 1;
  }

  @media (pointer: coarse), (max-width: 900px) {
    .tooltip::before,
    .tooltip::after {
      display: none !important;
    }
  }

  .step-indicator {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  .step-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--muted);
    transition: all 0.3s ease;
  }

  .step-dot.active {
    width: 32px;
    background: var(--text);
    border-radius: 5px;
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .slide-in-right {
    animation: slideInRight 0.4s ease-out;
  }

  .slide-in-left {
    animation: slideInLeft 0.4s ease-out;
  }

  @media (prefers-reduced-motion: reduce) {
    .reveal,
    .reveal.show {
      transition: none;
    }

    html {
      scroll-behavior: auto;
    }

    a:not(.no-hover):hover {
      transform: none;
    }

    .slide-in-right,
    .slide-in-left {
      animation: none;
    }
  }
`;
