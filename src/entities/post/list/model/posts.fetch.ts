import {createAsyncThunk} from "@reduxjs/toolkit";
import {type IPostsDto, type IPostsPort, PostsRepository} from "@/shared/api/repsoitory/posts";
import type {AxiosError} from "axios";

const postsFetch = createAsyncThunk<
    IPostsDto,
    IPostsPort,
    { readonly rejectValue: AxiosError }
>('post/get-all', async (params) => {
    const postsRepository = new PostsRepository()
    return await postsRepository.getAll(params)
})

export {postsFetch}