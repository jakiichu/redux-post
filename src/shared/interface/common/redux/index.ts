import type {AxiosError} from "axios";

interface IBaseReduxObject<T> {
    data: T;
    loading: boolean,
    error: AxiosError<unknown> | null,
}

export type {IBaseReduxObject}