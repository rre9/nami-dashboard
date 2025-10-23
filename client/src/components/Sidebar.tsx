import { Menu, X, ChevronDown, HelpCircle, Bell, BarChart3, CreditCard, ArrowLeftRight, Monitor, Ticket, TrendingUp, User, MapPin, Bell as BellIcon } from "lucide-react";
import clsx from "clsx";
import { useState } from "react";

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: number;
}

const navItems: NavItem[] = [
  { id: "dashboard", label: "Dashboard", icon: BarChart3 },
  { id: "settlements", label: "Settlements", icon: CreditCard },
  { id: "transactions", label: "Transactions", icon: ArrowLeftRight },
  { id: "terminal", label: "Terminal Management", icon: Monitor },
  { id: "support", label: "Support Tickets", icon: Ticket },
  { id: "reports", label: "Reports", icon: TrendingUp },
  { id: "profile", label: "Profile Management", icon: User },
  { id: "location", label: "Location", icon: MapPin },
  { id: "notifications", label: "Notifications", icon: BellIcon, badge: 8 },
];

export default function Sidebar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
}) {
  const [activeItem, setActiveItem] = useState("dashboard");

  const handleItemClick = (itemId: string) => {
    setActiveItem(itemId);
  };
  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md"
          aria-label="Open sidebar"
        >
          <Menu size={24} />
        </button>
      )}

      <aside
        className={clsx(
          "fixed top-0 left-0 w-80 h-screen z-40 flex flex-col overflow-y-auto md:overflow-visible",
          "bg-white text-gray-900",
          "transition-transform duration-300 will-change-transform",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 bg-white/90 rounded-lg shadow hover:bg-white transition"
          aria-label="Close sidebar"
        >
          <X size={20} className="text-gray-900" />
        </button>
        <div className="p-6 pb-4">
          <div className="flex items-center gap-3">
            <img 
              src="/assets/images/nami-logo.jpg" 
              alt="Nami Logo" 
              className="w-40 h-18 object-contain"
            />
          </div>
        </div>

        
        <div className="px-6 py-3 border-b border-gray-200 sm:hidden">
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg">
              <div className="w-9 h-4 bg-gray-300 rounded-full relative">
                <div className="w-3.5 h-3.5 bg-white rounded-full absolute top-0.5 right-0.5 shadow-sm" />
              </div>
              <span className="text-gray-900 font-medium">العربية</span>
            </div>

            {/* Help */}
            <button className="p-2.5 rounded-lg bg-gray-100 text-gray-900 hover:bg-purple-100 hover:text-purple-700 transition-colors">
              <HelpCircle size={16} />
            </button>

            {/* Notifications */}
            <button className="relative p-2.5 rounded-lg bg-gray-100 text-gray-900 hover:bg-purple-100 hover:text-purple-700 transition-colors">
              <Bell size={16} />
              <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-purple-500 rounded-full" />
            </button>
          </div>
        </div>


        {/* Company Selector للجوال فقط */}
        <div className="px-6 py-3 border-b border-gray-200 sm:hidden">
          <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 rounded-lg">
            <span className="text-lg">🏢</span>
            <div className="flex-1">
              <div className="text-sm text-gray-500">Company</div>
              <div className="text-gray-900 font-medium">TechCorp Ltd.</div>
            </div>
            <ChevronDown size={14} className="text-gray-500" />
          </div>
        </div>

        {/* Merchant Overview Section للجوال فقط */}
        <div className="px-6 py-3 border-b border-gray-200 sm:hidden">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Merchant Overview</h3>
          
          <div className="space-y-2.5">
            <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 rounded-lg">
              <span className="text-lg">📅</span>
              <div className="flex-1">
                <div className="text-sm text-gray-500">Date Range</div>
                <div className="text-gray-900 font-medium">Last 30 Days</div>
              </div>
              <ChevronDown size={14} className="text-gray-500" />
            </div>
            
            <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 rounded-lg">
              <span className="text-lg">🔽</span>
              <div className="flex-1">
                <div className="text-sm text-gray-500">Branch Filter</div>
                <div className="text-gray-900 font-medium">All Branches</div>
              </div>
              <ChevronDown size={14} className="text-gray-500" />
            </div>
          </div>
        </div>

        {/* عناصر التنقل */}
        <nav className="flex-1 px-6 py-2 overflow-y-auto">
          <div className="space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={clsx(
                  "w-full flex items-center justify-between px-5 py-4 rounded-lg transition-all duration-200 group",
                  "active:bg-purple-600 active:text-white active:scale-95",
                  "touch-manipulation",
                  activeItem === item.id
                    ? "bg-purple-600 text-white hover:bg-purple-700"
                    : "text-gray-900 hover:bg-purple-600 hover:text-white"
                )}
              >
                <div className="flex items-center gap-4 flex-1">
                  <item.icon className={clsx(
                    "w-6 h-6 transition-colors",
                    activeItem === item.id ? "text-white" : "text-gray-900 group-hover:text-white group-active:text-white"
                  )} />
                  <span className="font-medium text-base whitespace-nowrap">
                    {item.label}
                  </span>
                </div>
                {item.badge && (
                  <span className="bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center min-w-[20px]">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </nav>

        {/* الملف الشخصي */}
        <div className="p-6 pt-4 border-t border-gray-200">
          <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-100 cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
              HA
            </div>
            <div className="flex-1 text-left">
              <div className="text-sm font-semibold text-gray-900">Hashem Alhadad</div>
              <div className="text-xs text-gray-500">Merchant Admin</div>
            </div>
          </div>
          <button className="w-full mt-3 flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
            <span>→</span>
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Overlay للجوال فقط */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
