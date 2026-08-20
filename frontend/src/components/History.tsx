import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { getDeviceHistory } from "../api/devices";
import React, { useEffect } from "react";

type HistoryData = {
  time: string;
  latency: number;
};

export default function History() {
  const [data, setData] = React.useState<HistoryData[]>([]);
  useEffect(() => {async function fetchData() {
    const history = await getDeviceHistory(5);
    const result = history.map((item: any) => ({
      time: item.time,
      latency: item.latency,
    }));
    setData(result);
  }
  fetchData();
}, []);

  return (
    <div className="text-xl flex flex-col text-white pl-50 min-h-screen">

      <h1 className="text-2xl py-10">Average Network Performance</h1>
      <LineChart width={1000} height={1000} data={data}>
        
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="time"/>
        <YAxis
          label={{ value: "Latency (ms)", angle: -90, position: "insideLeft" }}
        />
        <Tooltip/>
        <Line type='monotone' dataKey='latency' stroke="#ffffff" strokeWidth={2}/>
      </LineChart>
    </div>
  );
}