import App from "./App.jsx";
import CheckoutPage from "./component/CheckoutPage.jsx";
import ErrorPage from "./component/ErrorPage.jsx";
import HomePage from "./component/HomePage.jsx";
import StorePage from "./component/StorePage.jsx";

const Routes = [
    {
        path: "/Shopping-Cart",
        element: <App></App>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                element: <HomePage></HomePage>,
            },
            {
                path: "Store",
                element: <StorePage></StorePage>,
            },
            {
                path: "Checkout",
                element: <CheckoutPage></CheckoutPage>,
            },
        ],
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>,
        errorElement: <ErrorPage></ErrorPage>,
    },
];

export default Routes;
