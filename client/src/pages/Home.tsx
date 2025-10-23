import React, { Suspense, lazy } from 'react';
import DashboardLayout from "@/components/DashboardLayout";
import Header from "@/components/Header";
import KPICard from "@/components/KPICard";
import QuickActions from "@/components/QuickActions";
const DailyTransactionChart = lazy(() => import("@/components/DailyTransactionChart"));
const RefundVsSalesChart = lazy(() => import("@/components/RefundVsSalesChart"));
const BranchPerformanceChart = lazy(() => import("@/components/BranchPerformanceChart"));
const TerminalUptimeChart = lazy(() => import("@/components/TerminalUptimeChart"));
const TopBranches = lazy(() => import("@/components/TopBranches"));
const LatestTransactions = lazy(() => import("@/components/LatestTransactions"));

const KPI_DATA = [
  {
    id: 'total-volume',
    title: "Total Transaction Volume",
    value: "SAR 1,234,567",
    subtitle: "Last 30 days",
    trend: { value: 12.5, isPositive: true, label: "vs last month" },
    color: "blue" as const,
  },
  {
    id: 'approved-transactions',
    title: "Approved Transactions",
    value: "15,842",
    subtitle: "This month",
    trend: { value: 8.2, isPositive: true, label: "increase" },
    color: "green" as const,
  },
  {
    id: 'declined-transactions',
    title: "Declined Transactions",
    value: "234",
    subtitle: "This month",
    trend: { value: 2.1, isPositive: false, label: "decrease" },
    color: "orange" as const,
  },
  {
    id: 'refunds-issued',
    title: "Refunds Issued",
    value: "45",
    subtitle: "SAR 19,340",
    trend: { value: 1.5, isPositive: false, label: "decrease" },
    color: "purple" as const,
  },
  {
    id: 'active-terminals',
    title: "Active Terminals",
    value: "87",
    subtitle: "99.5% uptime",
    trend: { value: 2, isPositive: true, label: "new this week" },
    color: "yellow" as const,
  },
] as const;

export default function Home(): React.JSX.Element {
  return (
    <DashboardLayout>
      <Header />

      <main className="flex-1 overflow-auto">
        <div className="p-2 sm:p-4 md:p-6 space-y-4 sm:space-y-6">
          <section aria-label="Key Performance Indicators">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
              {KPI_DATA.map((kpi) => (
                <KPICard
                  key={kpi.id}
                  title={kpi.title}
                  value={kpi.value}
                  subtitle={kpi.subtitle}
                  trend={kpi.trend}
                  color={kpi.color}
                />
              ))}
            </div>
          </section>
          <section aria-label="Quick Actions">
            <QuickActions />
          </section>
          <section aria-label="Analytics Charts">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
              <Suspense fallback={<div className="h-64 bg-gray-100 rounded-lg animate-pulse" />}>
                <DailyTransactionChart />
              </Suspense>
              <Suspense fallback={<div className="h-64 bg-gray-100 rounded-lg animate-pulse" />}>
                <RefundVsSalesChart />
              </Suspense>
              <Suspense fallback={<div className="h-64 bg-gray-100 rounded-lg animate-pulse" />}>
                <BranchPerformanceChart />
              </Suspense>
            </div>
          </section>
          <section aria-label="Additional Analytics">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
              <Suspense fallback={<div className="h-64 bg-gray-100 rounded-lg animate-pulse" />}>
                <TerminalUptimeChart />
              </Suspense>
              <Suspense fallback={<div className="h-64 bg-gray-100 rounded-lg animate-pulse" />}>
                <TopBranches />
              </Suspense>
              <Suspense fallback={<div className="h-64 bg-gray-100 rounded-lg animate-pulse" />}>
                <LatestTransactions />
              </Suspense>
            </div>
          </section>
        </div>
      </main>
    </DashboardLayout>
  );
}
