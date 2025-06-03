interface IPostsDto {
    posts: IPost[],
    total: number
    skip: number
    limit: number
}

interface IPost {
    id: number
    title: string
    reactions: IReactions,
    userId: number
}

interface IReactions {
    likes: number
    dislikes: number
}

export type {IPostsDto}