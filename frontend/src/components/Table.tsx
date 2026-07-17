export default function Table() {
  let cell_prop = "border border-orange-400 p-2";
  let drop_prop = " bg-[#0F172A]";
  return (
    <div>
      <table className="border-collapse min-w-300 m-10">
        <thead>
          <tr>
            <th className={cell_prop}>Name</th>
            <th className={cell_prop}>IP</th>
            <th className={cell_prop}>Status</th>
            <th className={cell_prop}>Latency</th>
            <th className={cell_prop}></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={cell_prop}>GoogleDNS</td>
            <td className={cell_prop}>8.8.8.8</td>
            <td className={cell_prop}>Online</td>
            <td className={cell_prop}>3.22</td>
            <td className={cell_prop}>
              <label>Actions</label>
              <select name="options" id="action" className={drop_prop}>
                <option value=""></option>
                <option value="Delete">Delete</option>
                <option value="Update">Update</option>
                <option value="History">View History</option>
              </select>
            </td>
          </tr>
          <tr>
            <td className={cell_prop}>CloudFlareDNS</td>
            <td className={cell_prop}>1.1.1.1</td>
            <td className={cell_prop}>Online</td>
            <td className={cell_prop}>30.18</td>
            <td className={cell_prop}>
              <label>Actions</label>
              <select name="options" id="action" className={drop_prop}>
                <option value=""></option>
                <option value="Delete">Delete</option>
                <option value="Update">Update</option>
                <option value="History">View History</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
