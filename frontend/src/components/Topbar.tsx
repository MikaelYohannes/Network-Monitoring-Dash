import { CiUser } from "react-icons/ci";
export default function Topbar() {
  return (
    <div className="flex justify-between text-2xl py-5 px-20 border-b border-white rounded-lg">
      <h1>Dash</h1>
      <h3 className="text-3xl opacity-80 hover:opacity-100 duration-500">
        <CiUser />
      </h3>
    </div>
  );
}
