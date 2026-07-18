import { useEffect, useState } from "react";
import Card from "./Card";
import { getDevices } from "../api/devices";
import type { Device } from "../types/devices";
export default function Summary() {
  const [Summary, setSummary] = useState<Device[]>([]);
  useEffect(() => {
    const fetchSummary = () => {
      getDevices().then(setSummary).catch(console.error);
    };
    fetchSummary();

    const interval = setInterval(fetchSummary, 10000);

    return () => clearInterval(interval);
  }, []);

  let average: number = 0;
  const online: Device[] = [];
  const offline: Device[] = [];
  for (const device of Summary) {
    if (device.status == "online" && device.latency != null) {
      online.push(device);
      average += device.latency;
    } else if (device.status == "offline") {
      offline.push(device);
    }
  }
  average /= Summary.length;

  return (
    <div className="flex flex-wrap py-10">
      <Card name="Total devices" value={Summary.length} />
      <Card name="Online" value={online.length} />
      <Card name="Average latency" value={Number(average.toFixed(2))} />
      <Card name="Unreachable Devices" value={offline.length} />
    </div>
  );
}
