import type { store } from "../core";

type RootState = ReturnType<typeof store.getState>;

export type { RootState };
