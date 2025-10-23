import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Bell, Calendar, Filter, Download } from "lucide-react";
import { cn } from "@/lib/utils";

// Type definitions
export interface HeaderProps {
  className?: string;
  onDateRangeChange?: (range: string) => void;
  onBranchFilterChange?: (filter: string) => void;
  onDownloadClick?: () => void;
}

// Configuration
const DATE_RANGE_OPTIONS = [
  { value: "7d", label: "Last 7 Days" },
  { value: "30d", label: "Last 30 Days" },
  { value: "90d", label: "Last 90 Days" },
  { value: "1y", label: "Last Year" },
];

const BRANCH_FILTER_OPTIONS = [
  { value: "all", label: "All Branches" },
  { value: "main", label: "Main Branch" },
  { value: "secondary", label: "Secondary Branches" },
];

export default function Header({
  className,
  onDateRangeChange,
  onBranchFilterChange,
  onDownloadClick,
}: HeaderProps): React.JSX.Element {
  const [selectedDateRange, setSelectedDateRange] = useState("30d");
  const [selectedBranchFilter, setSelectedBranchFilter] = useState("all");
  const [isLanguageArabic, setIsLanguageArabic] = useState(true);

  const handleDateRangeChange = (range: string) => {
    setSelectedDateRange(range);
    onDateRangeChange?.(range);
  };

  const handleBranchFilterChange = (filter: string) => {
    setSelectedBranchFilter(filter);
    onBranchFilterChange?.(filter);
  };

  const handleDownloadClick = () => {
    onDownloadClick?.();
    console.log("Download summary requested");
  };

  const toggleLanguage = () => {
    setIsLanguageArabic(!isLanguageArabic);
  };

  return (
    <header className={cn("bg-white border-b border-gray-200", className)}>
      {/* Top Navigation Bar */}
      <div className="px-3 sm:px-6 py-2 flex items-center justify-end">
        <nav className="flex items-center gap-2 sm:gap-4" role="navigation">
          {/* Company Selector - Desktop Only */}
          <div className="hidden md:flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors">
            <span className="text-sm font-medium text-gray-700">TechCorp Ltd.</span>
            <ChevronDown size={18} className="text-gray-500" />
          </div>

          {/* Language Toggle - Desktop Only */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors"
              aria-label={`Switch to ${isLanguageArabic ? 'English' : 'Arabic'}`}
            >
              <div className="w-8 h-4 bg-gray-300 rounded-full relative">
                <div 
                  className={cn(
                    "w-3 h-3 bg-white rounded-full absolute top-0.5 shadow-sm transition-transform duration-200",
                    isLanguageArabic ? "right-0.5" : "left-0.5"
                  )}
                />
              </div>
              <span className="text-sm font-medium text-gray-700">
                {isLanguageArabic ? 'العربية' : 'English'}
              </span>
            </button>
          </div>

          {/* Help Button */}
          <button 
            className="hidden sm:block p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Help and Support"
          >
            <HelpCircle size={20} className="text-gray-600" />
          </button>

          {/* Notifications Button */}
          <button 
            className="hidden sm:block p-2 hover:bg-gray-100 rounded-lg transition-colors relative"
            aria-label="Notifications"
          >
            <Bell size={20} className="text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-purple-500 rounded-full" />
          </button>
        </nav>
      </div>

      {/* Main Header Content */}
      <div className="px-3 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        {/* Page Title */}
        <div>
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 ml-16 md:ml-0">
            Merchant Overview
          </h1>
        
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1 sm:gap-2 md:gap-4 flex-wrap justify-end min-w-0">
          {/* Date Range Filter */}
          <div className="hidden md:flex items-center gap-2">
            <Calendar className="w-4 h-4 text-gray-700" />
            <select
              value={selectedDateRange}
              onChange={(e) => handleDateRangeChange(e.target.value)}
              className="px-3 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              aria-label="Select date range"
            >
              {DATE_RANGE_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Branch Filter */}
          <div className="hidden md:flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-700" />
            <select
              value={selectedBranchFilter}
              onChange={(e) => handleBranchFilterChange(e.target.value)}
              className="px-3 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              aria-label="Select branch filter"
            >
              {BRANCH_FILTER_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Download Button */}
          <button 
            onClick={handleDownloadClick}
            className="flex items-center gap-2 px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            aria-label="Download summary report"
          >
            <Download className="w-4 h-4" />
            <span className="hidden md:inline">Download Summary</span>
            <span className="md:hidden">Download</span>
          </button>
        </div>
      </div>
    </header>
  );
}