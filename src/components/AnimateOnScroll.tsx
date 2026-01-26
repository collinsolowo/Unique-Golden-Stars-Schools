import { useEffect, useRef, type ReactNode } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface AnimateOnScrollProps {
  children: ReactNode;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'zoom-out' | 'flip-left' | 'flip-right';
  delay?: number;
  duration?: number;
  once?: boolean;
  className?: string;
  anchorPlacement?: 'top-bottom' | 'top-center' | 'top-top' | 'center-bottom' | 'center-center' | 'bottom-top' | 'bottom-center' | 'bottom-bottom';
}

export default function AnimateOnScroll({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 600,
  once = true,
  className = '',
  anchorPlacement = 'top-bottom',
}: AnimateOnScrollProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: duration,
      once: once,
      offset: 100,
      easing: 'ease-out',
      anchorPlacement: anchorPlacement,
    });

    // Refresh AOS to ensure new elements are detected
    AOS.refresh();

    return () => {
      // Clean up AOS on component unmount
      if (elementRef.current) {
        elementRef.current.removeAttribute('data-aos');
      }
    };
  }, [duration, once, anchorPlacement]);

  const getAosAnimation = () => {
    switch (animation) {
      case 'fade-up':
        return 'fade-up';
      case 'fade-down':
        return 'fade-down';
      case 'fade-left':
        return 'fade-left';
      case 'fade-right':
        return 'fade-right';
      case 'zoom-in':
        return 'zoom-in';
      case 'zoom-out':
        return 'zoom-out';
      case 'flip-left':
        return 'flip-left';
      case 'flip-right':
        return 'flip-right';
      default:
        return 'fade-up';
    }
  };

  return (
    <div
      ref={elementRef}
      data-aos={getAosAnimation()}
      data-aos-delay={delay}
      data-aos-duration={duration}
      className={className}
    >
      {children}
    </div>
  );
}

// Utility function to refresh AOS animations
export const refreshAOS = () => {
  if (typeof window !== 'undefined') {
    AOS.refresh();
  }
};

// Utility function to disable AOS (for reduced motion preference)
export const disableAOS = () => {
  if (typeof window !== 'undefined') {
    AOS.init({
      duration: 0,
      once: true,
      disable: true,
    });
  }
};
