import style from "../style/StorePage.module.css";
import SideBar from "./SideBar.jsx";
import ProductShowcase from "./ProductShowcase.jsx";

function StorePage() {
    return (
        <div className={style.main}>
            <SideBar></SideBar>
            <ProductShowcase></ProductShowcase>
        </div>
    );
}

export default StorePage;
