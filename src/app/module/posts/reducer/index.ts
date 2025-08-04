import { MAIN_INSTANCE_API } from "@/data/instance/main";
import { PostRepository } from "@/data/repository/post";
import { EStatus } from "@/domain/enum/common/fetch-status";

import { getAllPostsUseCase } from "@/domain/use-case/post/get-all";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { initialState } from "../case/initial-state";

const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
    const repository = new PostRepository(MAIN_INSTANCE_API);
    const useCase = new getAllPostsUseCase(repository);
    const posts = await useCase.execute();
    return posts;
});

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
