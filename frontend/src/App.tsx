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
          <Summary />
          <Table />
        </div>
      </div>
    </div>
  );
}
