/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import AxiosBase from "../../AxiosBase";
import UseTask from "../UseTask/UseTask";

const Task = () => {
  const [tasks, refetch] = UseTask()
  const { user } = useContext(AuthContext);
  const axiossurl = AxiosBase();
  const [todo, setTodo] = useState([]);
  const [progress, setProgress] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [task, setTasks] = useState([]);

  const fetchTaskData = async () => {
    try {
      const res = await axiossurl.get(`/task/${user?.email}`);
      setTasks(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchTaskData(); 
  }, [task]);

  useEffect(() => {
    if (task) {
      const filteredTodo = task.filter((item) => item.status === "todo");
      const filteredProgress = task.filter(
        (item) => item.status === "progress"
      );
      const filteredCompleted = task.filter(
        (item) => item.status === "completed"
      );
      setTodo([...filteredTodo]);
      setProgress([...filteredProgress]);
      setCompleted([...filteredCompleted]);
    }
  }, [task]);

  
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    ) {
      return;
    }

    const updatedTasks = Array.from(task);
    const [movedTask] = updatedTasks.splice(source.index, 1);
    updatedTasks.splice(destination.index, 0, movedTask);
    axiossurl
      .patch(`/task?id=${draggableId}`, {
        status: destination.droppableId,
      })
      .then(() => {
        refetch();
      });
  };

  return (
    <div className="mx-auto">
      <div className="flex justify-center items-center content-center mt-5">
        <h1 className="mx-auto text-center text-[#7C93C3] text-3xl">
          Start Updating Your Task By Drag And Drop
        </h1>
      </div>

      <div className="grid lg:grid-cols-3 gap-5 mt-10">
        <DragDropContext onDragEnd={onDragEnd}>
          <div>
            <Droppable droppableId="todo">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className=" px-4"
                >
                  <div className="">
                    <h1 className="text-center text-3xl mt-3 mb-3">Todo</h1>
                    {todo?.map((task, index) => (
                      <Draggable
                        key={task._id}
                        draggableId={task._id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            key={task._id}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="w-full justify-center mx-auto max-w-sm border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-5"
                          >
                              <div className="card-body bg-red-400 bg-opacity-60 rounded-none border">
                              <h2 className="card-title">
                                {task.title}
                              
                              </h2>
                              <p className="">{task.description}</p>
                              <p>{task.priority}</p>      
                                                   
                              </div>

                           
                          </div>
                        )}
                      </Draggable>
                    ))}
                  </div>

                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>

          <div>
            <Droppable droppableId="progress">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className=" px-4"
                >
                  <div className="">
                    <h1 className="text-center text-3xl mt-3 mb-3">progress</h1>
                    {progress?.map((task, index) => (
                      <Draggable
                        key={task._id}
                        draggableId={task._id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            key={task._id}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="w-full justify-center mx-auto max-w-sm border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-5"
                          >
                              <div className="card-body bg-blue-400 rounded-none bg-opacity-60 border">
                              <h2 className="card-title">
                                {task.title}
                              
                              </h2>
                              <p className="">{task.description}</p>
                              <p>{task.priority}</p>      
                                                   
                              </div>

                           
                          </div>
                        )}
                      </Draggable>
                    ))}
                  </div>

                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>

          <div>
            <Droppable droppableId="completed">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className=" px-4"
                >
                  <div className="">
                    <h1 className="text-center text-3xl mt-3 mb-3">Complete</h1>
                    {completed?.map((task, index) => (
                      <Draggable
                        key={task._id}
                        draggableId={task._id}
                        index={index}
                      >
                        {(provided) => (                         
                          <div
                            key={task._id}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="card bg-green-400 bg-opacity-60 rounded-none shadow-xl"
                          >
                            <div className="card-body border">
                              <h2 className="card-title">
                                {task.title}
                              
                              </h2>
                              <p className="">{task.description}</p>
                              <p>{task.priority}</p>
                           
                                                   
                              </div>
                            
                          </div>
                        )}
                      </Draggable>
                    ))}
                  </div>

                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </DragDropContext>
      </div>
    </div>
  );
};

export default Task;
