import axios, {type AxiosInstance, type AxiosResponse, type CreateAxiosDefaults} from "axios";

interface ICreateAxiosDefaults extends CreateAxiosDefaults {
    errorCase?: (instance: AxiosInstance) => (config: AxiosResponse<unknown, unknown>) => Promise<AxiosResponse<unknown, unknown>>;
}


const defaultErrorCase = (error: AxiosResponse<unknown, unknown>) => Promise.reject(error)


const createAxiosInstance = (baseURL: string, {
    errorCase,
    ...options
} = {} as ICreateAxiosDefaults) => {
    const instance = axios.create({
        baseURL,
        withCredentials: false,
        ...options,
    });
    instance.interceptors.response.use(
        (config: AxiosResponse<unknown, unknown>) => {
            return config;
        },
        (config) => errorCase ? errorCase(instance)(config) : defaultErrorCase(config)
    );

    return instance;
};


export {createAxiosInstance};