import { useEffect, useState } from "react";
import type { Device } from "../types/devices";
import { getDevices } from "../api/devices";
import Modal from "./modal";
export default function Table() {
  let cell_prop = "border border-orange-400 p-2";
  let edit_button_prop =
    "border rounded-lg px-2 mx-2 opacity-80 hover:opacity-100 hover:cursor-pointer duration-500 ";
  let delete_button_prop =
    " border border-[#ff0000] rounded-lg text-red-500 mx-2 px-2 hover:bg-[#ff0000] duration-500 hover:cursor-pointer hover:text-white";

  let form_prop =
    " flex flex-col text-xl border p-20 rounded-xl border-orange-500";
  const [devices, setDevices] = useState<Device[]>([]);
  useEffect(() => {
    const fetchDevices = () => {
      getDevices().then(setDevices).catch(console.error);
    };
    fetchDevices();

    const interval = setInterval(fetchDevices, 10000);

    return () => clearInterval(interval);
  }, []);

  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <div className="flex flex-col items-center bg-[#020820]">
      <table className="border-collapse min-w-300 m-10">
        <thead>
          <tr>
            <th className={cell_prop}>Name</th>
            <th className={cell_prop}>IP</th>
            <th className={cell_prop}>Status</th>

            <th className={cell_prop}>Latency</th>
            <th className={cell_prop}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {devices.map((device) => (
            <tr key={device.id}>
              <td className={cell_prop}>{device.name}</td>
              <td className={cell_prop}>{device.ip}</td>
              <td className={cell_prop}>
                {device.status === "online" ? (
                  <span className="text-green-400">🟢 Online</span>
                ) : (
                  <span className="text-red-400">🔴 Offline</span>
                )}
              </td>
              <td className={cell_prop}>{device.latency}</td>
              <td className="flex justify-evenly border border-orange-400 p-2">
                <button className={edit_button_prop}>Edit</button>
                <button className={delete_button_prop}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={() => {
          setShowAddModal(true);
        }}
        className="border rounded-lg max-w-50 px-10 py-5 my-5 opacity-80 hover:opacity-100 hover:cursor-pointer duration-500 "
      >
        Add Device
      </button>
      <Modal isOpen={showAddModal} onClose={() => setShowAddModal(false)}>
        <form className={form_prop}>
          <h1 className="mb-5">Add New Device</h1>
          <label htmlFor="Name">Device Name</label>
          <input className="border rounded-lg p-1" type="text" />
          <label className="mt-5 " htmlFor="IP">
            IP Adress
          </label>
          <input className="border rounded-lg p-1" type="text" />
          <input className="mt-5" type="Submit" />
        </form>
      </Modal>
    </div>
  );
}
