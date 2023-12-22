import axios from "axios";


const axiosurl = axios.create({
    baseURL: 'http://localhost:5000'
})

const AxiosBase = () => {
   
    return axiosurl
};

export default AxiosBase;