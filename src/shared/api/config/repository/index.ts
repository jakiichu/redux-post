import type {AxiosError, AxiosInstance, AxiosResponse} from "axios";

class BaseRepository {
    protected readonly prefix: string
    protected api: AxiosInstance;

    constructor(prefix: string, api: AxiosInstance) {
        this.prefix = prefix;
        this.api = api;
    }

    protected async convertResponse<T>(response: Promise<AxiosResponse<T>>) {
        return response.then(res => res.data).catch((reason: AxiosError) => {
            throw reason
        })
    }
}

export {
    BaseRepository
}
