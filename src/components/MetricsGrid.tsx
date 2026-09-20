'use client';

import React, { useState, useEffect } from 'react';
import {
  Activity,
  ShieldCheck,
  Cpu,
  ArrowUpRight,
  Zap,
  CheckCircle2,
  Radio,
  Clock,
} from 'lucide-react';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import { Badge } from '@/components/ui/badge';
import { siteConfig } from '@/config/site';

// Micro sparklines for cards
const cardSparklines = [
  [
    { tick: '1', v: 420 },
    { tick: '2', v: 450 },
    { tick: '3', v: 440 },
    { tick: '4', v: 480 },
    { tick: '5', v: 510 },
    { tick: '6', v: 530 },
    { tick: '7', v: 520 },
    { tick: '8', v: 550 },
  ],
  [
    { tick: '1', v: 99.7 },
    { tick: '2', v: 100 },
    { tick: '3', v: 100 },
    { tick: '4', v: 99.8 },
    { tick: '5', v: 100 },
    { tick: '6', v: 100 },
    { tick: '7', v: 99.9 },
    { tick: '8', v: 100 },
  ],
  [
    { tick: '1', v: 18.2 },
    { tick: '2', v: 16.5 },
    { tick: '3', v: 15.1 },
    { tick: '4', v: 14.8 },
    { tick: '5', v: 14.2 },
    { tick: '6', v: 13.9 },
    { tick: '7', v: 13.6 },
    { tick: '8', v: 13.2 },
  ],
];

const telemetryStream = [
  { time: '09:00', ops: 3820, latency: 14.1 },
  { time: '10:00', ops: 4210, latency: 13.8 },
  { time: '11:00', ops: 5120, latency: 14.6 },
  { time: '12:00', ops: 5040, latency: 14.2 },
  { time: '13:00', ops: 5690, latency: 13.9 },
  { time: '14:00', ops: 6240, latency: 13.5 },
  { time: '15:00', ops: 5910, latency: 13.8 },
  { time: '16:00', ops: 6450, latency: 13.2 },
  { time: '17:00', ops: 6180, latency: 13.6 },
];

export function MetricsGrid() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const icons = [Activity, ShieldCheck, Cpu];
  const badgeStyles = [
    'bg-[#533AFD]/10 text-[#533AFD] dark:bg-[#7A68FF]/20 dark:text-[#7A68FF] border-[#533AFD]/20',
    'bg-emerald-50 dark:bg-emerald-950/40 text-[#057A55] dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
    'bg-teal-50 dark:bg-teal-950/40 text-teal-800 dark:text-teal-300 border-teal-200 dark:border-teal-800',
  ];

  return (
    <div className="w-full space-y-4">
      {/* 3 High-Density KPI Cards WITH EMBEDDED STRIPE MICRO-SPARKLINES */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
        {siteConfig.metrics.map((metric, idx) => {
          const Icon = icons[idx % icons.length];
          const badgeStyle = badgeStyles[idx % badgeStyles.length];
          const sparklineData = cardSparklines[idx % cardSparklines.length];

          return (
            <div
              key={metric.id}
              className="rounded-[6px] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between overflow-hidden"
            >
              <div className="p-4 pb-2 flex flex-row items-center justify-between space-y-0">
                <div className="space-y-0.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-secondary)] font-mono">
                    {metric.title}
                  </span>
                </div>
                <span
                  className={`inline-flex items-center rounded-[4px] px-2 py-0.5 text-[10px] font-mono font-semibold border ${badgeStyle} shrink-0`}
                >
                  <Icon className="h-3 w-3 mr-1 shrink-0" />
                  {metric.badge}
                </span>
              </div>
              <div className="p-4 pt-1 space-y-3">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-[var(--color-text-primary)]">
                    {metric.value}
                  </span>
                  <span className="inline-flex items-center text-xs font-semibold text-[#533AFD] dark:text-[#7A68FF] font-mono">
                    <ArrowUpRight className="h-3 w-3 mr-0.5 shrink-0" />
                    {metric.change}
                  </span>
                </div>

                {/* Embedded Micro Chart */}
                <div className="h-12 w-full pt-1">
                  {mounted && (
                    <ResponsiveContainer width="100%" height="100%">
                      {idx === 1 ? (
                        <BarChart data={sparklineData} margin={{ top: 2, right: 2, left: 2, bottom: 0 }}>
                          <Tooltip
                            content={({ active, payload }) => {
                              if (active && payload && payload.length) {
                                return (
                                  <div className="rounded-[4px] bg-[var(--color-surface)] border border-[var(--color-border)] px-2 py-0.5 text-[10px] font-mono shadow-xs text-[var(--color-text-primary)]">
                                    {payload[0].value}%
                                  </div>
                                );
                              }
                              return null;
                            }}
                          />
                          <Bar dataKey="v" fill="#057A55" radius={[2, 2, 0, 0]} />
                        </BarChart>
                      ) : (
                        <AreaChart data={sparklineData} margin={{ top: 2, right: 2, left: 2, bottom: 0 }}>
                          <defs>
                            <linearGradient id={`sparkGrad_${idx}`} x1="0" y1="0" x2="0" y2="1">
                              <stop
                                offset="0%"
                                stopColor={idx === 0 ? '#533AFD' : '#0d9488'}
                                stopOpacity={0.35}
                              />
                              <stop
                                offset="100%"
                                stopColor={idx === 0 ? '#533AFD' : '#0d9488'}
                                stopOpacity={0.0}
                              />
                            </linearGradient>
                          </defs>
                          <Tooltip
                            content={({ active, payload }) => {
                              if (active && payload && payload.length) {
                                return (
                                  <div className="rounded-[4px] bg-[var(--color-surface)] border border-[var(--color-border)] px-2 py-0.5 text-[10px] font-mono shadow-xs text-[var(--color-text-primary)]">
                                    {payload[0].value}
                                  </div>
                                );
                              }
                              return null;
                            }}
                          />
                          <Area
                            type="monotone"
                            dataKey="v"
                            stroke={idx === 0 ? '#533AFD' : '#0d9488'}
                            strokeWidth={1.75}
                            fill={`url(#sparkGrad_${idx})`}
                          />
                        </AreaChart>
                      )}
                    </ResponsiveContainer>
                  )}
                </div>

                <p className="text-[11px] text-[var(--color-text-muted)] font-mono border-t border-[var(--color-border)]/70 pt-2">
                  {metric.subtext}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Streamlined Ingestion & Latency Telemetry Chart */}
      <div className="rounded-[6px] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-2xs p-4 sm:p-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold tracking-tight text-[var(--color-text-primary)]">
                Telemetry & Throughput Engine
              </span>
              <span className="rounded-[4px] bg-[#533AFD] text-white px-2 py-0.5 text-[10px] font-mono font-semibold">
                Live Stream
              </span>
            </div>
            <p className="text-xs text-[var(--color-text-secondary)] mt-0.5">
              Sub-50ms pipeline processing with automated zero-drop backpressure
            </p>
          </div>
          <div className="flex items-center gap-3 text-xs font-mono text-[var(--color-text-secondary)]">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#533AFD]"></span>
              Ops / hr
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#057A55]"></span>
              P99 Latency (13.5ms)
            </span>
          </div>
        </div>

        <div className="h-44 sm:h-52 w-full">
          {mounted && (
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={telemetryStream} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorOps" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#533AFD" stopOpacity={0.25} />
                    <stop offset="95%" stopColor="#533AFD" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="time"
                  stroke="#94a3b8"
                  fontSize={11}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#94a3b8"
                  fontSize={11}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(val) => `${val / 1000}k`}
                />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="rounded-[4px] border border-[var(--color-border)] bg-[var(--color-surface)] p-2.5 shadow-md text-xs font-mono space-y-1">
                          <p className="font-bold text-[var(--color-text-primary)]">{payload[0].payload.time}</p>
                          <p className="text-[#533AFD] dark:text-[#7A68FF] flex items-center justify-between gap-3">
                            <span>Volume:</span>
                            <span className="font-bold">{payload[0].value?.toLocaleString()} ops</span>
                          </p>
                          <p className="text-[#057A55] dark:text-emerald-400 flex items-center justify-between gap-3">
                            <span>P99:</span>
                            <span className="font-bold">{payload[0].payload.latency}ms</span>
                          </p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="ops"
                  stroke="#533AFD"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorOps)"
                />
              </AreaChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    </div>
  );
}
