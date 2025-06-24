import { Link } from "react-router-dom";
import style from "../style/HomePage.module.css";
import apple from "../assets/images/fruits/apple.png";
import banana from "../assets/images/fruits/banana.png";
import grape from "../assets/images/fruits/grape.png";
import pear from "../assets/images/fruits/pear.png";
import kiwi from "../assets/images/fruits/kiwi.png";
import watermelon from "../assets/images/fruits/watermelon.png";
import lime from "../assets/images/fruits/lime.png";
import { useState } from "react";
import { useEffect } from "react";
import { uuidv7 } from "uuidv7";

function HomePage() {
    return (
        <div className={style.main}>
            <WelcomeText></WelcomeText>
            <ShopButton></ShopButton>
            <Carousel></Carousel>
        </div>
    );
}

function WelcomeText() {
    return (
        <div className={style.welcomeText}>
            <h1>Welcome to EdenCrate.</h1>
            <p>
                Welcome to your online fruit store.Enjoy the freshest fruits
                delivered right to your doorstep.
            </p>
        </div>
    );
}

function ShopButton() {
    return (
        <Link to="Store" className={style.shopButton}>
            <button title="Shop now">Shop Now</button>
        </Link>
    );
}

function Carousel() {
    const [showArray, setShowArray] = useState([0, 1, 2]);
    const interval = 1500;

    function incrementShowArray() {
        let [a, b, c] = showArray;

        a === fruitsArray.length - 1 ? (a = 0) : a++;
        b === fruitsArray.length - 1 ? (b = 0) : b++;
        c === fruitsArray.length - 1 ? (c = 0) : c++;

        setShowArray([a, b, c]);
    }

    useEffect(() => {
        const time = setInterval(() => {
            incrementShowArray();
        }, interval);

        return () => {
            clearInterval(time);
        };
    }, [showArray]);

    return (
        <div className={style.carousel}>
            <div className={style.mainContainer}>
                {showArray.map((item) => {
                    const element = fruitsArray[item];
                    const tempUUID = uuidv7();
                    return (
                        <Link
                            to={
                                "/Shopping-Cart/Store/" + fruitsArray[item].name
                            }
                            key={tempUUID}
                        >
                            <div
                                title={element.name}
                                className={style.fruitCard}
                            >
                                <img alt="fruits icon" src={element.path}></img>
                                <p>{element.name}</p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

const fruitsArray = [
    { name: "Apple", path: apple },
    { name: "Pear", path: pear },
    { name: "Banana", path: banana },
    { name: "Grape", path: grape },
    { name: "Kiwi", path: kiwi },
    { name: "Watermelon", path: watermelon },
    { name: "Lime", path: lime },
];

export default HomePage;
