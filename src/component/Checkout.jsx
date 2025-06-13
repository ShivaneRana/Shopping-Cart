import style from "../style/Checkout.module.css";
import { Link } from "react-router-dom";

function Checkout(){
    return(
        <div className={style}>
            <Link to="/">
                <button>
                    Go to the home page.
                </button>
            </Link>
            <h1>This is the checkout page.</h1>
        </div>
    )
}

export default Checkout;