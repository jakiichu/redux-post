import type { IPostsDto } from "@/domain/interface/post/dto";
import type { IPostRepository } from "@/domain/interface/post/repository";
import type { AxiosInstance } from "axios";
import axios from "axios";
import { BaseRepository } from "../common/abstract-class";

class PostRepository extends BaseRepository implements IPostRepository {
    constructor(instance: AxiosInstance = axios) {
        super(instance, "/posts");
    }

    async getAll(): Promise<IPostsDto> {
        return this.instance.get(this.prefix).then((res) => res.data);
    }
}

export { PostRepository };
