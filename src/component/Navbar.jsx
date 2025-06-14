import style from "../style/Navbar.module.css";
import favIconClicked from "../assets/images/fav.png";
import favIconNotClicked from "../assets/images/notfav.png";
import cartIcon from "../assets/images/cart.png";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className={style.main}>
            <div className={style.leftside}>
                <h1>EdenCrate.</h1>
                <div>
                    <HomeButton></HomeButton>
                    <StoreButton></StoreButton>
                </div>
            </div>
            <div className={style.rightside}>
                <SearchField></SearchField>
                <div>
                    <FavouriteButton></FavouriteButton>
                    <CartButton></CartButton>
                </div>
            </div>
        </div>
    );
}

function HomeButton() {
    return (
        <button>
            <Link>Home</Link>
        </button>
    );
}

function StoreButton() {
    return (
        <button>
            <Link>Store</Link>
        </button>
    );
}

function SearchField() {
    return (
        <>
            <label htmlFor="searchFruit"></label>
            <input type="text" name="searchFruit" placeholder="Search"></input>
        </>
    );
}

function FavouriteButton() {
    return (
        <button>
            <img src={favIconNotClicked}></img>
        </button>
    );
}

function CartButton() {
    return (
        <button>
            <img src={cartIcon}></img>
        </button>
    );
}

export default Navbar;
