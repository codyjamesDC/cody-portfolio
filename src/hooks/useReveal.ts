import { useEffect, useRef } from 'react';

/**
 * Attaches an IntersectionObserver to all `.reveal` children of the
 * returned ref, toggling the `.visible` class when they enter the viewport.
 *
 * Usage:
 *   const sectionRef = useReveal();
 *   return <section ref={sectionRef}> ... <div className="reveal"> ... </div> </section>
 */
export function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Unobserve after revealing so it won't re-trigger
            observer.unobserve(entry.target);
          }
        }),
      { threshold }
    );

    const items = ref.current?.querySelectorAll('.reveal');
    items?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
