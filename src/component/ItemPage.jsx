import style from "../style/ItemPage.module.css";
import stockIcon from "../assets/images/inStock.svg";
import { BackButton, QuantityController } from "./CheckoutPage";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { mainContext } from "../App.jsx";

function ItemPage({ itemDetail }) {
    return (
        <div className={style.main}>
            <BackButton></BackButton>
            <div className={style.product}>
                <ProductImage itemDetail={itemDetail}></ProductImage>
                <ProductInfo itemDetail={itemDetail}></ProductInfo>
            </div>
        </div>
    );
}

// display product image, color and vitamins
function ProductImage({ itemDetail }) {
    const images = import.meta.glob("/src/assets/images/fruits/*.png", {
        eager: true,
        import: "default",
    });

    const name = itemDetail.name.toLowerCase();
    const imageKey = `/src/assets/images/fruits/${name}.png`;
    const src = images[imageKey];

    return (
        <div className={style.productImage}>
            <div className={style.imageHolder}>
                <img src={src}></img>
            </div>
            <div className={style.vitaminColorHolder}>
                {itemDetail.color.map((color) => {
                    return (
                        <div
                            // fetch background color dynamically
                            style={{
                                backgroundColor: `var(--color-${color.toLowerCase()})`,
                            }}
                            className={style.color}
                            key={color}
                        >
                            {color}
                        </div>
                    );
                })}

                {itemDetail.vitamin.map((vitamin) => {
                    return (
                        <div className={style.vitamin} key={vitamin}>
                            {vitamin}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

function ProductInfo({ itemDetail }) {
    const { addToCart, removeFromCart } = useContext(mainContext);
    return (
        <div className={style.productInfo}>
            {/* heading */}
            <h1 className={style.itemName}>{itemDetail.name}</h1>

            {/* contains family, inStock, price, quantity Controller */}
            <div className={style.itemInfo}>
                <h3 className={style.itemFamily}>{itemDetail.family}</h3>
                <div className={style.inStock}>
                    <img alt="image of inStock icon" src={stockIcon}></img>
                    <p>In stock</p>
                </div>
                <h3 className={style.itemPrice}>$ {itemDetail.orderPrice}</h3>
                <QuantityController item={itemDetail}></QuantityController>
            </div>

            {/* description */}
            <p className={style.itemDescription}>{itemDetail.description}</p>

            {/* buy now and add to cart button */}
            <div className={style.buttonHolder}>
                {/* buy now button */}
                <Link to="/Shopping-Cart/Checkout">
                    <button
                        onClick={() => addToCart(itemDetail.name)}
                        title="Go to checkout now"
                    >
                        Buy now
                    </button>
                </Link>

                {/* checkout button */}
                <button
                    onClick={() => {
                        {
                            itemDetail.inCart
                                ? removeFromCart(itemDetail.name)
                                : addToCart(itemDetail.name);
                        }
                    }}
                >
                    {itemDetail.inCart ? "Remove from cart" : "Add to cart"}
                </button>
            </div>
        </div>
    );
}

export default ItemPage;
