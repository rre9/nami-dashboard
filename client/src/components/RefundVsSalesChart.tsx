import { PieChart, Pie, Cell, Legend, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Sales", value: 75, color: "#34d399" },
  { name: "Refunds", value: 25, color: "#60a5fa" },
];

export default function RefundVsSalesChart() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-3 sm:p-4 md:p-6">
      <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">
        Refund vs Sales Breakdown
      </h2>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={2}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
            }}
            formatter={(value) => `${value}%`}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

