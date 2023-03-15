import { MainLayoutRoutes } from "./RouteTypes";
import Home from "../pages/Home/Home";
import Portfolio from "../pages/Portfolio/Portfolio";
import AboutMe from "../pages/AboutMe/AboutMe";
import Contact from "../pages/Contact/Contact";

export const HOME_PATH = "/";
export const PORTFOLIO_PATH = "/MyPortfolio";
export const ABOUTME_PATH = "/AboutMe";
export const CONTACT_PATH = "/Contact";

export const mainLayoutRoutes: MainLayoutRoutes = {
    routes: [
        {
            path: HOME_PATH,  
            Component: Home,
        },
        {
            path: PORTFOLIO_PATH,  
            Component: Portfolio,
        },
        {
            path: ABOUTME_PATH,  
            Component: AboutMe,
        },
        {
            path: CONTACT_PATH,  
            Component: Contact,
        },
    ],
};