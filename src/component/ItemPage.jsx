import style from "../style/ItemPage.module.css";
import { Link } from "react-router-dom";

function ItemPage(){
    return(
        <div className={style}>
            <Link to="/">
                <button>
                    Go back to the home page.
                </button>
            </Link>
            <Link to="/checkout">
                <button>
                    Go back to the checkout page.
                </button>
            </Link>
        </div>
    )
}

export default ItemPage;