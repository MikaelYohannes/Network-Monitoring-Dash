import { IoHomeOutline } from "react-icons/io5";
import { MdDevices } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

export default function Sidebar() {
  let button_prop =
    "flex justify-between min-width-5 opacity-80 hover:opacity-100 hover:cursor-pointer duration-500  my-10 px-5 py-2";
  let icon_prop = "mr-2 text-xl";
  return (
    <div className="flex flex-col justify-start h-screen border-r-1 border-orange-400 bg-[#020820] px-10">
      <div className={button_prop}>
        <IoHomeOutline className={icon_prop} />
        <button>Home</button>
      </div>
      <div className={button_prop}>
        <MdDevices className={icon_prop} />
        <button>Devices</button>
      </div>
      <div className={button_prop}>
        <MdHistory className="text-2xl mr-2" />
        <button>History</button>
      </div>
      <div className={button_prop}>
        <IoSettingsOutline className="text-2xl mr-2" />
        <button>Settings</button>
      </div>
    </div>
  );
}
