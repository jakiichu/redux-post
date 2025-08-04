import type { EStatus } from "@/domain/enum/common/fetch-status";

interface IFetchState<T> {
    data: T;
    status: EStatus;
    error: string | null;
}

export type { IFetchState };
