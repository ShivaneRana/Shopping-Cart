import style from "../style/ItemPage.module.css";
import { BackButton } from "./CheckoutPage";

function ItemPage({ itemDetail }) {
    console.log(itemDetail);

    return (
        <div className={style.main}>
            <div className={style.buttonHolder}>
                <BackButton></BackButton>
            </div>
            <div className={style.product}>
                <ProductImage itemDetail={itemDetail}></ProductImage>
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
                        style={{backgroundColor : `var(--color-${color.toLowerCase()})`}}
                        className={style.color}
                        key={color}>
                            {color}
                        </div>
                    );
                })}

                {itemDetail.vitamin.map((vitamin) => {
                    return (
                        <div
                        className={style.vitamin}
                        key={vitamin}>
                            {vitamin}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ItemPage;
