import style from "../style/Navbar.module.css";
import favIconClicked from "../assets/images/favPressed.png";
import favIconNotClicked from "../assets/images/fav.png";
import cartIconNotClicked from "../assets/images/cart.png";
import cartIconClicked from "../assets/images/cartPressed.png";
import hamburgerIcon from "../assets/images/hamburger.svg";
import searchIcon from "../assets/images/search.svg";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { context } from "../App.jsx";
import { useState } from "react";

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

function Hamburger() {
    return (
        <button>
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
    return (
        <div>
            <img
                className={style.searchIcon}
                alt="search icon"
                src={searchIcon}
            ></img>
            <label htmlFor="searchFruit"></label>
            <input
                title="Search"
                type="text"
                name="searchFruit"
                placeholder="Search"
            ></input>
        </div>
    );
}

function FavouriteButton() {
    const { favourite, toggleFavourite } = useContext(context);

    return (
        <Link to="Store">
            <button
                onClick={toggleFavourite}
            >
                <img
                    title={
                        favourite
                            ? "Hide favourite items"
                            : "Display favourite items"
                    }
                    alt="favourite icon"
                    src={favourite ? favIconClicked : favIconNotClicked}
                ></img>
            </button>
        </Link>
    );
}

function CartButton() {
    const {cart,toggleCart} = useContext(context);

    return (
        <Link to="Checkout">
            <button onClick={toggleCart}>
                <img
                    title="Display Cart"
                    alt="cart icon"
                    src={cart ? cartIconClicked : cartIconNotClicked}
                ></img>
            </button>
        </Link>
    );
}

export default Navbar;
