import { postsReducer } from "@/app/module/posts/case/reducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        posts: postsReducer,
    },
});

export { store };
