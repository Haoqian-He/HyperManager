import React from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { StatsGroup } from './components/StatsGroup';
import { VMInventory } from './components/VMInventory';

export default function App() {
  return (
    <div className="flex h-full w-full bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-hidden">
      {/* Sidebar - Hidden on mobile, flex on md+ */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        <Header />
        
        {/* Scrollable Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-8 pb-10">
            <StatsGroup />
            <VMInventory />
          </div>
        </div>
      </main>
    </div>
  );
}