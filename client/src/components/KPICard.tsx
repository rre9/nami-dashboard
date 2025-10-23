import React, { memo } from 'react';
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type KPIColor = "blue" | "green" | "orange" | "purple" | "yellow";

export interface TrendData {
  value: number;
  isPositive: boolean;
  label: string;
}

export interface KPICardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  trend?: TrendData;
  color?: KPIColor;
  className?: string;
}

const COLOR_CONFIG = {
  blue: {
    card: "bg-white border-gray-200",
    trend: "text-blue-600",
    pill: "bg-blue-100 text-blue-700",
  },
  green: {
    card: "bg-white border-gray-200",
    trend: "text-green-600",
    pill: "bg-green-100 text-green-700",
  },
  orange: {
    card: "bg-white border-gray-200",
    trend: "text-orange-600",
    pill: "bg-orange-100 text-orange-700",
  },
  purple: {
    card: "bg-white border-gray-200",
    trend: "text-purple-600",
    pill: "bg-purple-100 text-purple-700",
  },
  yellow: {
    card: "bg-white border-gray-200",
    trend: "text-yellow-600",
    pill: "bg-yellow-100 text-yellow-700",
  },
} as const;

const KPICard = memo(function KPICard({
  title,
  value,
  subtitle,
  trend,
  color = "blue",
  className,
}: KPICardProps): React.JSX.Element {
  const colorConfig = COLOR_CONFIG[color];

  return (
    <div
      className={cn(
        "p-2 sm:p-3 rounded-lg border transition-all duration-200",
        "hover:shadow-md hover:scale-[1.02]",
        colorConfig.card,
        className
      )}
      role="article"
      aria-label={`KPI: ${title}`}
    >
      {/* Title */}
      <h3 className="text-xs font-medium text-gray-600 mb-1 truncate">
        {title}
      </h3>

      {/* Main Value */}
      <div className="mb-1">
        <p className="text-lg font-bold text-gray-900 truncate">
          {value}
        </p>
        {subtitle && (
          <span
            className={cn(
              "inline-block mt-1 px-1.5 py-0.5 rounded-full text-[10px] font-semibold",
              colorConfig.pill
            )}
          >
            {subtitle}
          </span>
        )}
      </div>

      {trend && (
        <div className="flex items-center gap-1 mt-2">
          {trend.isPositive ? (
            <TrendingUp 
              size={12} 
              className="text-green-600 flex-shrink-0" 
              aria-hidden="true"
            />
          ) : (
            <TrendingDown 
              size={12} 
              className="text-red-600 flex-shrink-0" 
              aria-hidden="true"
            />
          )}
          <span
            className={cn(
              "text-xs font-medium",
              trend.isPositive ? "text-green-600" : "text-red-600"
            )}
          >
            {trend.isPositive ? "↗" : "↘"} {Math.abs(trend.value)}%
          </span>
          <span className="text-[10px] text-gray-500 truncate">
            {trend.label}
          </span>
        </div>
      )}
    </div>
  );
});

export default KPICard;

