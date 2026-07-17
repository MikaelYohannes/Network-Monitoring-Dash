import "./App.css";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import Summary from "./components/Summary";
import Table from "./components/Table";
export default function App() {
  return (
    <div>
      <Topbar />
      <div className="flex">
        <Sidebar />
        <div>
          <Summary />
          <Table />
        </div>
      </div>
    </div>
  );
}
