import { createRoute, type RootRoute } from "@tanstack/react-router";
import { PostsPage } from "../component";

const postsRoute = (rootRoute: RootRoute) =>
    createRoute({
        getParentRoute: () => rootRoute,
        path: "/",
        component: PostsPage,
    });

export { postsRoute };
