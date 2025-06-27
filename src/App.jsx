import { createContext } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useImmer } from "use-immer";
import fruits from "./Fruits.jsx";
import useFilter from "./Filter.jsx";
import style from "./App.module.css";
import Navbar from "./component/Navbar.jsx";

export let mainContext = createContext();

function App() {
    const [fruitList, updateFruitList] = useImmer(fruits);
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

    function addToCart(targetName) {
        updateFruitList((draft) => {
            const target = draft.filter((item) => item.name === targetName)[0];
            target.inCart = !target.inCart;
        });
    }

    function addToFavourite(targetName) {
        updateFruitList((draft) => {
            const target = draft.filter((item) => item.name === targetName)[0];
            target.favourite = !target.favourite;
        });
    }

    function removeFromCart(targetName) {
        updateFruitList((draft) => {
            const target = draft.filter((item) => item.name === targetName)[0];
            if (!target.inCart) {
                addToCart();
            }
        });
    }

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

    const fruitArray = filterFruit(fruitList, filter);
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
                    addToCart,
                    addToFavourite,
                    removeFromCart,
                }}
            >
                <Navbar></Navbar>
                <Outlet></Outlet>
            </mainContext.Provider>
        </div>
    );
}

export default App;
