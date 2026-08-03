import "./App.css";
import TopBar from "./components/TopBar";
import Sidebar from "./components/Sidebar";
import Summary from "./components/Summary";
import Table from "./components/Table";
export default function App() {
  return (
    <div>
      <TopBar />
      <div className="">
        <Sidebar />
        <div className="ml-50 mt-18">
          <Summary />
          <h1 className="text-4xl ml-10 pb-2 opacity-80 font-bold" id="Table">
            Your Devices
          </h1>
          <Table />
        </div>
      </div>
    </div>
  );
}
