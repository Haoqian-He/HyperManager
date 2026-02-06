import React from 'react';
import { Icon } from './Icon';
import { StatItem } from '../types';

const stats: StatItem[] = [
  {
    label: "Total VMs",
    value: 24,
    icon: "layers",
    iconColorClass: "text-white",
    trend: {
      text: "2 added this week",
      icon: "arrow_upward",
      colorClass: "text-emerald-500"
    }
  },
  {
    label: "Active Nodes",
    value: 12,
    icon: "check_circle",
    iconColorClass: "text-emerald-500",
    trend: {
      text: "100% Uptime",
      colorClass: "text-emerald-500"
    }
  },
  {
    label: "Pending Upgrades",
    value: 4,
    icon: "published_with_changes",
    iconColorClass: "text-amber-500",
    trend: {
      text: "Action Required",
      icon: "warning",
      colorClass: "text-amber-500"
    }
  }
];

export const StatsGroup: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map((stat, idx) => (
        <div key={idx} className="bg-surface-dark border border-border-dark rounded-xl p-6 flex flex-col gap-1 shadow-sm relative overflow-hidden group">
          <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Icon name={stat.icon} className={`text-6xl ${stat.iconColorClass}`} />
          </div>
          <p className="text-text-secondary text-sm font-medium uppercase tracking-wider">{stat.label}</p>
          <p className="text-white text-3xl font-black tracking-tight">{stat.value}</p>
          
          {stat.trend && (
            <div className={`mt-2 flex items-center gap-1 text-xs font-medium ${stat.trend.colorClass}`}>
              {stat.trend.icon ? (
                <Icon name={stat.trend.icon} className="text-sm" />
              ) : (
                <span className="size-1.5 rounded-full bg-current"></span>
              )}
              <span>{stat.trend.text}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};