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
  { name: "Page A", uv: 4000, pv: 2400, amt: 2200 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 2000, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 9800, amt: 2900 },
];

export default function Graph() {

  const [chartWidth, setChartWidth] = useState(100); // Initial height

  useEffect(() => {
    // Function to update chart height based on window width
    const updateChartWidth = () => {
      if (window.innerWidth < 640) {
        setChartWidth(100); // Small screens
      } else if (window.innerWidth < 768) {
        setChartWidth(150); // Medium screens
      } else {
        setChartWidth(185); // Large screens
      }
    };

    // Set initial height and add event listener
    updateChartWidth();
    window.addEventListener('resize', updateChartWidth);

    // Cleanup listener on component unmount
    return () => window.removeEventListener('resize', updateChartWidth);
  }, []);

  return (
    <LineChart
      width={chartWidth}
      height={chartWidth/2}
      className="line-chart"
      data={data}
      // margin={{ top: 2, right: 10, left: 20, bottom: 5 }}
    >
      {/* <CartesianGrid strokeDasharray="3 3" /> */}
      {/* <XAxis dataKey="name" /> */}
      {/* <YAxis /> */}
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#4e545c"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  );
}
