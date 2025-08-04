import { createRootRoute, createRouter, Outlet } from "@tanstack/react-router";
import { postsRoute } from "../module/posts/route";

const rootRoute = createRootRoute({
    component: () => (
        <div>
            <Outlet />
        </div>
    ),
});

const routeTree = rootRoute.addChildren([postsRoute(rootRoute)]);

const router = createRouter({ routeTree });

export { rootRoute, router };
