import style from "../style/Navbar.module.css";
import favIconClicked from "../assets/images/fav.png";
import favIconNotClicked from "../assets/images/notfav.png";
import cartIcon from "../assets/images/cart.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
    return (
        <div className={style.main}>
            <div className={style.leftside}>
                <Logo></Logo>
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

function Logo() {
    return (
        <Link to="/Shopping-Cart">
            <h1>EdenCrate.</h1>
        </Link>
    );
}

function HomeButton() {
    return (
        <button title="Go to home">
            <Link to="/Shopping-Cart">Home</Link>
        </button>
    );
}

function StoreButton() {
    return (
        <button title="Go to store">
            <Link to="Store">Store</Link>
        </button>
    );
}

function SearchField() {
    return (
        <>
            <label htmlFor="searchFruit"></label>
            <input
                title="Search"
                type="text"
                name="searchFruit"
                placeholder="Search"
            ></input>
        </>
    );
}

function FavouriteButton() {
    const [displayFav, setDisplayFav] = useState(false);

    function toggleFav() {
        setDisplayFav((prev) => !prev);
        console.log(!displayFav);
    }

    return (
        <button
            onClick={() => {
                toggleFav();
            }}
        >
            <img
                title={
                    displayFav
                        ? "Hide favourite icon"
                        : "Display favourite icon"
                }
                alt="favourite icon"
                src={displayFav ? favIconClicked : favIconNotClicked}
            ></img>
        </button>
    );
}

function CartButton() {
    return (
        <Link to="Checkout">
            <button>
                <img title="Display Cart" alt="cart icon" src={cartIcon}></img>
            </button>
        </Link>
    );
}

export default Navbar;
