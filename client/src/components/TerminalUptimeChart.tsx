import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", uptime: 99.2 },
  { day: "Tue", uptime: 99.5 },
  { day: "Wed", uptime: 98.8 },
  { day: "Thu", uptime: 99.1 },
  { day: "Fri", uptime: 99.4 },
  { day: "Sat", uptime: 99.3 },
  { day: "Sun", uptime: 99.0 },
];

export default function TerminalUptimeChart() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-3 sm:p-4 md:p-6">
      <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">Terminal Uptime Trend</h2>
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorUptime" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#34d399" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#34d399" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="day" stroke="#6b7280" />
          <YAxis stroke="#6b7280" domain={[95, 100]} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
            }}
            formatter={(value) => `${value}%`}
          />
          <Area
            type="monotone"
            dataKey="uptime"
            stroke="#34d399"
            fillOpacity={1}
            fill="url(#colorUptime)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

