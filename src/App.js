import React, { useEffect } from 'react';
import { GlobalStyle } from './globalstyles';
import { MotionStyle } from './motionStyles';
import NavBar from './components/Navbar';
import Cursor from './components/Cursor';
import Routing from './components/Routing';

const App = () => {
  useEffect(() => {
    const previousScrollRestoration =
      'scrollRestoration' in window.history ? window.history.scrollRestoration : null;

    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Ensure refresh lands at Hello/top instead of restoring previous section.
    const initialHash = window.location.hash;
    requestAnimationFrame(() => {
      if (initialHash && initialHash !== '#hello') {
        const target = document.querySelector(initialHash);
        if (target) {
          target.scrollIntoView({ behavior: 'auto', block: 'start' });
          return;
        }
      }
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    });

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.style.scrollBehavior = 'smooth';
    }

    // Reveal on scroll
    const revealEls = Array.from(document.querySelectorAll('.reveal'));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach((el) => io.observe(el));

    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    const iconLight = themeToggle?.querySelector('.theme-icon-light');
    const iconDark = themeToggle?.querySelector('.theme-icon-dark');

    const applyTheme = (theme) => {
      if (theme === 'dark') {
        html.setAttribute('data-theme', 'dark');
        if (iconLight) iconLight.style.display = 'none';
        if (iconDark) iconDark.style.display = 'block';
      } else {
        html.removeAttribute('data-theme');
        if (iconLight) iconLight.style.display = 'block';
        if (iconDark) iconDark.style.display = 'none';
      }
    };

    const savedTheme = localStorage.getItem('theme');
    const theme = savedTheme || 'dark';
    applyTheme(theme);

    const handleThemeToggle = () => {
      const currentTheme = html.getAttribute('data-theme');
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
      localStorage.setItem('theme', nextTheme);
    };

    if (themeToggle) {
      themeToggle.addEventListener('click', handleThemeToggle);
    }

    // Accent toggle
    const accentToggle = document.getElementById('accent-toggle');
    const applyAccent = (accent) => {
      if (accent === 'on') {
        html.setAttribute('data-accent', 'on');
      } else {
        html.removeAttribute('data-accent');
      }
    };

    const savedAccent = localStorage.getItem('accent') || 'off';
    applyAccent(savedAccent);

    const handleAccentToggle = () => {
      const next = html.getAttribute('data-accent') === 'on' ? 'off' : 'on';
      applyAccent(next);
      localStorage.setItem('accent', next);
    };

    if (accentToggle) {
      accentToggle.addEventListener('click', handleAccentToggle);
    }

    // Neumorphism dynamic shadows
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let rafId;

    const neuElements = document.querySelectorAll('.neu-sm, .neu-md, .neu-lg');
    const neuInsetElements = document.querySelectorAll('.neu-inset-sm, .neu-inset-md');
    const neuTextElements = document.querySelectorAll('.neu-emboss, .neu-emboss-soft');
    const shadowStates = new Map();

    neuElements.forEach((el) => {
      let factor = 5, blur1 = 10, blur2 = 10;
      if (el.classList.contains('neu-md')) { factor = 10; }
      if (el.classList.contains('neu-lg')) { factor = 10; blur1 = 15; blur2 = 15; }
      shadowStates.set(el, { currentLightX: -factor, currentLightY: -factor, currentDarkX: factor, currentDarkY: factor, targetLightX: -factor, targetLightY: -factor, targetDarkX: factor, targetDarkY: factor, factor, blur1, blur2, isText: false, isInset: false });
    });

    neuInsetElements.forEach((el) => {
      let factor = 5, blur1 = 10, blur2 = 10;
      if (el.classList.contains('neu-inset-md')) { factor = 10; blur1 = 20; blur2 = 20; }
      shadowStates.set(el, { currentLightX: -factor, currentLightY: -factor, currentDarkX: factor, currentDarkY: factor, targetLightX: -factor, targetLightY: -factor, targetDarkX: factor, targetDarkY: factor, factor, blur1, blur2, isText: false, isInset: true });
    });

    neuTextElements.forEach((el) => {
      let factor = 5, blur1 = 10, blur2 = 10;
      if (el.classList.contains('neu-emboss-soft')) { factor = 8; blur1 = 16; blur2 = 16; }
      shadowStates.set(el, { currentLightX: -factor, currentLightY: -factor, currentDarkX: factor, currentDarkY: factor, targetLightX: -factor, targetLightY: -factor, targetDarkX: factor, targetDarkY: factor, factor, blur1, blur2, isText: true, isInset: false });
    });

    const lerp = (start, end, f) => start + (end - start) * f;

    const allElements = [...neuElements, ...neuInsetElements, ...neuTextElements];
    let running = false;

    // The loop only runs while something moves: it starts on pointer, scroll
    // or resize, and stops once every visible shadow has settled.
    const wake = () => {
      if (!running) {
        running = true;
        rafId = requestAnimationFrame(updateNeumorphism);
      }
    };

    const trackMouseForNeumorphism = (e) => { mouseX = e.clientX; mouseY = e.clientY; wake(); };
    document.addEventListener('mousemove', trackMouseForNeumorphism);
    window.addEventListener('scroll', wake, { passive: true });
    window.addEventListener('resize', wake);

    const updateNeumorphism = () => {
      // Read every position first, then write, so layout is computed once per frame
      const viewH = window.innerHeight;
      const rects = allElements.map((el) => el.getBoundingClientRect());
      let moving = false;

      allElements.forEach((el, i) => {
        const rect = rects[i];
        // Skip hidden and off-screen elements
        if (!rect.width || rect.bottom < -100 || rect.top > viewH + 100) return;
        const elCenterX = rect.left + rect.width / 2;
        const elCenterY = rect.top + rect.height / 2;
        const deltaX = mouseX - elCenterX;
        const deltaY = mouseY - elCenterY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const maxDistance = 600;
        const minDistance = 150;
        let influence;
        if (distance < minDistance) {
          influence = 0.2 + (distance / minDistance) * 0.3;
        } else {
          influence = 0.5 + (1 - distance / maxDistance) * 0.5;
        }
        influence = Math.max(0.5, Math.min(1, influence));
        const state = shadowStates.get(el);
        if (!state) return;
        const { factor, blur1, blur2, isText, isInset } = state;
        if (distance > 0) {
          const normalizedX = deltaX / distance;
          const normalizedY = deltaY / distance;
          const strength = factor * influence * 1.5;
          state.targetLightX = normalizedX * strength;
          state.targetLightY = normalizedY * strength;
          state.targetDarkX = -normalizedX * strength;
          state.targetDarkY = -normalizedY * strength;
        }
        const lerpFactor = 0.15;
        const prevX = state.currentLightX;
        const prevY = state.currentLightY;
        state.currentLightX = lerp(state.currentLightX, state.targetLightX, lerpFactor);
        state.currentLightY = lerp(state.currentLightY, state.targetLightY, lerpFactor);
        state.currentDarkX = lerp(state.currentDarkX, state.targetDarkX, lerpFactor);
        state.currentDarkY = lerp(state.currentDarkY, state.targetDarkY, lerpFactor);
        // Settled: skip the style write, which would only trigger a repaint
        if (Math.abs(state.currentLightX - prevX) < 0.02 && Math.abs(state.currentLightY - prevY) < 0.02) return;
        moving = true;
        if (isText) {
          el.style.textShadow = `${state.currentLightX.toFixed(2)}px ${state.currentLightY.toFixed(2)}px ${blur1}px var(--shadowLight), ${state.currentDarkX.toFixed(2)}px ${state.currentDarkY.toFixed(2)}px ${blur2}px var(--shadowDark)`;
        } else if (isInset) {
          el.style.boxShadow = `inset ${state.currentLightX.toFixed(2)}px ${state.currentLightY.toFixed(2)}px ${blur1}px var(--shadowLight), inset ${state.currentDarkX.toFixed(2)}px ${state.currentDarkY.toFixed(2)}px ${blur2}px var(--shadowDark)`;
        } else {
          el.style.boxShadow = `${state.currentLightX.toFixed(2)}px ${state.currentLightY.toFixed(2)}px ${blur1}px var(--shadowLight), ${state.currentDarkX.toFixed(2)}px ${state.currentDarkY.toFixed(2)}px ${blur2}px var(--shadowDark)`;
        }
      });
      if (moving) {
        rafId = requestAnimationFrame(updateNeumorphism);
      } else {
        running = false;
      }
    };
    wake();

    // Nav scroll spy
    const sectionIds = ['hello', 'results', 'evidence', 'learning', 'contact'];
    const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

    const updateActiveNav = () => {
      const scrollPos = window.scrollY + 150;
      let active = null;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offsetTop <= scrollPos) {
          active = sections[i].id;
          break;
        }
      }
      if (active) {
        const navLinks = document.querySelectorAll('.nav-link[data-target]');
        navLinks.forEach(a => {
          a.classList.toggle('nav-active', a.dataset.target === active);
        });
      }
    };

    // At most one nav update per frame while scrolling
    let navQueued = false;
    const onScrollNav = () => {
      if (navQueued) return;
      navQueued = true;
      requestAnimationFrame(() => {
        navQueued = false;
        updateActiveNav();
      });
    };

    window.addEventListener('scroll', onScrollNav, { passive: true });
    updateActiveNav();

    return () => {
      if ('scrollRestoration' in window.history && previousScrollRestoration) {
        window.history.scrollRestoration = previousScrollRestoration;
      }
      io.disconnect();
      if (themeToggle) themeToggle.removeEventListener('click', handleThemeToggle);
      if (accentToggle) accentToggle.removeEventListener('click', handleAccentToggle);
      document.removeEventListener('mousemove', trackMouseForNeumorphism);
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', wake);
      window.removeEventListener('resize', wake);
      window.removeEventListener('scroll', onScrollNav);
    };
  }, []);

  return (
    <div id="App" className="App">
      <GlobalStyle />
      <MotionStyle />
      <NavBar />
      <Routing />
      <Cursor />
      {/* Chat launcher disabled for now */}
      <div className="bottom-fade" />
    </div>
  );
};

export default App;
