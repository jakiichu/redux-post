import {createSlice} from "@reduxjs/toolkit";
import {postsFetch} from "./posts.fetch.ts";
import type {IPostsDto} from "@/shared/api/repsoitory/posts";
import type {IBaseReduxObject} from "@/shared/interface/common/redux";

const initialState: IBaseReduxObject<IPostsDto> = {
    data: {
        posts: [],
        total: 0,
        skip: 0,
        limit: 10
    },
    loading: false,
    error: null,
}

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        clearPostStore: (state) => {
            state.data = initialState.data
        }
    },
    extraReducers: (builder) => builder
        .addCase(postsFetch.pending, (state) => {
            state.loading = true
            state.error = null
        })
        .addCase(postsFetch.fulfilled, (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = null
        })
        .addCase(postsFetch.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload ?? null
        }),
})

export const {clearPostStore} = postsSlice.actions
export default postsSlice.reducer
