/* eslint-disable no-unused-vars */
import React, { useContext } from "react";

import { useQuery } from "@tanstack/react-query";

import moment from "moment";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import AxiosBase from "../../AxiosBase";

const Notification = () => {
  const { user } = useContext(AuthContext);
  const axiosurl = AxiosBase()

  const { data: tasks = [], refetch } = useQuery({
    queryKey: ["task"],
    queryFn: async () => {
      const res = await axiosurl.get(`/task/${user?.email}`);
      return res.data;
    },
  });

  return (
    <div className="mx-10">
      {tasks?.map((task) => (
        <div className="bg-[#cbd5e1] rounded pl-3" key={task._id}>
          <h1 className="mt-5">Task: {task.title}</h1>
          <p>
            Deadline: <span>{moment(task.deadline).format("ll")}</span>
          </p>
          <p>
            Added: <span>{moment(task.addTime).fromNow()}</span>
          </p>
          <p>
            Update:{" "}
            <span>
              {task.update ? moment(task.update).fromNow() : "Not Updated Yet"}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Notification;