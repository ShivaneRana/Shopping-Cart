import style from "../style/CheckoutPage.module.css";
import backIcon from "../assets/images/back.svg";
import { Link } from "react-router-dom";

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
    return <div className={style.shoppingBag}></div>;
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
                <button className={style.checkoutButton}>Checkout</button>
            </div>
        </div>
    );
}

export default CheckoutPage;
