import style from "../style/CheckoutPage.module.css";
import backIcon from "../assets/images/back.svg";
import minusIcon from "../assets/images/minus.svg";
import plusIcon from "../assets/images/plus.svg";
import deleteIcon from "../assets/images/delete.png";
import stockIcon from "../assets/images/inStock.svg";
import { Link } from "react-router-dom";
import { mainContext } from "../App";
import { useContext } from "react";

function CheckoutPage() {
    return (
        <div className={style.main}>
            <BackButton></BackButton>
            <h3>Shopping bag</h3>
            <div className={style.checkoutContainer}>
                <ShoppingBag></ShoppingBag>
                <OrderSummary></OrderSummary>
            </div>
        </div>
    );
}

export function BackButton() {
    return (
        <Link to="/Shopping-Cart/Store">
            <button className={style.backButton}>
                <img title="Go back" alt="back icon" src={backIcon}></img>
            </button>
        </Link>
    );
}

function ShoppingBag() {
    const { fruitArray } = useContext(mainContext);
    const fruits = fruitArray.filter((product) => product.inCart === true);

    return (
        <div className={style.shoppingBag}>
            {fruits.length === 0 ? (
                <p className={style.emptyCartText}>Cart is empty.</p>
            ) : (
                fruits.map((item) => {
                    return (
                        <ShoppingItem
                            key={item.name}
                            item={item}
                        ></ShoppingItem>
                    );
                })
            )}
        </div>
    );
}

function ShoppingItem({ item }) {
    const images = import.meta.glob("/src/assets/images/fruits/*.png", {
        eager: true,
        import: "default",
    });

    const name = item.name.toLowerCase();
    const imageKey = `/src/assets/images/fruits/${name}.png`;
    const src = images[imageKey];
    const location = "/Shopping-Cart/Store/" + item.name;

    return (
        <div className={style.orderContainer} key={item.name}>
            {/* contains the product image */}
            <div className={style.holderDiv}>
                <ProductImage location={location} src={src}></ProductImage>
                <div className={style.infoDiv}>
                    {/* contains the product detail */}
                    {/* name, family, quanitity */}
                    <ItemDetail item={item}></ItemDetail>

                    {/* increase/ decrease product quantity */}
                    <QuantityController item={item}></QuantityController>
                </div>
            </div>

            {/*  display price and delete button */}
            <PriceDetail item={item}></PriceDetail>
        </div>
    );
}

function ProductImage({ location, src }) {
    return (
        <Link to={location}>
            <div title="Go to product page" className={style.imageHolder}>
                <img alt="product icon" src={src}></img>
            </div>
        </Link>
    );
}

function ItemDetail({ item }) {
    return (
        <div className={style.itemDetail}>
            <h3 className={style.itemName}>{item.name}</h3>
            <h3 className={style.itemFamily}>{item.family} Family</h3>
            <div className={style.itemStock}>
                <img src={stockIcon}></img>
                <p>In stock</p>
            </div>
        </div>
    );
}

export function QuantityController({ item }) {
    const { changeQuantity } = useContext(mainContext);

    return (
        <div className={style.quantityController}>
            <h3 className={style.itemQuantity}>Qty: </h3>
            <div>
                <button
                    onClick={() => {
                        changeQuantity(item.name);
                    }}
                    title="Decrease quantity"
                >
                    <img alt="minux icon" src={minusIcon}></img>
                </button>
                <p>{item.quantity}</p>
                <button
                    onClick={() => {
                        changeQuantity(item.name, "increase");
                    }}
                    title="Increase quantity"
                >
                    <img alt="plus icon" src={plusIcon}></img>
                </button>
            </div>
        </div>
    );
}

function PriceDetail({ item }) {
    const { removeFromCart } = useContext(mainContext);

    return (
        <div className={style.priceDetail}>
            <button
                onClick={() => {
                    removeFromCart(item.name);
                }}
                title="Remove from cart"
            >
                <img alt="delete icon" src={deleteIcon}></img>
            </button>
            <h5>$ {item.orderPrice}</h5>
        </div>
    );
}

function OrderSummary() {
    const { fruitArray, clearCart } = useContext(mainContext);

    let inCartFruit = fruitArray.filter((item) => item.inCart === true);
    let itemTotal = 0;
    let gstTotal = 0;
    let itemNumber = inCartFruit.length;
    let gstPercentage = 25;
    let gst = 0;
    let alertText;

    for (let item of inCartFruit) {
        itemTotal += item.orderPrice;
    }

    itemTotal = Number(itemTotal.toFixed(2));
    gst = Number(((itemTotal / 100) * gstPercentage).toFixed(2));
    gstTotal = Number((itemTotal + gst).toFixed(2));
    alertText =
        itemTotal !== 0
            ? "Congratulations! You would have made a successful purchase if this was a real store 😁"
            : "Cannot proceed with checkout. Your bag is empty.";

    return (
        <div className={style.orderSummary}>
            <div>
                <div className={style.orderSubtotal}>
                    <h3>Order Summary</h3>
                    {/* return total after GST */}
                    <h3>$ {gstTotal}</h3>
                    <div>
                        {/* return actual total of the product */}
                        <p>Subtotal ({itemNumber} items)</p>
                        <p>$ {itemTotal}</p>
                    </div>
                    <div>
                        {/* return GST st on the product total */}
                        <p>GST ({gstPercentage}%)</p>
                        <p>$ {gst}</p>
                    </div>
                </div>
                <hr></hr>
                <div className={style.orderTotal}>
                    {/* return total after GST */}
                    <h3>Total</h3>
                    <h3>$ {gstTotal}</h3>
                </div>
                <button
                    onClick={() => {
                        alert(alertText);
                        if (itemTotal !== 0) {
                            clearCart();
                        }
                    }}
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
