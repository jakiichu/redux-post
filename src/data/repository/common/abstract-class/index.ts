import type { AxiosInstance } from "axios";

abstract class BaseRepository {
    protected prefix: string;
    protected instance: AxiosInstance;
    constructor(instance: AxiosInstance, prefix: string) {
        this.instance = instance;
        this.prefix = prefix;
    }
}

export { BaseRepository };
