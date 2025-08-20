// components/SectionWrapper.tsx
'use client';

import { useInView } from 'react-intersection-observer';
import { useEffect, ReactNode } from 'react';
import { useColor } from '@/hooks/ColorContext';

interface SectionWrapperProps {
  children: ReactNode;
  bgValue: string;
  id?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, bgValue, id }) => {
  const { updateColors } = useColor();
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView && bgValue) {
      updateColors(bgValue);
    }
  }, [inView, bgValue, updateColors]);

  // Extract URL from bgValue if it's a URL
  const isUrl = bgValue.startsWith('url');
  const urlMatch = isUrl ? bgValue.match(/url\(['"]?([^'")]+)['"]?\)/) : null;
  const bgImage = urlMatch ? urlMatch[1] : '';

  return (
    <section 
      ref={ref} 
      id={id}
      style={{ 
        background: isUrl 
          ? `url(${bgImage}) center/cover` 
          : bgValue
      }}
      className="min-h-screen w-full"
    >
      {children}
    </section>
  );
};

export default SectionWrapper;