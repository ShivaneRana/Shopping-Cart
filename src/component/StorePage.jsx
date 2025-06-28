import style from "../style/StorePage.module.css";
import SideBar from "./SideBar.jsx";
import ProductShowcase from "./ProductShowcase.jsx";
import ItemPage from "./ItemPage.jsx";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { mainContext } from "../App.jsx";

function StorePage() {
    const { fruitArray } = useContext(mainContext);
    const fruits = fruitArray;

    const { name } = useParams();
    let itemDetail;

    fruits.forEach((item) => {
        if (item.name === name) {
            itemDetail = item;
        }
    });

    if (name !== undefined) {
        return <ItemPage itemDetail={itemDetail}></ItemPage>;
    } else {
        return (
            <div className={style.main}>
                <SideBar></SideBar>
                <ProductShowcase></ProductShowcase>
            </div>
        );
    }
}

export default StorePage;
