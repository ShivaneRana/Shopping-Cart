import style from "../style/ItemPage.module.css";
import { BackButton } from "./CheckoutPage";

function ItemPage({ itemDetail }) {
    console.log(itemDetail);

    return (
        <div className={style.main}>
            <div className={style.buttonHolder}>
                <BackButton></BackButton>
            </div>
        </div>
    );
}

export default ItemPage;
