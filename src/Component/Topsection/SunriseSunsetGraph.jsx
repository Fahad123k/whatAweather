import React from "react";
import { LineChart, Line, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { time: "00:00", lightIntensity: 0 },
  { time: "01:00", lightIntensity: 5 },
  { time: "02:00", lightIntensity: 10 },
  { time: "03:00", lightIntensity: 15 },
  { time: "04:00", lightIntensity: 20 },
  { time: "05:00", lightIntensity: 25 },
  { time: "06:00", lightIntensity: 30 },
  { time: "07:00", lightIntensity: 40 },
  { time: "08:00", lightIntensity: 50 },
  { time: "09:00", lightIntensity: 60 },
  { time: "10:00", lightIntensity: 70 },
  { time: "11:00", lightIntensity: 80 },
  { time: "12:00", lightIntensity: 90 },
  { time: "13:00", lightIntensity: 85 },
  { time: "14:00", lightIntensity: 70 },
  { time: "15:00", lightIntensity: 60 },
  { time: "16:00", lightIntensity: 50 },
  { time: "17:00", lightIntensity: 40 },
  { time: "18:00", lightIntensity: 30 },
  { time: "19:00", lightIntensity: 20 },
  { time: "20:00", lightIntensity: 15 },
  { time: "21:00", lightIntensity: 10 },
  { time: "22:00", lightIntensity: 5 },
  { time: "23:00", lightIntensity: 0 },
];

export default function SunriseSunsetGraph() {
  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <Tooltip />
          <Legend />
          {/* Red Line */}
          <Line
            type="monotone"
            dataKey="lightIntensity"
            stroke="gray" // Red color
            strokeWidth={3}  // Bold stroke
            activeDot={{ r: 8 }}
          />
          {/* Blue Line (Example for alternation) */}
          {/* You can add another data series or alternate colors if needed */}
          {/* <Line
            type="monotone"
            dataKey="anotherKey"
            stroke="#0000FF" // Blue color
            strokeWidth={3}  // Bold stroke
          /> */}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
