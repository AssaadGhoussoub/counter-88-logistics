import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function RouteScroll() {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    let frame = 0;
    let cancelled = false;
    const align = () => {
      if (cancelled) return;
      // Radix restores focus and body scrolling when the mobile menu finishes closing.
      if (document.body.hasAttribute('data-scroll-locked')) {
        frame = requestAnimationFrame(align);
        return;
      }
      if (!hash) {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
        return;
      }
      let id = hash.slice(1);
      try { id = decodeURIComponent(id); } catch { /* Ignore invalid escapes. */ }
      const section = document.getElementById(id);
      if (!section) return;
      const nav = document.querySelector<HTMLElement>('nav[aria-label="Main navigation"]');
      const row = nav?.firstElementChild;
      const rowHeight = row?.getBoundingClientRect().height ?? 0;
      const logoHeight = nav?.querySelector('img')?.getBoundingClientRect().height ?? 0;
      // Use the header's final scrolled height, including the logo overhang.
      // Its initial padding animates away once scrolling starts.
      const headerHeight = rowHeight + Math.max(0, (logoHeight - rowHeight) / 2);
      const padding = Number.parseFloat(getComputedStyle(section).paddingTop) || 0;
      const top = section.getBoundingClientRect().top + window.scrollY + padding - headerHeight - 16;
      window.scrollTo({ top: Math.max(0, top), left: 0, behavior: 'instant' as ScrollBehavior });
    };
    frame = requestAnimationFrame(align);
    const stop = () => { cancelled = true; cancelAnimationFrame(frame); };
    window.addEventListener('wheel', stop, { once: true, passive: true });
    window.addEventListener('touchstart', stop, { once: true, passive: true });
    return () => {
      stop();
      window.removeEventListener('wheel', stop);
      window.removeEventListener('touchstart', stop);
    };
  }, [pathname, hash, key]);
  return null;
}
