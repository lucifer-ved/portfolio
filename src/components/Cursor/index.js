import React, { useEffect, useRef, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

// Soft pebble cursor: a raised disc in the page colour that trails the pointer,
// sinks into a pressed-in ring over controls, and presses in on click.
// Mouse and trackpad only; touch devices keep their normal behaviour.
const INTERACTIVE = 'a, button, [role="button"], summary, label, select';
const ease = 'cubic-bezier(0.22, 1, 0.36, 1)';

const HidePointer = createGlobalStyle`
  html.has-custom-cursor,
  html.has-custom-cursor * {
    cursor: none !important;
  }

  html.has-custom-cursor input,
  html.has-custom-cursor textarea,
  html.has-custom-cursor [contenteditable='true'] {
    cursor: text !important;
  }
`;

const Layer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
  pointer-events: none;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  will-change: transform;
`;

const Pebble = styled(Layer)`
  width: 22px;
  height: 22px;
  margin: -11px 0 0 -11px;
  border-radius: 999px;
  background: var(--bg);
  box-shadow: -3px -3px 6px var(--shadowLight), 3px 3px 6px var(--shadowDark);
  transition:
    width 0.28s ${ease},
    height 0.28s ${ease},
    margin 0.28s ${ease},
    box-shadow 0.28s ease,
    background 0.28s ease,
    opacity 0.2s ease;

  &.hover {
    width: 44px;
    height: 44px;
    margin: -22px 0 0 -22px;
    background: transparent;
    box-shadow: inset -3px -3px 6px var(--shadowLight), inset 3px 3px 6px var(--shadowDark);
  }

  &.down {
    box-shadow: inset -4px -4px 8px var(--shadowLight), inset 4px 4px 8px var(--shadowDark);
  }
`;

const Dot = styled(Layer)`
  width: 4px;
  height: 4px;
  margin: -2px 0 0 -2px;
  border-radius: 999px;
  background: var(--text);
  transition: opacity 0.2s ease;
`;

const Cursor = () => {
  const [finePointer] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches
  );
  const [visible, setVisible] = useState(false);
  const pebbleRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    if (!finePointer) return undefined;
    document.documentElement.classList.add('has-custom-cursor');

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // Share of the remaining gap the pebble closes per 60Hz frame; scaled by
    // elapsed time so it feels the same on 60Hz and 120Hz displays
    const FOLLOW = 0.5;
    let mx = -100, my = -100, x = -100, y = -100;
    let overControl = false;
    let down = false;
    let shown = false;
    let raf = 0;
    let last = 0;
    const pebble = pebbleRef.current;
    const dot = dotRef.current;

    // Runs only while the pebble is catching up with the pointer, then stops
    const tick = (now) => {
      const dt = last ? Math.min(now - last, 64) : 16.7;
      last = now;
      const k = reduce ? 1 : 1 - Math.pow(1 - FOLLOW, dt / 16.7);
      x += (mx - x) * k;
      y += (my - y) * k;
      pebble.classList.toggle('hover', overControl);
      pebble.classList.toggle('down', down);
      pebble.style.transform = `translate3d(${x}px, ${y}px, 0)${down ? ' scale(0.9)' : ''}`;
      const settled = Math.abs(mx - x) < 0.1 && Math.abs(my - y) < 0.1;
      if (settled) {
        raf = 0;
        last = 0;
      } else {
        raf = requestAnimationFrame(tick);
      }
    };
    const wake = () => { if (!raf) raf = requestAnimationFrame(tick); };

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (x < -50) { x = mx; y = my; } // first move: appear in place, don't fly in
      // The dot tracks the pointer exactly, with no frame of delay
      dot.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
      const el = e.target.closest ? e.target.closest(INTERACTIVE) : null;
      overControl = !!el && !el.matches('input, textarea');
      if (!shown) { shown = true; setVisible(true); } // one render, not one per move
      wake();
    };
    const onDown = () => { down = true; wake(); };
    const onUp = () => { down = false; wake(); };
    const onLeave = () => { shown = false; setVisible(false); };

    document.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mousedown', onDown);
    document.addEventListener('mouseup', onUp);
    document.documentElement.addEventListener('mouseleave', onLeave);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('mouseup', onUp);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      document.documentElement.classList.remove('has-custom-cursor');
    };
  }, [finePointer]);

  if (!finePointer) return null;

  return (
    <>
      <HidePointer />
      <Pebble ref={pebbleRef} $visible={visible} aria-hidden="true" />
      <Dot ref={dotRef} $visible={visible} aria-hidden="true" />
    </>
  );
};

export default Cursor;
