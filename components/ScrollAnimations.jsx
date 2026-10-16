'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const revealTargets = [
  '[data-reveal]', '.inversify-page-hero .page-hero-content', '.index-chapter',
  '.studio-section-topline', '.studio-section-heading', '.studio-about-intro',
  '.studio-about-stage', '.studio-principles-intro', '.studio-faq-intro',
  '.studio-testimonial-heading', '.studio-contact-copy', '.studio-contact-form-wrap',
  '.project-jigsaw-cell', '.service-index-entry', '.blog-journal-entry',
  '.studio-work-card', '.studio-principle-row', '.studio-journal-lead',
  '.studio-journal-item', '.contact-info-panel', '.contact-form-panel',
  '.service-detail-root .container > *', '.project-detail-root .container > *',
  '.blog-detail-root .container > *', '.blog-article-root .container > *',
];

export default function ScrollAnimations() {
  const pathname = usePathname();
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let observer;
    let mutations;
    let active = true;
    const seen = new WeakSet();
    const selector = revealTargets.join(',');
    const clearMotion = () => {
      document.documentElement.classList.remove('motion-ready');
      document.querySelectorAll('.is-revealed').forEach((node) => node.classList.remove('is-revealed'));
    };
    clearMotion();
    if (reduced || !('IntersectionObserver' in window)) return undefined;
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
        if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) reveal(node);
        else observer.observe(node);
      });
    };
    observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      reveal(entry.target);
      observer.unobserve(entry.target);
    }), { rootMargin: '0px 0px -5% 0px', threshold: 0.08 });

    const start = window.setTimeout(() => {
      if (!active) return;
      register(document);
      mutations = new MutationObserver((records) => records.forEach((record) => {
        record.addedNodes.forEach((node) => { if (node.nodeType === Node.ELEMENT_NODE) register(node); });
      }));
      mutations.observe(document.querySelector('main') || document.body, { childList: true, subtree: true });
    }, 40);

    return () => {
      active = false;
      window.clearTimeout(start);
      observer?.disconnect();
      mutations?.disconnect();
      clearMotion();
    };
  }, [pathname]);
  return null;
}
