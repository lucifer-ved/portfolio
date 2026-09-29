import { useCallback, useLayoutEffect, useState } from 'react';

// Measures the selected button inside a group so a highlight can slide to it.
// `selector` finds the selected child (for example '[aria-pressed="true"]');
// `deps` should change whenever the selection or the set of buttons changes.
const useSlidingIndicator = (groupRef, selector, deps) => {
  const [box, setBox] = useState(null);

  const measure = useCallback(() => {
    const group = groupRef.current;
    const active = group && group.querySelector(selector);
    if (!active) {
      setBox(null);
      return;
    }
    setBox({
      left: active.offsetLeft,
      top: active.offsetTop,
      width: active.offsetWidth,
      height: active.offsetHeight
    });
  }, [groupRef, selector]);

  useLayoutEffect(() => {
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [measure, ...deps]);

  return box;
};

export default useSlidingIndicator;
