import type { IPostsDto } from "@/domain/interface/post/dto";
import type { IPostRepository } from "@/domain/interface/post/repository";
import { BasePostsUseCase } from "../abstract-class";

class getAllPostsUseCase extends BasePostsUseCase {
    constructor(repository: IPostRepository) {
        super(repository);
    }

    async execute(): Promise<IPostsDto> {
        return this.repository.getAll();
    }
}

export { getAllPostsUseCase };
