import React from 'react';
import { DollarSign, Terminal, Smartphone, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

// Type definitions
export interface ActionButton {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  bgColor: string;
  description?: string;
  disabled?: boolean;
}

export interface QuickActionsProps {
  className?: string;
  onActionClick?: (actionId: string) => void;
}

// Action configuration
const ACTIONS: ActionButton[] = [
  {
    id: "settlement",
    label: "Request Settlement",
    icon: DollarSign,
    bgColor: "bg-green-500",
    description: "Request payment settlement",
  },
  {
    id: "terminal",
    label: "Request Terminal",
    icon: Terminal,
    bgColor: "bg-purple-600",
    description: "Request new payment terminal",
  },
  {
    id: "softpos",
    label: "Request SoftPOS",
    icon: Smartphone,
    bgColor: "bg-blue-500",
    description: "Request SoftPOS solution",
  },
  {
    id: "custom",
    label: "Custom Request",
    icon: MessageSquare,
    bgColor: "bg-yellow-500",
    description: "Submit custom request",
  },
] as const;

export default function QuickActions({ 
  className, 
  onActionClick 
}: QuickActionsProps): React.JSX.Element {
  const handleActionClick = (actionId: string) => {
    onActionClick?.(actionId);
    console.log(`Action clicked: ${actionId}`);
  };

  return (
    <section 
      className={cn(
        "bg-white rounded-lg border border-gray-200 p-3 sm:p-4 md:p-6",
        className
      )}
      aria-label="Quick Actions"
    >
      <header className="mb-3 sm:mb-4">
        <h2 className="text-base sm:text-lg font-bold text-gray-900">
          Quick Actions
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          Common merchant operations and requests
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {ACTIONS.map((action) => (
          <button
            key={action.id}
            onClick={() => handleActionClick(action.id)}
            disabled={action.disabled}
            className={cn(
              "flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg border border-gray-200",
              "transition-all duration-200 min-h-[60px] sm:min-h-[70px]",
              "bg-white hover:bg-gray-50 hover:shadow-md hover:scale-[1.02]",
              "focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2",
              "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
              action.disabled && "cursor-not-allowed"
            )}
            aria-label={`${action.label}${action.description ? ` - ${action.description}` : ''}`}
            title={action.description}
          >
            <div 
              className={cn(
                "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0",
                action.bgColor
              )}
            >
              <action.icon className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold text-xs sm:text-sm text-left text-gray-900">
              {action.label}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

