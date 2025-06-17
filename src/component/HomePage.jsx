import { Link } from "react-router-dom";
import style from "../style/HomePage.module.css";

function HomePage() {
    return (
        <div className={style.main}>
            <WelcomeText></WelcomeText>
            <ShopButton></ShopButton>
            <Carousel></Carousel>
        </div>
    );
}

function WelcomeText(){
    return(
        <div className={style.welcomeText}>
            <h1>Welcome to EdenCrate.</h1>
            <p>Welcome to your online fruit store.Enjoy the freshest fruits delivered right to your doorstep.</p>
        </div>
    )
}

function ShopButton(){
    return(
        <Link to="Store" className={style.shopButton}>
            <button>
                Shop Now
            </button>
        </Link>
    )
}

function Carousel(){
    return(
        <div className={style.carousel}>
            <div className={style.mainPart}>

            </div>
            <div className={style.secondaryPart}>

            </div>
        </div>
    )
}




export default HomePage;