import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  highlight?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface StatisticData {
  quarter: string;
  projects: number;
}

export interface RadarData {
  subject: string;
  A: number;
  fullMark: number;
}

export interface GrowthData {
  year: string;
  growth: number;
}
