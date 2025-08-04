import { EStatus } from "@/domain/enum/common/fetch-status";
import type { IPostsState } from "../interface";

const initialState: IPostsState = {
    data: [],
    status: EStatus.IDLE,
    error: null,
};

export { initialState };
