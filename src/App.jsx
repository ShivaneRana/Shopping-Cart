import style from "./App.module.css";
import Navbar from "./component/Navbar.jsx";
import { createContext } from "react";
import { Outlet } from "react-router-dom";
import { useFavoriteState } from "./component/Utility.jsx";

export let context = createContext();

function App() {
    const {favourite,toggleFavourite} = useFavoriteState();

    return (
        <div className={style.main}>
            <context.Provider value={{
                favourite,
                toggleFavourite
            }}>
                <Navbar></Navbar>
                <Outlet></Outlet>
            </context.Provider>
        </div>
    );
}

export default App;
