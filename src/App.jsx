import style from "./App.module.css";
import Navbar from "./component/Navbar.jsx";

function App() {
    return (
        <div className={style.main}>
            <Navbar></Navbar>
        </div>
    );
}

export default App;
