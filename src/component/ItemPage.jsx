import style from "../style/ItemPage.module.css";

function ItemPage({ itemDetail }) {
    return (
    <div className={style.main}>
        <h2>{itemDetail.name || "An error has occurred"}</h2>
    </div>
    );
}

export default ItemPage;
