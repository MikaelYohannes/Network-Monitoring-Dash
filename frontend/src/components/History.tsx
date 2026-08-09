import { Line, LineChart } from "recharts";

export default function History() {
    const data = [{name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
  {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
  {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
  {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
  {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
  {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
  {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},];
  return (
    <div className="text-3xl flex justify-center text-white min-h-screen">
      <LineChart width={600} height={300} data={data}>
        <Line type='monotone' dataKey='react' stroke="#ffffff" strokeWidth={3}/>
      </LineChart>
    </div>
  );
}