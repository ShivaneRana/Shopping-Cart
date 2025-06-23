import style from "../style/CheckoutPage.module.css";
import backIcon from "../assets/images/back.svg";
import minusIcon from "../assets/images/minus.svg";
import plusIcon from "../assets/images/plus.svg";
import deleteIcon from "../assets/images/delete.png";
import stockIcon from "../assets/images/inStock.svg";
import { Link } from "react-router-dom";
import fruits from "../Fruits.jsx";

function CheckoutPage() {
    return (
        <div className={style.main}>
            <div className={style.buttonHolder}>
                <BackButton></BackButton>
            </div>
            <h3>Shopping bag</h3>
            <div className={style.checkoutContainer}>
                <ShoppingBag></ShoppingBag>
                <OrderSummary></OrderSummary>
            </div>
        </div>
    );
}

function BackButton() {
    return (
        <Link to="/Shopping-Cart/Store">
            <button className={style.backButton}>
                <img title="Go back" alt="back icon" src={backIcon}></img>
            </button>
        </Link>
    );
}

function ShoppingBag() {
    return (
        <div className={style.shoppingBag}>
            {fruits.map((item) => {
                const images = import.meta.glob(
                    "/src/assets/images/fruits/*.png",
                    {
                        eager: true,
                        import: "default",
                    },
                );

                const name = item.name.toLowerCase();
                const imageKey = `/src/assets/images/fruits/${name}.png`;
                const src = images[imageKey];

                return (
                    <div className={style.orderContainer} key={item.name}>
                        {/* contains the product image */}
                        <div
                            title="Go to product page"
                            className={style.imageHolder}
                        >
                            <img alt="product icon" src={src}></img>
                        </div>

                        {/* contains the product detail */}
                        {/* name, family, quanitity */}
                        <div className={style.itemDetail}>
                            <h3 className={style.itemName}>{item.name}</h3>
                            <h3 className={style.itemFamily}>
                                {item.family} Family
                            </h3>
                            <div className={style.itemStock}>
                                <img src={stockIcon}></img>
                                <p>In stock</p>
                            </div>
                            <h3 className={style.itemQuantity}>
                                Qty: {item.quantity}
                            </h3>
                        </div>

                        {/* increase/ decrease product quantity */}
                        <div className={style.quantityController}>
                            <button title="Decrease quantity">
                                <img alt="minux icon" src={minusIcon}></img>
                            </button>
                            <p>{item.quantity}</p>
                            <button title="Increase quantity">
                                <img alt="plus icon" src={plusIcon}></img>
                            </button>
                        </div>

                        {/*  display price and delete button */}
                        <div className={style.priceDetail}>
                            <button title="Delete item">
                                <img alt="delete icon" src={deleteIcon}></img>
                            </button>
                            <h5>$ 90.90</h5>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

function OrderSummary() {
    return (
        <div className={style.orderSummary}>
            <div>
                <div className={style.orderSubtotal}>
                    <h3>Order Summary</h3>
                    <h3>$89.90</h3>
                    <div>
                        <p>Subtotal (5 items)</p>
                        <p>$ 12.87</p>
                    </div>
                    <div>
                        <p>GST (25%)</p>
                        <p>$ 2.87</p>
                    </div>
                </div>
                <hr></hr>
                <div className={style.orderTotal}>
                    <h3>Total</h3>
                    <h3>$ 14.12</h3>
                </div>
                <button
                    title="Complete purchase"
                    className={style.checkoutButton}
                >
                    Checkout
                </button>
            </div>
        </div>
    );
}

export default CheckoutPage;
