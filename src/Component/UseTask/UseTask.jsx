import { useQuery } from "@tanstack/react-query";
import AxiosBase from "../../AxiosBase";

const UseTask = () => {
  const axiosurl = AxiosBase();

  const { data: tasks = [], refetch  } = useQuery({
    queryKey: ["task"],
    queryFn: async () => {
      const res = await axiosurl.get(`/tasks`);
      return res?.data
    },
  });
  return [tasks, refetch ];
};


export default UseTask;
