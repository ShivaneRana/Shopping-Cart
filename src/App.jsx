import style from "./App.module.css";
import Navbar from "./component/Navbar.jsx";
import { createContext } from "react";
import { Outlet,useLocation } from "react-router-dom";
import { useFavoriteState,useCartState } from "./utility/Utility.jsx";
import { useEffect } from "react";

export let context = createContext();

function App() {
    const { favourite, toggleFavourite } = useFavoriteState();
    const {cart,toggleCart} = useCartState();
    const location = useLocation();

    console.log(location.pathname)
    // toggle favourite to off when the url changes
    // this is to ensure that the favourite state is off when not is store root.

    useEffect(() => {
        if(location.pathname !== "/Shopping-Cart/Store" && favourite){
            toggleFavourite();
        }

        if(location.pathname !== "/Shopping-Cart/Checkout" && cart){
            toggleCart();
        }

    },[location])

    return (
        <div className={style.main}>
            <context.Provider
                value={{
                    favourite,
                    cart,
                    toggleCart,
                    toggleFavourite
                }}
            >
                <Navbar></Navbar>
                <Outlet></Outlet>
            </context.Provider>
        </div>
    );
}

export default App;
