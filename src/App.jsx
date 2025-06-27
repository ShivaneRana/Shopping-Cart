import style from "./App.module.css";
import Navbar from "./component/Navbar.jsx";
import { createContext } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useFavoriteState, useCartState } from "./utility/Utility.jsx";
import useFilter from "./utility/Filter.jsx";
import { useEffect } from "react";
import fruits from "./Fruits.jsx";

export let mainContext = createContext();

function App() {
    const { favourite, toggleFavourite } = useFavoriteState();
    const { cart, toggleCart } = useCartState();
    const location = useLocation();
    const {
        filter,
        tFav,
        changeName,
        changeFamily,
        addColor,
        addVitamin,
        removeColor,
        removeVitamin,
        filterFruit,
    } = useFilter();


    // toggle favourite to off when the url changes
    // this is to ensure that the favourite state is off when not is store root.
    useEffect(() => {

        if (location.pathname !== "/Shopping-Cart/Store" && favourite) {
            toggleFavourite();
        }

        if (location.pathname !== "/Shopping-Cart/Checkout" && cart) {
            toggleCart();
        }
    }, [location]);

    const fruitArray = filterFruit(fruits, filter);
    console.log("app component rendered");
    console.log(fruitArray);

    return (
        <div className={style.main}>
            <mainContext.Provider
                value={{
                    filter,
                    favourite,
                    cart,
                    fruitArray,
                    toggleCart,
                    changeName,
                    changeFamily,
                    toggleFavourite,
                }}
            >
                <Navbar></Navbar>
                <Outlet></Outlet>
            </mainContext.Provider>
        </div>
    );
}

export default App;
