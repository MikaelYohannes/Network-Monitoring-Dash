import "./App.css";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import Summary from "./components/Summary";
import Table from "./components/Table";
export default function App() {
  return (
    <div>
      <Topbar />
      <div className="">
        <Sidebar />
        <div className="ml-50 mt-18">
          <h1 className="ml-10 pt-10 opacity-80 text-4xl font-bold">
            Highlights
          </h1>
          <Summary />
          <h1 className="text-4xl ml-10 pb-2 opacity-80 font-bold">
            Your Devices
          </h1>
          <Table />
        </div>
      </div>
    </div>
  );
}
