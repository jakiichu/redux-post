import { PostRepository } from "@/data/repository/post";
import { EStatus } from "@/domain/enum/common/fetch-status";
import type { IPostsDto } from "@/domain/interface/post/dto";

import { getAllPostsUseCase } from "@/domain/use-case/post/get-all";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
    const repository = new PostRepository(
        axios.create({
            baseURL: "https://jsonplaceholder.typicode.com/",
            withCredentials: false,
        })
    );
    const useCase = new getAllPostsUseCase(repository);
    const posts = await useCase.execute();
    return posts;
});

interface IPostsState {
    data: IPostsDto;
    status: EStatus;
    error: string | null;
}

const initialState: IPostsState = {
    data: [],
    status: EStatus.IDLE,
    error: null,
};

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = EStatus.LOADING;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = EStatus.SUCCEEDED;
                state.data = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = EStatus.FAILED;
                state.error =
                    action.error.message || "Не удалось загрузить посты";
            });
    },
});
const { actions: postsActions, reducer: postsReducer } = postsSlice;
export { fetchPosts, postsActions, postsReducer };
