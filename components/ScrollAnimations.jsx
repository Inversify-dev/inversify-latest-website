'use client';
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const revealTargets = [
  '[data-reveal]',
  '.inversify-page-hero .page-hero-content',
  '.index-chapter',
  '.studio-section-topline',
  '.studio-section-heading',
  '.studio-about-intro',
  '.studio-about-stage',
  '.studio-principles-intro',
  '.studio-faq-intro',
  '.studio-testimonial-heading',
  '.project-jigsaw-cell',
  '.project-jigsaw-tile',
  '.service-index-entry',
  '.blog-journal-entry',
  '.studio-work-card',
  '.studio-principle-row',
  '.studio-journal-lead',
  '.studio-journal-item',
  '.service-block',
  '.feature-block',
  '.pricing-block',
  '.testimonial-block',
  '.news-block',
  '.faq-block',
  '.funfact-box',
  '.studio-hero-bottom',
  '.hero-image-caption',
  '.studio-hero-footer',
  '.service-detail-root .container > *',
  '.project-detail-root .container > *',
  '.blog-detail-root .container > *',
  '.blog-article-root .container > *',
];

export default function ScrollAnimations() {
  const pathname = usePathname();
  const progressBarRef = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let observer;
    let mutations;
    let active = true;
    let ticking = false;
    const seen = new WeakSet();
    const selector = revealTargets.join(',');

    // Scroll progress handler
    const updateProgress = () => {
      if (!progressBarRef.current) return;
      const scrollY = window.scrollY || window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(Math.max(scrollY / docHeight, 0), 1) : 0;
      progressBarRef.current.style.transform = `scaleX(${progress})`;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateProgress();

    const clearMotion = () => {
      document.documentElement.classList.remove('motion-ready');
      document.body?.classList.remove('motion-ready');
      document.querySelectorAll('.is-revealed').forEach((node) => node.classList.remove('is-revealed'));
    };
    clearMotion();

    if (pathname === '/contact' || reduced || !('IntersectionObserver' in window)) {
      document.documentElement.classList.remove('motion-ready');
      document.body?.classList.remove('motion-ready');
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }

    document.documentElement.classList.add('motion-ready');

    const reveal = (node) => {
      if (!active || !node?.isConnected) return;
      node.classList.add('is-revealed');
      seen.add(node);
    };

    const register = (root) => {
      if (!root) return;
      const candidates = [];
      if (root.nodeType === Node.ELEMENT_NODE && root.matches?.(selector)) candidates.push(root);
      root.querySelectorAll?.(selector).forEach((node) => candidates.push(node));
      candidates.forEach((node) => {
        if (seen.has(node) || node.classList.contains('is-revealed')) return;
        const rect = node.getBoundingClientRect();
        if (rect.top < window.innerHeight + 80 && rect.bottom > -80) reveal(node);
        else observer.observe(node);
      });
    };

    observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          reveal(entry.target);
          observer.unobserve(entry.target);
        }),
      { rootMargin: '0px 0px 120px 0px', threshold: 0.01 }
    );

    const start = window.setTimeout(() => {
      if (!active) return;
      register(document);
      mutations = new MutationObserver((records) =>
        records.forEach((record) => {
          record.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) register(node);
          });
        })
      );
      mutations.observe(document.querySelector('main') || document.body, { childList: true, subtree: true });
    }, 40);

    return () => {
      active = false;
      window.removeEventListener('scroll', handleScroll);
      window.clearTimeout(start);
      observer?.disconnect();
      mutations?.disconnect();
      clearMotion();
    };
  }, [pathname]);

  return <div id="site-scroll-progress" ref={progressBarRef} aria-hidden="true" />;
}
