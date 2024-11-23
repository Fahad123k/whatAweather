import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";



const data = [
  { time: "06:51", lightIntensity: 0 },
  { time: "07:30", lightIntensity: 20 },
  { time: "09:00", lightIntensity: 50 },
  { time: "12:00", lightIntensity: 80 },
  { time: "15:00", lightIntensity: 70 },
  { time: "17:00", lightIntensity: 30 },
  { time: "17:25", lightIntensity: 0 },
];


export default function SunriseSunsetGraph() {

  const [chartWidth, setChartWidth] = useState(100); 

  useEffect(() => {
    const updateChartWidth = () => {
      if (window.innerWidth < 640) {
        setChartWidth(100); 
      } else if (window.innerWidth < 768) {
        setChartWidth(150); 
      } else {
        setChartWidth(185); 
      }
    };

    updateChartWidth();
    window.addEventListener('resize', updateChartWidth);

    return () => window.removeEventListener('resize', updateChartWidth);
  }, []);

  return (
    <LineChart
      width={chartWidth}
      height={chartWidth/2}
      className="line-chart"
      data={data}
    >
    
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="lightIntensity"
        stroke="#4e545c"
        activeDot={{ r: 8 }}
      />
   
    </LineChart>
  );
}
