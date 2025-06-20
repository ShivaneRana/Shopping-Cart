import style from "../style/ProductShowcase.module.css";
import tempImage from "../assets/images/fruits/apple.png";
import fruits from "../Fruits.jsx";
import cartIcon from "../assets/images/cart.png";
import cartPressedIcon from "../assets/images/cartPressed.png";

function ProductShowcase() {
    return (
        <div className={style.main}>
            <div className={style.headingHolder}>
                <h2>Items ({fruits.length})</h2>
            </div>
            <div className={style.productHolder}>
                {fruits.map((item) => {
                    return (
                        <ProductItem
                            itemDetails={item}
                            key={item.name}
                        ></ProductItem>
                    );
                })}
            </div>
        </div>
    );
}

function ProductItem({ itemDetails }) {
    const images = import.meta.glob('/src/assets/images/fruits/*.png', {
        eager: true, 
        import: 'default',
    });

    const name = (itemDetails.name).toLowerCase();
    const imageKey = `/src/assets/images/fruits/${name}.png`;
    const src = images[imageKey];

    return (
        <div className={style.productItem}>
            <div className={style.imageHolder}>
                <img src={src}></img>
            </div>
            <div className={style.nameHolder}>
                <h2>{itemDetails.name}</h2>
                <h3>{itemDetails.family} Family</h3>
            </div>
            <div className={style.priceHolder}>
                <h3>$ {itemDetails.price}</h3>
                <img alt="Cart icon" src={cartIcon}></img>
            </div>
        </div>
    );
}

export default ProductShowcase;
