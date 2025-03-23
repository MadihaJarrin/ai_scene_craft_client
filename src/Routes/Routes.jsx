import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Text from "../Pages/Home/Content/Text";
import Generate from "../Pages/Home/Content/Generate";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/prompt",
                element: <Text></Text>,
            },
            {
                path: "/generateImg",
                element: <Generate></Generate>,
            }
        ]
    },
]);