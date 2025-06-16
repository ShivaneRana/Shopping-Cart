import App from "./App.jsx";
import ErrorPage from "./component/ErrorPage.jsx";

const Routes = [
    {
        path: "/Shopping-Cart",
        element: <App></App>,
        errorElement: <ErrorPage></ErrorPage>,
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>,
        errorElement: <ErrorPage></ErrorPage>,
    },
];

export default Routes;
