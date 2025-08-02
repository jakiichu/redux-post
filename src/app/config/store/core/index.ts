import { postsReducer } from "@/app/module/post/reducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        posts: postsReducer,
    },
});

export { store };
