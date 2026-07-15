import Card from "./Card";
export default function Summary() {
  return (
    <div className="flex flex-wrap py-10">
      <Card name="Total devices" value="13" />
      <Card name="Online" value="12" />
      <Card name="Average latency" value="4.55" />
      <Card name="Unreachable Devices" value="2" />
    </div>
  );
}
