import style from "../style/Navbar.module.css";
import favIconClicked from "../assets/images/favPressed.png";
import favIconNotClicked from "../assets/images/fav.png";
import cartIconNotClicked from "../assets/images/cart.png";
import cartIconClicked from "../assets/images/cartPressed.png";
import hamburgerIcon from "../assets/images/hamburger.svg";
import searchIcon from "../assets/images/search.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { mainContext } from "../App.jsx";

function Navbar() {
    const location = useLocation();

    return (
        <div className={style.main}>
            <div className={style.leftside}>
                <Logo></Logo>
                {/* display hamburger menu only when the path is at store page */}
                {location.pathname === "/Shopping-Cart/Store" ? (
                    <Hamburger></Hamburger>
                ) : null}
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

export function Hamburger() {
    const { toggleSideBar } = useContext(mainContext);

    return (
        <button onClick={toggleSideBar}>
            <img alt="icon for hamburger menu" src={hamburgerIcon}></img>
        </button>
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
    const navigate = useNavigate();
    const { filter, changeName } = useContext(mainContext);

    return (
        <div>
            <img
                className={style.searchIcon}
                alt="search icon"
                src={searchIcon}
            ></img>
            <label htmlFor="searchFruit"></label>
            <input
                value={filter.name}
                onFocus={() => {
                    navigate("/Shopping-Cart/Store");
                }}
                onChange={(e) => {
                    changeName(e.target.value);
                }}
                name="searchFruit"
                title="Search"
                type="text"
                placeholder="Search"
            ></input>
        </div>
    );
}

function FavouriteButton() {
    const { displayFavourite, toggleDisplayFavourite } =
        useContext(mainContext);

    return (
        <Link to="Store">
            <button onClick={toggleDisplayFavourite}>
                <img
                    title={
                        displayFavourite
                            ? "Hide favourite items"
                            : "Display favourite items"
                    }
                    alt="favourite icon"
                    src={displayFavourite ? favIconClicked : favIconNotClicked}
                ></img>
            </button>
        </Link>
    );
}

function CartButton() {
    const { displayCart, toggleDisplayCart } = useContext(mainContext);
    const location = useLocation();

    return (
        <Link to="Checkout">
            <button onClick={toggleDisplayCart}>
                <img
                    title="Display Cart"
                    alt="cart icon"
                    // honestly i put location.pathname so that clicking cartIcon while in checkout page wont toggle this
                    // could remove displayCart but then thought it would'nt hurt to keep it. right?
                    src={
                        location.pathname === "/Shopping-Cart/Checkout" ||
                        displayCart
                            ? cartIconClicked
                            : cartIconNotClicked
                    }
                ></img>
            </button>
        </Link>
    );
}

export default Navbar;
