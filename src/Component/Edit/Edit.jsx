import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import AxiosBase from "../../AxiosBase";
import swal from "sweetalert";
import UseTask from "../UseTask/UseTask";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()
  const { register, handleSubmit, reset } = useForm();
  const axiosurl = AxiosBase();
  const [tasks, refetch] = UseTask();
  const { id } = useParams();
  const task = tasks?.find((item) => item._id == id);

  const onSubmit = (data) => {
    const title = data.title;
    const description = data.description;
    const deadline = data.deadline;
    const priority = data.priority;
    const body = {
      title,
      description,
      deadline,
      priority,
    };
    axiosurl.patch(`/taskEd/${id}`, body).then((res) => {
      if (res.data.modifiedCount > 0) {
        reset();
        navigate('/dash/todo')
        swal("Great", "Your todo task updated", "success");
        refetch();
      }
    });
  };
  return (
    <div className="modal-box bg-white p-8 rounded-md shadow-md max-w-md mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Update Your Task
        </h2>

        <div className="mb-4">
          <label className="text-gray-700 block mb-2">Task Title</label>
          <input
            type="text"
            className="form-input w-full px-4 py-2 border rounded-md"
            placeholder="Enter task title"
            {...register("title", { required: true })}
            defaultValue={task?.title}
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-700 block mb-2">Task Description</label>
          <textarea
            className="form-textarea w-full px-4 py-2 border rounded-md"
            rows="4"
            placeholder="Enter task description"
            {...register("description", { required: true })}
            defaultValue={task?.description}
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-700 block mb-2">Deadline</label>
          <input
            type="date"
            className="form-input w-full px-4 py-2 border rounded-md"
            {...register("deadline", { required: true })}
            defaultValue={task?.deadline}

          />
        </div>

        <div className="mb-4">
          <label className="text-gray-700 block mb-2">Priority</label>
          <select
            {...register("priority", { required: true })}
            className="form-select w-full px-4 py-2 border rounded-md"
            defaultValue={task?.priority}
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
          Update Task
        </button>
      </form>
    </div>
  );
};

export default Edit;
