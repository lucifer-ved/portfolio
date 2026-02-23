import React, { useEffect } from 'react';
import { GlobalStyle } from './globalstyles';
import NavBar from './components/Navbar';
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

    // Custom cursor
    const cursor = document.querySelector('.custom-cursor');
    const interactiveElements = Array.from(document.querySelectorAll('a, button, [role="button"], input, textarea, label, summary'));

    if (cursor) {
      cursor.style.left = `${window.innerWidth / 2}px`;
      cursor.style.top = `${window.innerHeight / 2}px`;
    }

    const handleMouseMove = (e) => {
      if (!cursor) return;
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const onMouseDown = () => { if (cursor) cursor.classList.add('active'); };
    const onMouseUp = () => { if (cursor) cursor.classList.remove('active'); };

    const interactiveHandlers = [];

    if (cursor && window.matchMedia('(pointer: fine)').matches) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);

      interactiveElements.forEach((el) => {
        const enter = () => cursor.classList.add('hover');
        const leave = () => cursor.classList.remove('hover');
        el.addEventListener('mouseenter', enter);
        el.addEventListener('mouseleave', leave);
        interactiveHandlers.push({ el, enter, leave });
      });
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

    const trackMouseForNeumorphism = (e) => { mouseX = e.clientX; mouseY = e.clientY; };
    document.addEventListener('mousemove', trackMouseForNeumorphism);

    const updateNeumorphism = () => {
      const allElements = [...neuElements, ...neuInsetElements, ...neuTextElements];
      allElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
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
        state.currentLightX = lerp(state.currentLightX, state.targetLightX, lerpFactor);
        state.currentLightY = lerp(state.currentLightY, state.targetLightY, lerpFactor);
        state.currentDarkX = lerp(state.currentDarkX, state.targetDarkX, lerpFactor);
        state.currentDarkY = lerp(state.currentDarkY, state.targetDarkY, lerpFactor);
        if (isText) {
          el.style.textShadow = `${state.currentLightX.toFixed(2)}px ${state.currentLightY.toFixed(2)}px ${blur1}px var(--shadowLight), ${state.currentDarkX.toFixed(2)}px ${state.currentDarkY.toFixed(2)}px ${blur2}px var(--shadowDark)`;
        } else if (isInset) {
          el.style.boxShadow = `inset ${state.currentLightX.toFixed(2)}px ${state.currentLightY.toFixed(2)}px ${blur1}px var(--shadowLight), inset ${state.currentDarkX.toFixed(2)}px ${state.currentDarkY.toFixed(2)}px ${blur2}px var(--shadowDark)`;
        } else {
          el.style.boxShadow = `${state.currentLightX.toFixed(2)}px ${state.currentLightY.toFixed(2)}px ${blur1}px var(--shadowLight), ${state.currentDarkX.toFixed(2)}px ${state.currentDarkY.toFixed(2)}px ${blur2}px var(--shadowDark)`;
        }
      });
      rafId = requestAnimationFrame(updateNeumorphism);
    };
    rafId = requestAnimationFrame(updateNeumorphism);

    // Nav scroll spy
    const sectionIds = ['hello', 'results', 'evidence', 'contact'];
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

    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();

    return () => {
      if ('scrollRestoration' in window.history && previousScrollRestoration) {
        window.history.scrollRestoration = previousScrollRestoration;
      }
      io.disconnect();
      if (themeToggle) themeToggle.removeEventListener('click', handleThemeToggle);
      if (accentToggle) accentToggle.removeEventListener('click', handleAccentToggle);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', trackMouseForNeumorphism);
      interactiveHandlers.forEach(({ el, enter, leave }) => {
        el.removeEventListener('mouseenter', enter);
        el.removeEventListener('mouseleave', leave);
      });
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', updateActiveNav);
    };
  }, []);

  return (
    <div id="App" className="App">
      <GlobalStyle />
      <NavBar />
      <Routing />
      <div className="custom-cursor" />
      {/* Chat launcher disabled for now */}
      <div className="bottom-fade" />
    </div>
  );
};

export default App;
