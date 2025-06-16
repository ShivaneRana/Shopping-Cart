import App from "./App.jsx";
import Checkout from "./component/Checkout.jsx";
import ItemPage from "./component/ItemPage.jsx";
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
