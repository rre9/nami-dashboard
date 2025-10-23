import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { branch: "Main Branch", volumes: 45000, transactions: 324 },
  { branch: "Downtown", volumes: 32000, transactions: 280 },
  { branch: "Mall Branch", volumes: 28000, transactions: 245 },
  { branch: "Airport", volumes: 18000, transactions: 156 },
  { branch: "Suburb", volumes: 12000, transactions: 98 },
];

export default function BranchPerformanceChart() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-3 sm:p-4 md:p-6">
      <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">
        Branch Performance (ريال)
      </h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="branch" stroke="#6b7280" angle={-45} textAnchor="end" height={80} />
          <YAxis stroke="#6b7280" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
            }}
          />
          <Legend />
          <Bar dataKey="volumes" fill="#6d28d9" name="Volumes" radius={[8, 8, 0, 0]} />
          <Bar dataKey="transactions" fill="#34d399" name="Transactions" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

