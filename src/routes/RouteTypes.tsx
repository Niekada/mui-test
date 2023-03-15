export type MainLayoutRoutes = {
    routes: {
        path: "/" | "/MyPortfolio" | "/AboutMe" | "/Contact";
        Component: () => JSX.Element;
    }[]
};