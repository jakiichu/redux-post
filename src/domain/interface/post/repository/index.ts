import type { IPostsDto } from "../dto";

interface IPostRepository {
    getAll(): Promise<IPostsDto>;
}

export type { IPostRepository };
