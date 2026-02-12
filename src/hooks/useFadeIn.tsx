import { useState, useEffect, useRef, ReactNode } from 'react';

export const useOnScreen = (ref: React.RefObject<Element>) => {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return isIntersecting;
};

interface FadeInSectionProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const FadeInSection = ({ children, className = "", style = {} }: FadeInSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);
  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={style}
    >
      {children}
    </div>
  );
};
