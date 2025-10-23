import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", approved: 1200, declined: 240 },
  { day: "Tue", approved: 1300, declined: 221 },
  { day: "Wed", approved: 1400, declined: 229 },
  { day: "Thu", approved: 1500, declined: 200 },
  { day: "Fri", approved: 1600, declined: 180 },
  { day: "Sat", approved: 1400, declined: 250 },
  { day: "Sun", approved: 1200, declined: 290 },
];

export default function DailyTransactionChart() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-3 sm:p-4 md:p-6">
      <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">
        Daily Transaction Trend
      </h2>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="day" stroke="#6b7280" />
          <YAxis stroke="#6b7280" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="approved"
            stroke="#34d399"
            strokeWidth={2}
            dot={{ fill: "#34d399", r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="declined"
            stroke="#ef4444"
            strokeWidth={2}
            dot={{ fill: "#ef4444", r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

