import "./App.css";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import Summary from "./components/Summary";
import Card from "./components/Card";
export default function App() {
  return (
    <div>
      <Topbar />
      <div className="flex">
        <Sidebar />
        <Summary />
      </div>
    </div>
  );
}
