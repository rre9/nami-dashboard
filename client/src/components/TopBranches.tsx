import { TrendingUp } from "lucide-react";
import { useState } from "react";

interface Branch {
  id: string;
  name: string;
  transactions: number;
  volume: number;
  trend: number;
}

interface Terminal {
  id: string;
  name: string;
  transactions: number;
  volume: number;
  trend: number;
}

const branches: Branch[] = [
  { id: "1", name: "Riyadh West BR-2", transactions: 1200, volume: 45000, trend: 15 },
  { id: "2", name: "Makkah", transactions: 980, volume: 38000, trend: 8 },
  { id: "3", name: "Jeddah 01", transactions: 1350, volume: 52000, trend: 22 },
];

const terminals: Terminal[] = [
  { id: "1", name: "Terminal 001", transactions: 850, volume: 32000, trend: 12 },
  { id: "2", name: "Terminal 002", transactions: 920, volume: 28000, trend: 5 },
  { id: "3", name: "Terminal 003", transactions: 1100, volume: 41000, trend: 18 },
];

export default function TopBranches() {
  const [activeTab, setActiveTab] = useState<"branches" | "terminals">("branches");

  const currentData = activeTab === "branches" ? branches : terminals;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-3 sm:p-4 md:p-6">
      {/* Tabs */}
      <div className="flex mb-4">
        <button
          onClick={() => setActiveTab("branches")}
          className={`flex-1 py-2 px-4 rounded-l-lg font-medium transition-colors ${
            activeTab === "branches"
              ? "bg-purple-600 text-white"
              : "bg-white text-gray-700 border border-gray-200"
          }`}
        >
          Top Branches
        </button>
        <button
          onClick={() => setActiveTab("terminals")}
          className={`flex-1 py-2 px-4 rounded-r-lg font-medium transition-colors ${
            activeTab === "terminals"
              ? "bg-purple-600 text-white"
              : "bg-white text-gray-700 border border-gray-200"
          }`}
        >
          Terminals
        </button>
      </div>

      {/* Content */}
      <div className="space-y-3 sm:space-y-4">
        {currentData.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-3 sm:p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-gray-900 text-sm sm:text-base truncate">{item.name}</h3>
              <p className="text-xs sm:text-sm text-gray-500">
                {item.transactions} transactions
              </p>
            </div>
            <div className="text-right ml-2">
              <p className="font-bold text-gray-900 text-sm sm:text-base">{item.volume.toLocaleString()}</p>
              <p className="flex items-center justify-end gap-1 text-xs sm:text-sm text-green-600 font-medium">
                <TrendingUp size={12} className="sm:w-3.5 sm:h-3.5" />
                +{item.trend}%
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

