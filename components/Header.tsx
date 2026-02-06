import React from 'react';
import { Icon } from './Icon';

export const Header: React.FC = () => {
  return (
    <header className="h-20 flex-none border-b border-border-dark bg-background-dark/80 backdrop-blur-md px-8 flex items-center justify-between z-20 sticky top-0">
      <div className="flex flex-col">
        <h2 className="text-white text-xl font-bold tracking-tight">Hypervisor Status</h2>
        <p className="text-text-secondary text-sm hidden sm:block">Manage virtual machines and apply hot-patches without downtime.</p>
      </div>
      <div className="flex items-center gap-4">
        <button className="relative group overflow-hidden bg-surface-dark hover:bg-border-dark text-white text-sm font-semibold h-10 px-4 rounded-lg border border-border-dark flex items-center gap-2 transition-all">
          <Icon name="history" className="text-[20px]" />
          <span>Patch History</span>
        </button>
        <button className="bg-primary hover:bg-primary-hover text-white text-sm font-bold h-10 px-5 rounded-lg shadow-lg shadow-primary/25 flex items-center gap-2 transition-all transform active:scale-95">
          <Icon name="cloud_upload" className="text-[20px]" />
          <span>Upload New RPM</span>
        </button>
      </div>
    </header>
  );
};