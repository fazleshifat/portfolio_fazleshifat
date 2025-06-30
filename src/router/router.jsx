import {
    createBrowserRouter,
} from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home/Home";
import ProjectDetails from "../components/HomeComponents/ProjectSection/ProjectDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "projects/:slug",
                Component: ProjectDetails 
            }
        ]
    },
]);