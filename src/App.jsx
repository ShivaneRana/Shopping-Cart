import style from "./App.module.css";
import Navbar from "./component/Navbar.jsx";
import { createContext } from "react";
import { Outlet, useLocation } from "react-router-dom";
import useFilter from "./Filter.jsx";
import { useEffect, useState } from "react";
import fruits from "./Fruits.jsx";

export let mainContext = createContext();

function App() {
    const [displayFavourite, setDisplayFavourite] = useState(false);
    const [displayCart, setDisplayCart] = useState(false);
    const location = useLocation();
    const {
        filter,
        changeName,
        changeFamily,
        addColor,
        addVitamin,
        removeColor,
        removeVitamin,
        toggleFavourite,
        filterFruit,
    } = useFilter();

    function toggleDisplayFavourite() {
        setDisplayFavourite((prev) => !prev);
        toggleFavourite();
    }

    function toggleDisplayCart() {
        setDisplayCart((prev) => !prev);
    }

    // toggle favourite to off when the url changes
    // this is to ensure that the favourite state is off when not is store root.
    useEffect(() => {
        if (location.pathname !== "/Shopping-Cart/Store" && displayFavourite) {
            toggleDisplayFavourite();
        }

        if (location.pathname !== "/Shopping-Cart/Checkout" && displayCart) {
            toggleDisplayCart();
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
                    displayFavourite,
                    displayCart,
                    fruitArray,
                    toggleDisplayCart,
                    changeName,
                    changeFamily,
                    toggleDisplayFavourite,
                }}
            >
                <Navbar></Navbar>
                <Outlet></Outlet>
            </mainContext.Provider>
        </div>
    );
}

export default App;
