import { MainLayoutRoutes } from "./RouteTypes";
import Home from "../pages/Home/Home";

export const HOME_PATH = "/";

export const mainLayoutRoutes: MainLayoutRoutes = {
    routes: [
        {
            path: HOME_PATH,  
            Component: Home,
        },
    ],
};