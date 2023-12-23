import { useContext } from "react";
import { useForm } from "react-hook-form";
import AxiosBase from "../../AxiosBase";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import UseTask from "../UseTask/UseTask";
import swal from "sweetalert";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const TodoList = () => {
  const { user } = useContext(AuthContext);
  const axiosurl = AxiosBase();
  const [tasks, refetch] = UseTask();

  const userTask = tasks.filter((item) => item.email == user.email);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const title = data.title;
    const description = data.description;
    const deadline = data.date;
    const priority = data.priority;
    const status = "todo";
    const email = user.email;
    const body = {
      title,
      description,
      deadline,
      priority,
      status,
      email,
    };
    axiosurl.post("/tasks", body).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        reset();
        document.getElementById("my_modal_1").close();
        swal("Great", "Your todo task added", "success");
        refetch();
      }
    });
  };
  const handleDelete = (id) => {
    axiosurl.delete(`/taskDd/${id}`).then((res) => {
      console.log(res.data);
      if (res.data.deletedCount > 0) {
        swal("Success", "Your task deleted successfully", "success");
        refetch();
      }
    });
  };


  return (
    <div
      className=" flex gap-6
     justify-between ml-4 shadow-xl px-8 py-10
      bg-[#7C93C3] rounded-lg w-full"
    >
      <div className="grid md:grid-cols-3 gap-4">
        {userTask?.map((item) => (
          <div key={item._id}>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p className="text-white">{item.description}</p>
                <div className="flex justify-between items-center mt-2">
                  <div className="badge badge-primary">{item.priority}</div>
                  <div className={`badge bg-green-300 text-black`}>
                    {item.status}
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex justify-between gap-3">
                    <span className="text-white">
                      Deadline: {item.deadline}
                    </span>
                    <Link to={`/edit/${item._id}`}>
                    <button className="text-xl">
                      <FaEdit></FaEdit>
                    </button>
                    </Link>
                  </div>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 w-full mt-4"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h3
          className="text-3xl font-bold bg-[#31304D] inline shadow-2xl rounded-full px-6 py-3 text-center cursor-pointer"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          +
        </h3>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box bg-white p-8 rounded-md shadow-md max-w-md mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Create a New Task
              </h2>

              <div className="mb-4">
                <label className="text-gray-700 block mb-2">Task Title</label>
                <input
                  type="text"
                  className="form-input w-full px-4 py-2 border rounded-md"
                  placeholder="Enter task title"
                  {...register("title", { required: true })}
                />
              </div>

              <div className="mb-4">
                <label className="text-gray-700 block mb-2">
                  Task Description
                </label>
                <textarea
                  className="form-textarea w-full px-4 py-2 border rounded-md"
                  rows="4"
                  placeholder="Enter task description"
                  {...register("description", { required: true })}
                />
              </div>

              <div className="mb-4">
                <label className="text-gray-700 block mb-2">Deadline</label>
                <input
                  type="date"
                  className="form-input w-full px-4 py-2 border rounded-md"
                  {...register("date", { required: true })}
                />
              </div>

              <div className="mb-4">
                <label className="text-gray-700 block mb-2">Priority</label>
                <select
                  {...register("priority", { required: true })}
                  className="form-select w-full px-4 py-2 border rounded-md"
                >
                  <option value="" disabled>
                    Select priority
                  </option>
                  <option value="low">Low</option>
                  <option value="moderate">Moderate</option>
                  <option value="high">High</option>
                </select>
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full"
              >
                Create Task
              </button>
            </form>

            <div className="modal-action absolute top-0 right-0 mt-2 mr-2">
              <button
                className="text-gray-600 hover:text-gray-800 text-lg"
                onClick={() => document.getElementById("my_modal_1").close()}
              >
                &times;
              </button>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default TodoList;
