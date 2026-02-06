export enum VMStatus {
  Running = 'Running',
  Stopped = 'Stopped',
  Upgrading = 'Upgrading',
}

export interface VM {
  id: string;
  name: string;
  type: string; // e.g., 'PostgreSQL Cluster', 'Nginx Frontend'
  status: VMStatus;
  pid: string; // Hypervisor PID, 'N/A' if stopped
  currentVersion: string;
  targetPid?: string; // For upgrades
  upgradeProgress?: number; // 0-100
  upgradeStep?: string;
  upgradeStepIndex?: number;
  totalUpgradeSteps?: number;
  timeRemaining?: string;
}

export interface StatItem {
  label: string;
  value: string | number;
  icon: string;
  iconColorClass?: string;
  trend?: {
    text: string;
    icon?: string;
    colorClass: string;
  };
}