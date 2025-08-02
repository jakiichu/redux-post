import type { IPostRepository } from "@/domain/interface/post/repository";

abstract class BasePostsUseCase {
    protected readonly repository: IPostRepository;
    constructor(repository: IPostRepository) {
        this.repository = repository;
    }
}

export { BasePostsUseCase };
