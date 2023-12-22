import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import UseTask from "../UseTask/UseTask";

const Task = () => {
  const [tasks] = UseTask();
  const { user } = useContext(AuthContext);

  const Pending = tasks?.filter((item) => item.status === "pending");
  const statusPen = Pending?.filter((item) => item?.email == user?.email);
  const Completed = tasks?.filter((item) => item.status === "completed");
  const statusCom = Completed?.filter((item)=> item?.email == user?.email)
  return (
    <div
      className="md:flex gap-10
         justify-evenly ml-4 shadow-xl px-8 py-10
          bg-[#7C93C3] rounded-lg w-full"
    >
      <div>
        <h2 className="text-xl text-center font-semibold text-black">
          ToDo
        </h2>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Task</th>
                <th>Status</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              {statusPen?.map((item) => (
                <tr key={item.id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="">{item.title}</div>
                      </div>
                    </div>
                  </td>
                  <td className="badge badge-error cursor-pointer">{item.status}</td>
                  <td className="">{item.priority}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <h2 className="text-xl text-center font-semibold text-black">
          Completed
        </h2>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Task</th>
                <th>Status</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              {statusCom?.map((item) => (
                <tr key={item.id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="">{item.title}</div>
                      </div>
                    </div>
                  </td>
                  <td className="badge badge-error cursor-pointer">{item.status}</td>
                  <td>{item.priority}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <h2 className="text-xl text-center font-semibold text-black">
          OnGoing
        </h2>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Task</th>
                <th>Status</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              {statusCom?.map((item) => (
                <tr key={item.id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="">{item.title}</div>
                      </div>
                    </div>
                  </td>
                  <td className="badge badge-error cursor-pointer">{item.status}</td>
                  <td>{item.priority}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Task;
