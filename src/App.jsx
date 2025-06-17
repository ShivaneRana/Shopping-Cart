import style from "./App.module.css";
import Navbar from "./component/Navbar.jsx";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <div className={style.main}>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
}

export default App;
