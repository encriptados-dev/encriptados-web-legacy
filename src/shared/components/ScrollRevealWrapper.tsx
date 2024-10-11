import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealWrapperProps {
  children: React.ReactNode;
}

const ScrollRevealWrapper: React.FC<ScrollRevealWrapperProps> = ({
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (elementRef.current) {
              observer.unobserve(elementRef.current);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`scroll-reveal-wrapper ${isVisible ? "visible" : ""}`}
    >
      {children}
    </div>
  );
};

export default ScrollRevealWrapper;
