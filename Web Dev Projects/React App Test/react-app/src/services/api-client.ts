import axios, {CanceledError, AxiosError, isCancel} from "axios";
export default axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    
})

export {CanceledError, AxiosError, isCancel}