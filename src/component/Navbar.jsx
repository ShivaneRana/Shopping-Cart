import style from "../style/Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className={style.main}>
            <div className={style.leftside}>
                <button>
                    <h1>EdenCrate.</h1>
                </button>
                <button>
                    <Link>Home</Link>
                </button>
                <button>
                    <Link>Store</Link>
                </button>
            </div>
            <div className={style.rightside}>
                <label htmlFor="searchFruit"></label>
                <input
                    type="text"
                    name="searchFruit"
                    placeholder="Search"
                ></input>
                <div>
                    <button>
                        <img></img>
                        <img></img>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
