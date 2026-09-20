'use client';

import React from 'react';
import { LayoutGrid, Users, MessageSquare, ChevronRight, ArrowRight } from 'lucide-react';

interface FeatureCard {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

const FEATURES: FeatureCard[] = [
  {
    icon: LayoutGrid,
    title: 'Professional services.',
    description: 'Get tailored architectural guidance from senior systems engineers on implementation, complex integrations, or high-throughput migrations.',
    linkText: 'View services',
    linkHref: '#cockpit',
  },
  {
    icon: Users,
    title: 'Securiti-certified experts.',
    description: 'Work with a validated AI governance architect specializing in Gartner AI TRiSM, NIST AI RMF, and inline LLM firewalls.',
    linkText: 'View certifications',
    linkHref: '#cockpit',
  },
  {
    icon: MessageSquare,
    title: 'Support & retainers.',
    description: 'Receive ongoing operational support, Inngest background queue monitoring, and prompt engineering audits with strict SLAs.',
    linkText: 'View plans',
    linkHref: '#records',
  },
];

export function StripeFeatureGrid({ onSelectCard }: { onSelectCard?: (href: string) => void }) {
  return (
    <section className="py-12 border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Two-Tone Section Headline */}
        <div className="max-w-3xl mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.02em] text-[var(--color-text-primary)]">
            Powering businesses of all sizes.{' '}
            <span className="text-[var(--color-text-secondary)] font-normal">
              Run your operations on a reliable architecture that adapts to your needs.
            </span>
          </h2>
        </div>

        {/* 3-Column Card Grid with Outline Icon Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  {/* Outline Micro-Icon Box */}
                  <div className="inline-flex items-center justify-center h-8 w-8 rounded-[4px] border border-[var(--color-border)] bg-[var(--color-surface)] text-[#533AFD] dark:text-[#7A68FF] shadow-2xs">
                    <Icon className="h-4 w-4" />
                  </div>

                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    <strong className="font-bold text-[var(--color-text-primary)] font-sans mr-1">
                      {feature.title}
                    </strong>
                    {feature.description}
                  </p>
                </div>

                <a
                  href={feature.linkHref}
                  onClick={(e) => {
                    if (onSelectCard) {
                      e.preventDefault();
                      onSelectCard(feature.linkHref);
                    }
                  }}
                  className="inline-flex items-center text-xs font-semibold text-[#533AFD] dark:text-[#7A68FF] hover:text-[#432DE0] transition-colors group"
                >
                  {feature.linkText}
                  <ChevronRight className="h-3.5 w-3.5 ml-0.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
