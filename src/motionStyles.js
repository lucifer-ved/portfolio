import { createGlobalStyle } from 'styled-components';

// Scroll-in motion for elements marked `.reveal` (App.js adds `.show` when they
// enter the viewport). Kept in its own stylesheet: rules after the noise SVG in
// globalstyles.js don't apply, because the parser reads the `//` in its data
// URI as a comment.
export const MotionStyle = createGlobalStyle`
  @media (prefers-reduced-motion: no-preference) {
    /* Opacity and transform only: both run on the compositor, so no repaints */
    .reveal {
      opacity: 0;
      transform: translate3d(0, 18px, 0);
      transition:
        opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
        transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
    }

    .reveal.show {
      opacity: 1;
      transform: none;
    }

    /* Siblings arrive one after another: heading first, then content */
    .reveal:nth-child(2) { transition-delay: 0.08s; }
    .reveal:nth-child(3) { transition-delay: 0.16s; }
    .reveal:nth-child(4) { transition-delay: 0.24s; }
  }
`;
