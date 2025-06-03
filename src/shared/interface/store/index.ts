import type {IBaseReduxObject} from "@/shared/interface/common/redux";
import type {IPostsDto} from "@/shared/api/repsoitory/posts";

interface IRootStore {
    post: IBaseReduxObject<IPostsDto>
}

export type {IRootStore}