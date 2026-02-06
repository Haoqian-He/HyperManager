import React from 'react';
import { VM, VMStatus } from '../types';
import { Icon } from './Icon';

interface VMRowProps {
  vm: VM;
}

export const VMRow: React.FC<VMRowProps> = ({ vm }) => {
  const isUpgrading = vm.status === VMStatus.Upgrading;

  const renderStatusBadge = () => {
    switch (vm.status) {
      case VMStatus.Running:
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
            <span className="size-1.5 rounded-full bg-emerald-500"></span>
            Running
          </span>
        );
      case VMStatus.Upgrading:
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-500 border border-amber-500/20 animate-pulse">
            <Icon name="sync" className="text-sm animate-spin" />
            Upgrading
          </span>
        );
      case VMStatus.Stopped:
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-500/10 text-gray-400 border border-gray-500/20">
            <span className="size-1.5 rounded-full bg-gray-500"></span>
            Stopped
          </span>
        );
      default:
        return null;
    }
  };

  const renderIcon = () => {
     let iconName = 'dns';
     if (vm.type.includes('Database') || vm.type.includes('PostgreSQL')) iconName = 'database';
     if (vm.type.includes('Frontend') || vm.type.includes('Nginx')) iconName = 'public';
     if (vm.type.includes('Cache') || vm.type.includes('Redis')) iconName = 'memory';

     const iconBgClass = isUpgrading ? 'bg-primary/20 text-primary' : 'bg-border-dark text-text-secondary';

     return (
        <div className={`size-8 rounded ${iconBgClass} flex items-center justify-center`}>
            <Icon name={iconName} className="text-lg" />
        </div>
     )
  }

  // Row styling conditional
  const rowClasses = isUpgrading 
    ? 'bg-primary/5 border-l-4 border-l-primary relative' 
    : 'group hover:bg-white/[0.02] transition-colors border-l-4 border-l-transparent';

  return (
    <React.Fragment>
      <tr className={rowClasses}>
        {/* Name */}
        <td className="px-6 py-4">
          <div className="flex items-center gap-3">
            {renderIcon()}
            <div>
              <div className="text-white text-sm font-medium">{vm.name}</div>
              <div className="text-text-secondary text-xs">{vm.type}</div>
            </div>
          </div>
        </td>
        
        {/* Status */}
        <td className="px-6 py-4">
          {renderStatusBadge()}
        </td>
        
        {/* PID */}
        <td className="px-6 py-4">
          {isUpgrading && vm.targetPid ? (
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm text-text-secondary line-through opacity-50">{vm.pid}</span>
              <Icon name="arrow_right_alt" className="text-xs text-text-secondary" />
              <span className="font-mono text-sm text-white bg-primary/20 px-2 py-1 rounded border border-primary/30">{vm.targetPid}</span>
            </div>
          ) : (
             <span className={`font-mono text-sm ${vm.status === VMStatus.Stopped ? 'text-text-secondary opacity-50' : 'text-text-secondary bg-background-dark px-2 py-1 rounded border border-border-dark/50'}`}>
                {vm.pid}
             </span>
          )}
        </td>
        
        {/* Version */}
        <td className="px-6 py-4">
          <span className="text-sm text-white">{vm.currentVersion}</span>
        </td>
        
        {/* Actions */}
        <td className="px-6 py-4 text-right">
            {vm.status === VMStatus.Stopped ? (
                <button className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium text-text-secondary bg-white/5 cursor-not-allowed opacity-50" disabled>
                    <Icon name="block" className="text-base" />
                    Disabled
                </button>
            ) : isUpgrading ? (
                <button className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium text-text-secondary bg-transparent cursor-not-allowed opacity-50" disabled>
                    Processing...
                </button>
            ) : (
                <button className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors">
                    <Icon name="system_update_alt" className="text-base" />
                    Hot Upgrade
                </button>
            )}
        </td>
      </tr>
      
      {/* Expanded Progress Row */}
      {isUpgrading && (
        <tr className="bg-primary/5 border-l-4 border-l-primary">
          <td colSpan={5} className="px-6 pb-6 pt-0 border-none">
            <div className="flex flex-col gap-3 bg-background-dark/50 rounded-lg p-4 border border-primary/20">
              <div className="flex justify-between items-end">
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium text-white flex items-center gap-2">
                    <span className="size-2 rounded-full bg-primary animate-ping"></span>
                    {vm.upgradeStep}
                  </span>
                  <span className="text-xs text-text-secondary">Memory pages migrated: 8,420 / 12,500</span>
                </div>
                <span className="text-primary font-bold text-lg">{vm.upgradeProgress}%</span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-surface-dark rounded-full h-2.5 overflow-hidden">
                <div 
                  className="bg-primary h-2.5 rounded-full relative overflow-hidden transition-all duration-500 ease-out" 
                  style={{ width: `${vm.upgradeProgress}%` }}
                >
                  <div className="absolute inset-0 bg-white/20 w-full h-full animate-shimmer -translate-x-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)' }}></div>
                </div>
              </div>
              
              <div className="flex justify-between text-xs text-text-secondary font-mono">
                <span>Step {vm.upgradeStepIndex} of {vm.totalUpgradeSteps}</span>
                <span>Est. remaining: {vm.timeRemaining}</span>
              </div>
            </div>
          </td>
        </tr>
      )}
    </React.Fragment>
  );
};