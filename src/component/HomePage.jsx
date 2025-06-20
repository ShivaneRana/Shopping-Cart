import { Link } from "react-router-dom";
import style from "../style/HomePage.module.css";
import apple from "../assets/images/fruits/apple.png";
import banana from "../assets/images/fruits/banana.png";
import grape from "../assets/images/fruits/grape.png";
import pear from "../assets/images/fruits/pear.png";
import kiwi from "../assets/images/fruits/kiwi.png";
import watermelon from "../assets/images/fruits/watermelon.png";
import lime from "../assets/images/fruits/lime.png";
// import nextIcon from "../assets/images/next.png";
// import previousIcon from "../assets/images/previous.png";
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
            <button title="Show now">Shop Now</button>
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

    function decrementShowArray() {
        let [a, b, c] = showArray;

        a === 0 ? (a = 6) : a--;
        b === 0 ? (b = 6) : b--;
        c === 0 ? (c = 6) : c--;

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
                {/* <button title="Previous" onClick={decrementShowArray}>
                    <img
                        alt="icon for displaying previous sets of images"
                        src={previousIcon}
                    ></img>
                </button> */}
                {showArray.map((item) => {
                    const element = fruitsArray[item];
                    const tempUUID = uuidv7();
                    return (
                        <div
                            key={tempUUID}
                            title={element.name}
                            className={style.fruitCard}
                        >
                            <img alt="fruits icon" src={element.path}></img>
                            <p>{element.name}</p>
                        </div>
                    );
                })}
                {/* <button title="Next" onClick={incrementShowArray}>
                    <img
                        alt="icon for displaying next sets of images"
                        src={nextIcon}
                    ></img>
                </button> */}
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
