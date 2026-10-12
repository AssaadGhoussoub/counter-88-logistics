import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function RouteScroll() {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    if (hash) {
      let id = hash.slice(1);
      try { id = decodeURIComponent(id); } catch { /* A malformed URL fragment must not crash navigation. */ }
      document.getElementById(id)?.scrollIntoView({ behavior: 'instant' as ScrollBehavior, block: 'start' });
    } else window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname, hash, key]);
  return null;
}
