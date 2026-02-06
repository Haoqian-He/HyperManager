import React from 'react';
import { Icon } from './Icon';
import { VM, VMStatus } from '../types';
import { VMRow } from './VMRow';

const mockVMs: VM[] = [
  {
    id: '1',
    name: 'db-prod-01',
    type: 'PostgreSQL Cluster',
    status: VMStatus.Running,
    pid: '10443',
    currentVersion: 'v1.2.4',
  },
  {
    id: '2',
    name: 'web-server-04',
    type: 'Nginx Frontend',
    status: VMStatus.Upgrading,
    pid: '11202',
    targetPid: '11203',
    currentVersion: 'v1.2.4',
    upgradeProgress: 65,
    upgradeStep: 'Transferring process state...',
    upgradeStepIndex: 3,
    totalUpgradeSteps: 5,
    timeRemaining: '4s',
  },
  {
    id: '3',
    name: 'cache-redis-02',
    type: 'Redis Cache',
    status: VMStatus.Stopped,
    pid: 'N/A',
    currentVersion: 'v1.2.4',
  },
  {
    id: '4',
    name: 'app-worker-09',
    type: 'Background Worker',
    status: VMStatus.Running,
    pid: '10551',
    currentVersion: 'v1.2.4',
  },
];

export const VMInventory: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* Table Header / Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h3 className="text-white text-lg font-bold flex items-center gap-2">
          <Icon name="dns" className="text-primary" />
          Virtual Machine Inventory
        </h3>
        <div className="flex items-center bg-surface-dark border border-border-dark rounded-lg p-1 w-full sm:w-auto">
          <Icon name="search" className="text-text-secondary ml-2 text-[20px]" />
          <input 
            type="text" 
            placeholder="Search by name or PID..." 
            className="bg-transparent border-none text-white text-sm focus:ring-0 placeholder-text-secondary/50 w-full sm:w-64"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-surface-dark border border-border-dark rounded-xl overflow-hidden shadow-xl shadow-black/20 overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="bg-[#0f141e] border-b border-border-dark">
              <th className="px-6 py-4 text-xs font-semibold text-text-secondary uppercase tracking-wider w-1/4">VM Name</th>
              <th className="px-6 py-4 text-xs font-semibold text-text-secondary uppercase tracking-wider w-40">Status</th>
              <th className="px-6 py-4 text-xs font-semibold text-text-secondary uppercase tracking-wider w-48">Hypervisor PID</th>
              <th className="px-6 py-4 text-xs font-semibold text-text-secondary uppercase tracking-wider w-48">Current Version</th>
              <th className="px-6 py-4 text-xs font-semibold text-text-secondary uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-dark">
            {mockVMs.map((vm) => (
              <VMRow key={vm.id} vm={vm} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-2 text-sm text-text-secondary">
        <p>Showing 1-4 of 24 items</p>
        <div className="flex gap-2">
          <button className="px-3 py-1 rounded border border-border-dark hover:bg-surface-dark disabled:opacity-50 transition-colors">Previous</button>
          <button className="px-3 py-1 rounded border border-border-dark hover:bg-surface-dark transition-colors">Next</button>
        </div>
      </div>
    </div>
  );
};