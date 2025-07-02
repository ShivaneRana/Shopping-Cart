import { createContext } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useImmer } from "use-immer";
import fruits from "./Fruits.jsx";
import useFilter from "./Filter.jsx";
import Navbar from "./component/Navbar.jsx";
import SideBar from "./component/SideBar.jsx";

export let mainContext = createContext();

function App() {
    const [fruitList, updateFruitList] = useImmer(fruits);
    const [displayFavourite, setDisplayFavourite] = useState(false);
    const [displayCart, setDisplayCart] = useState(false);
    const [displaySideBar, setDisplaySideBar] = useState(false);
    const windowSize = useWindowSize();
    const location = useLocation();
    const {
        filter,
        changeName,
        changeFamily,
        resetFamily,
        addColor,
        addVitamin,
        removeColor,
        removeVitamin,
        toggleFavourite,
        filterFruit,
    } = useFilter();

    const style = displaySideBar ? { left: "0px" } : { left: "-350px" };

    function toggleSideBar() {
        setDisplaySideBar((prev) => !prev);
    }

    function addToCart(targetName) {
        updateFruitList((draft) => {
            const target = draft.filter((item) => item.name === targetName)[0];
            target.inCart = true;
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
            target.inCart = false;
        });
    }

    function changeQuantity(targetName, flag = "decrease") {
        updateFruitList((draft) => {
            const target = draft.filter((item) => item.name === targetName)[0];
            flag === "increase"
                ? target.quantity++
                : target.quantity > 1
                  ? target.quantity--
                  : 1;
            target.orderPrice = Number(
                (target.price * target.quantity).toFixed(2),
            );
        });
    }

    function clearCart() {
        updateFruitList((draft) => {
            draft.forEach((item) => {
                if (item.inCart) {
                    item.inCart = false;
                    item.orderPrice = item.price;
                    item.quantity = 1;
                }
            });
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

    useEffect(() => {
        setDisplaySideBar(false);
    }, [windowSize]);

    let fruitArray;
    // ensure that filter on or off does not hinder product from showing in checkout page.
    if (location.pathname === "/Shopping-Cart/Checkout") {
        fruitArray = filterFruit(fruitList, tempFilter);
    } else {
        fruitArray = filterFruit(fruitList, filter);
    }

    return (
        <div className={style.main}>
            <mainContext.Provider
                value={{
                    filter,
                    displayFavourite,
                    displayCart,
                    fruitArray,
                    displaySideBar,
                    toggleSideBar,
                    toggleDisplayCart,
                    changeName,
                    changeFamily,
                    resetFamily,
                    addColor,
                    addVitamin,
                    removeColor,
                    removeVitamin,
                    toggleDisplayFavourite,
                    addToCart,
                    addToFavourite,
                    removeFromCart,
                    changeQuantity,
                    clearCart,
                }}
            >
                {displaySideBar && <SideBar sty={style}></SideBar>}
                <Navbar></Navbar>
                <Outlet></Outlet>
            </mainContext.Provider>
        </div>
    );
}

// temporary filter to be used when visiting checkout page
// while having filter enabled
const tempFilter = {
    name: "",
    family: "",
    vitamin: [],
    color: [],
    inCart: false,
    favourite: false,
};

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener("resize", handleResize);

        // Cleanup on unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
}

export default App;
