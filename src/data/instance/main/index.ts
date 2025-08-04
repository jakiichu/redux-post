import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/";
const MAIN_INSTANCE_API = axios.create({
    baseURL,
    withCredentials: false,
});

export { MAIN_INSTANCE_API };
