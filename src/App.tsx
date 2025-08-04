import { RouterProvider } from "@tanstack/react-router";
import { Provider } from "react-redux";
import "./App.css";
import { store } from "./app/config/store/core";
import { router } from "./app/router";

const App = () => {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    );
};

export default App;
