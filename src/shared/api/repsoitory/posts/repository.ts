import {BaseRepository} from "@/shared/api/config";
import type {AxiosInstance} from "axios";
import {BACKEND_HTTPS_SERVICES} from "@/shared/api/http";
import type {IPostsDto, IPostsPort} from "./";


class PostsRepository extends BaseRepository {
    constructor(api?: AxiosInstance) {
        super('/posts', api || BACKEND_HTTPS_SERVICES)
    }

    public async getAll(params: IPostsPort): Promise<IPostsDto> {
        return this.convertResponse(this.api.get(this.prefix, {params}))
    }
}

export {PostsRepository}