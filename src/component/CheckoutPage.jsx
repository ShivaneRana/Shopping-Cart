import style from "../style/CheckoutPage.module.css";
import backIcon from "../assets/images/back.svg";
import { Link } from "react-router-dom";

function CheckoutPage() {
    return (
        <div className={style.main}>
            <div className={style.buttonHolder}>
                <BackButton></BackButton>
            </div>
        </div>
    );
}

function BackButton(){
    return(
        <Link to="/Shopping-Cart/Store">
            <button className={style.backButton}>
                <img title="Go back" alt="back icon" src={backIcon}></img>
            </button>
        </Link>
    )
}

export default CheckoutPage;
