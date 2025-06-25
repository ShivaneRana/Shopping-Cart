import style from "../style/ItemPage.module.css";
import Navbar from "./Navbar";

function ItemPage({ itemDetail }) {
    return (
    <div className={style.main}>
        <Navbar></Navbar>
        <h2>{itemDetail.name || "SHivane Rana was here"}</h2>
    </div>
    );
}

export default ItemPage;
