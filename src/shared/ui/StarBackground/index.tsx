import { useMemo, type CSSProperties, useState, useEffect } from 'react';

interface StarProps {
  id: number;
  top: string;
  left: string;
  size: string;
  duration: string;
  delay: string;
}

export const StarBackground = () => {

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [])

  const count = isMobile ? 60 : 80

  const stars = useMemo<StarProps[]>(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,

      /* resize */
      size: isMobile
        ? `${Math.random() * 3 + 1}px`
        : `${Math.random() * 6 + 1}px`,
      duration: `${Math.random() * 3 + 2}s`,
      delay: `${Math.random() * 3}s`,
    }));
  }, [count, isMobile]);

  return (
    <div className="fixed inset-0 -z-10 bg-bgDarkBlack overflow-hidden pointer-events-none">

      {/* Background */}
      <div className="absolute inset-[-10%] md:inset-[-20%] animate-galaxy opacity-30 md:opacity-50 blur-2xl md:blur-[80px]" />

      {stars.map((star) => {

        /** 
         * Hybrid type: Standard CSS + Custom Variables (--). 
         * The '&' merges official properties with a "master key" for custom keys.
         */
        const starStyle: CSSProperties & { [key: string]: string | number } = {
          top: star.top,
          left: star.left,
          width: star.size,
          height: star.size,
          animationDelay: star.delay,
          '--star-duration': star.duration, // custom --var
        };

        return (
          <div
            key={star.id}
            className="absolute rounded-full bg-white blur-[1px] animate-twinkle"
            style={starStyle}
          />
        );
      })}
    </div>
  );
};
