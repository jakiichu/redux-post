import type { IFetchState } from "@/domain/interface/common/redux";
import type { IPostsDto } from "@/domain/interface/post/dto";

type IPostsState = IFetchState<IPostsDto>;

export type { IPostsState };
