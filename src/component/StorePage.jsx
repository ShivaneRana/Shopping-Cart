import style from "../style/StorePage.module.css";
import SideBar from "./SideBar.jsx";
import ProductShowcase from "./ProductShowcase.jsx";
import fruits from "../Fruits.jsx";
import ItemPage from "./ItemPage.jsx";
import { useParams } from "react-router-dom";

function StorePage() {
    const {name} = useParams();
    let itemDetail;

    fruits.forEach(item => {
        if(item.name === name){
            itemDetail = item;
        }
    })

    return (
        <div className={style.main}>
            {
                // if param exists render item page
                name !== undefined ? (
                    <ItemPage itemDetail={itemDetail}></ItemPage>
                ) : (
                    // by default without any param render store
                    <>
                        <SideBar></SideBar>
                        <ProductShowcase></ProductShowcase>
                    </>
                )
            }
        </div>
    );
}

export default StorePage;
