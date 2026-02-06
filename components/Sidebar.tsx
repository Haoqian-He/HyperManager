import React from 'react';
import { Icon } from './Icon';

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-72 flex-none bg-[#0b0f17] border-r border-border-dark flex flex-col justify-between hidden md:flex">
      <div className="flex flex-col p-6 gap-8">
        {/* Brand / Cluster Info */}
        <div className="flex gap-4 items-center">
          <div className="bg-gradient-to-br from-primary to-blue-400 aspect-square rounded-xl size-12 flex items-center justify-center shadow-lg shadow-blue-900/20">
            <Icon name="hub" className="text-white text-2xl" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-white text-base font-bold leading-tight tracking-tight">HyperManager</h1>
            <p className="text-text-secondary text-xs font-medium">Cluster Alpha • US-East-1</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2">
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-secondary hover:bg-surface-dark hover:text-white transition-colors group">
            <Icon name="dashboard" className="text-2xl group-hover:text-primary transition-colors" />
            <span className="text-sm font-medium">Dashboard</span>
          </a>
          
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary border border-primary/20 shadow-[0_0_15px_rgba(19,91,236,0.15)]">
            <Icon name="dns" className="text-2xl fill-1" />
            <span className="text-sm font-bold">VM Inventory</span>
          </a>
          
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-secondary hover:bg-surface-dark hover:text-white transition-colors group">
            <Icon name="description" className="text-2xl group-hover:text-primary transition-colors" />
            <span className="text-sm font-medium">System Logs</span>
          </a>
          
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-secondary hover:bg-surface-dark hover:text-white transition-colors group">
            <Icon name="monitoring" className="text-2xl group-hover:text-primary transition-colors" />
            <span className="text-sm font-medium">Performance</span>
          </a>
        </nav>
      </div>

      {/* Footer / Settings */}
      <div className="p-6 border-t border-border-dark">
        <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-secondary hover:bg-surface-dark hover:text-white transition-colors group mb-2">
          <Icon name="settings" className="text-2xl group-hover:text-gray-400 transition-colors" />
          <span className="text-sm font-medium">Settings</span>
        </a>
        <div className="flex items-center gap-3 px-4 py-2 mt-4">
          <div className="size-2 rounded-full bg-emerald-500 animate-pulse"></div>
          <span className="text-xs text-emerald-500 font-mono font-medium">SYSTEM OPERATIONAL</span>
        </div>
      </div>
    </aside>
  );
};