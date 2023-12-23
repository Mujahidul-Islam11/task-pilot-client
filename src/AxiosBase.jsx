import axios from "axios";


const axiosurl = axios.create({
    baseURL: 'https://task-pilot-server.vercel.app'
})

const AxiosBase = () => {
   
    return axiosurl
};

export default AxiosBase;