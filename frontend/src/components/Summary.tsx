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

  const online: Device[] = [];
  for (const device of Summary) {
    if (device.status == "online") {
      online.push(device);
    }
  }

  return (
    <div className="flex flex-wrap py-10">
      <Card name="Total devices" value={Summary.length} />
      <Card name="Online" value={Summary.length} />
      <Card name="Average latency" value={4.55} />
      <Card name="Unreachable Devices" value={2} />
    </div>
  );
}
