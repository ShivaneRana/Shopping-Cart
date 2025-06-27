import style from "../style/ProductShowcase.module.css";
import cartIcon from "../assets/images/cart.png";
import cartPressedIcon from "../assets/images/cartPressed.png";
import favPressedIcon from "../assets/images/heartClicked.png";
import favIcon from "../assets/images/heartNotClicked.png";
import { mainContext } from "../App.jsx";
import { useContext } from "react";
import { Link } from "react-router-dom";

function ProductShowcase() {
    const { displayFavourite, fruitArray } = useContext(mainContext);
    const fruits = fruitArray;

    return (
        <div className={style.main}>
            <div className={style.headingHolder}>
                <h2>
                    Items ({fruits.length}){" "}
                    {displayFavourite && <span> — Favourites</span>}
                </h2>
            </div>
            <div className={style.productHolder}>
                {fruits.map((item) => {
                    return (
                        <ProductItem
                            itemDetails={item}
                            key={item.name}
                        ></ProductItem>
                    );
                })}
            </div>
        </div>
    );
}

function ProductItem({ itemDetails }) {
    const { addToCart, addToFavourite } = useContext(mainContext);
    const favClicked = itemDetails.favourite;
    const cartClicked = itemDetails.inCart;

    const images = import.meta.glob("/src/assets/images/fruits/*.png", {
        eager: true,
        import: "default",
    });

    const name = itemDetails.name.toLowerCase();
    const imageKey = `/src/assets/images/fruits/${name}.png`;
    const src = images[imageKey];
    const location = "/Shopping-Cart/Store/" + itemDetails.name;

    return (
        <Link to={location}>
            <div className={style.productItem}>
                <button
                    className={style.favButton}
                    title={
                        favClicked
                            ? "Remove from favourite"
                            : "Add to favourite"
                    }
                    // add/remove to/from favourite
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        addToFavourite(itemDetails.name);
                    }}
                >
                    <img
                        alt="image of an heart"
                        src={favClicked ? favPressedIcon : favIcon}
                    ></img>
                </button>
                <div className={style.imageHolder}>
                    <img src={src}></img>
                </div>
                <div className={style.nameHolder}>
                    <h2>{itemDetails.name}</h2>
                    <h3>{itemDetails.family} Family</h3>
                </div>
                <div className={style.priceHolder}>
                    <h3>$ {itemDetails.price}</h3>
                    <button
                        title={cartClicked ? "Remove from cart" : "Add to cart"}
                        // add/remove to/from cart
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            addToCart(itemDetails.name);
                        }}
                    >
                        <img
                            alt="Cart icon"
                            src={cartClicked ? cartPressedIcon : cartIcon}
                        ></img>
                    </button>
                </div>
            </div>
        </Link>
    );
}

export default ProductShowcase;
