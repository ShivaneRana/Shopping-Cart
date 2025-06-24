import style from "./App.module.css";
import Navbar from "./component/Navbar.jsx";
import { createContext } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useFavoriteState, useCartState } from "./utility/Utility.jsx";
import { useEffect } from "react";

export let context = createContext();

function App() {
    const { favourite, toggleFavourite } = useFavoriteState();
    const { cart, toggleCart } = useCartState();
    const location = useLocation();

    console.log(location.pathname);
    // toggle favourite to off when the url changes
    // this is to ensure that the favourite state is off when not is store root.

    useEffect(() => {
        if (location.pathname !== "/Shopping-Cart/Store" && favourite) {
            toggleFavourite();
        }

        if (location.pathname !== "/Shopping-Cart/Checkout" && cart) {
            toggleCart();
        }
    }, [location]);

    return (
        <div className={style.main}>
            <context.Provider
                value={{
                    favourite,
                    cart,
                    toggleCart,
                    toggleFavourite,
                }}
            >
                <Navbar></Navbar>
                <Outlet></Outlet>
            </context.Provider>
        </div>
    );
}

export default App;

const fruits = [
    {
        name: "Apple",
        price: 2.85,
        family: "Rose",
        vitamin: ["Vitamin B", "Vitamin K"],
        color: ["red"],
        inCart: false,
        favourite: false,
        quantity: 1,
        description:
            "Apples are crisp, juicy fruits. They come in various colors and flavors, ranging from sweet to tart. Apples are often eaten raw, used in baking, and pressed into cider.",
    },
    {
        name: "Apricot",
        price: 4.16,
        family: "Rose",
        vitamin: ["Vitamin A", "Vitamin C"],
        color: ["orange", "red"],
        inCart: false,
        favourite: false,
        quantity: 1,
        description:
            "Apricots are small, orange fruits known for their velvety skin and sweet-tart flavor. They are commonly eaten fresh, dried, or used in jams and desserts.",
    },
    {
        name: "Avocado",
        price: 4.02,
        family: "Avocado",
        vitamin: ["Vitamin B", "Vitamin C"],
        color: ["yellow"],
        inCart: false,
        favourite: false,
        quantity: 1,
        description:
            "Avocados are creamy, nutrient-dense fruits. Rich in healthy fats and vitamins, they are often used in salads, spreads, and dips like guacamole.",
    },
    {
        name: "Banana",
        price: 3.51,
        family: "Banana",
        vitamin: ["Vitamin A", "Vitamin C"],
        color: ["red"],
        inCart: false,
        favourite: false,
        quantity: 1,
        description:
            "Bananas are elongated, sweet fruits. They are a convenient snack, rich in potassium and energy-boosting carbohydrates.",
    },
    {
        name: "Blackberry",
        price: 3.12,
        family: "Rose",
        vitamin: ["Vitamin D", "Vitamin A"],
        color: ["yellow"],
        inCart: false,
        favourite: false,
        quantity: 1,
        description:
            "Blackberries are dark purple to black fruits. They have a sweet-tart flavor and are commonly used in desserts, jams, and smoothies.",
    },
    {
        name: "Blueberry",
        price: 1.19,
        family: "Berry",
        vitamin: ["Vitamin A", "Vitamin C"],
        color: ["green"],
        inCart: false,
        favourite: false,
        quantity: 1,
        description:
            "Blueberries are small, round fruits known for their sweet flavor and deep blue color. They are rich in antioxidants and widely used in baking and snacks.",
    },
    {
        name: "Cherry",
        price: 3.81,
        family: "Rose",
        vitamin: ["Vitamin B", "Vitamin C"],
        color: ["orange", "red"],
        inCart: false,
        favourite: false,
        quantity: 1,
        description:
            "Cherries are small, round fruits with a sweet or tart flavor. They are enjoyed fresh, in pies, or preserved as jams.",
    },
    {
        name: "Dragon-fruit",
        price: 4.36,
        family: "Others",
        vitamin: ["Vitamin D", "Vitamin A"],
        color: ["red", "green"],
        inCart: false,
        favourite: false,
        quantity: 1,
        description:
            "Dragon fruit, or pitaya, has a striking appearance with a spiky skin and sweet, mildly tangy flesh speckled with black seeds.",
    },
    {
        name: "Fig",
        price: 3.21,
        family: "Others",
        vitamin: ["Vitamin B", "Vitamin K"],
        color: ["red", "green"],
        inCart: false,
        favourite: false,
        quantity: 1,
        description:
            "Figs are sweet, pear-shaped fruits with a soft texture and many tiny seeds. They are eaten fresh, dried, or used in baking and preserves.",
    },
    {
        name: "Grape",
        price: 3.36,
        family: "Grape",
        vitamin: ["Vitamin A", "Vitamin C"],
        color: ["green"],
        inCart: false,
        favourite: false,
        quantity: 1,
        description:
            "Grapes are small, juicy fruits. Available in various colors, they are eaten fresh, dried into raisins, or used to make juice and wine.",
    },
    {
        name: "Grapefruit",
        price: 1.32,
        family: "Citrus",
        vitamin: ["Vitamin D", "Vitamin A"],
        color: ["yellow", "green"],
        inCart: false,
        favourite: false,
        quantity: 1,
        description:
            "Grapefruits are large, tart citrus fruits. They are enjoyed for their juicy segments and are commonly eaten fresh or juiced.",
    },
    {
        name: "Kiwi",
        price: 3.35,
        family: "Others",
        vitamin: ["Vitamin B", "Vitamin K"],
        color: ["orange", "red"],
        inCart: false,
        favourite: false,
        quantity: 1,
        description:
            "Kiwis are small, fuzzy fruits with bright green or golden flesh and a unique sweet-tart flavor.",
    },
    {
        name: "Lemon",
        price: 1.59,
        family: "Citrus",
        vitamin: ["Vitamin C", "Vitamin E"],
        color: ["yellow"],
        inCart: false,
        favourite: false,
        quantity: 1,
        description:
            "Lemons are bright yellow citrus fruits known for their sour taste and high vitamin C content. They are widely used in cooking and beverages.",
    },
    {
        name: "Lime",
        price: 4.33,
        family: "Citrus",
        vitamin: ["Vitamin D", "Vitamin A"],
        color: ["yellow", "green"],
        inCart: false,
        favourite: false,
        quantity: 1,
        description:
            "Limes are small, green citrus fruits with a tart flavor. They are essential in many dishes and drinks for their zest and acidity.",
    },
    {
        name: "Mango",
        price: 4.09,
        family: "Tropical",
        vitamin: ["Vitamin B", "Vitamin C"],
        color: ["yellow", "green"],
        inCart: false,
        favourite: false,
        quantity: 1,
        description:
            "Mangoes are juicy, tropical fruits. Their sweet, rich flesh is enjoyed fresh, in smoothies, or used in cooking and desserts.",
    },
    {
        name: "Mangosteen",
        price: 3.9,
        family: "Tropical",
        vitamin: ["Vitamin A", "Vitamin C"],
        color: ["purple"],
        inCart: false,
        favourite: false,
        quantity: 1,
        description:
            "Mangosteens are tropical fruits with a thick purple rind and juicy, white inner segments. They have a unique sweet-tart flavor.",
    },
    {
        name: "Melon",
        price: 4.81,
        family: "Gourd",
        vitamin: ["Vitamin A", "Vitamin C"],
        color: ["red"],
        inCart: false,
        favourite: false,
        quantity: 1,
        description:
            "Melon refers to various fruits including cantaloupe, honeydew, and watermelon. They are known for their sweet, juicy flesh and refreshing taste.",
    },
    {
        name: "Nectarine",
        price: 2.44,
        family: "Rose",
        vitamin: ["Vitamin B", "Vitamin C"],
        color: ["yellow", "green"],
        inCart: false,
        favourite: false,
        quantity: 1,
        description:
            "Nectarines are smooth-skinned relatives of peaches. They have a juicy, sweet flavor and are often eaten fresh or used in desserts.",
    },
    {
        name: "Orange",
        price: 4.98,
        family: "Citrus",
        vitamin: ["Vitamin A", "Vitamin C"],
        color: ["purple"],
        inCart: false,
        favourite: false,
        quantity: 1,
        description:
            "Oranges are citrus fruits valued for their juicy, sweet-tart segments. They are popular in juices, snacks, and desserts.",
    },
    {
        name: "Papaya",
        price: 1.8,
        family: "Tropical",
        vitamin: ["Vitamin D", "Vitamin A"],
        color: ["red"],
        inCart: false,
        favourite: false,
        quantity: 1,
        description:
            "Papayas are tropical fruits with sweet, orange-red flesh and black seeds. They are often eaten fresh or used in smoothies.",
    },
    {
        name: "Passion-fruit",
        price: 4.84,
        family: "Tropical",
        vitamin: ["Vitamin A", "Vitamin C"],
        color: ["pink"],
        inCart: false,
        favourite: false,
        quantity: 1,
        description:
            "Passion fruits are round, tropical fruits with a tough rind and aromatic, tangy pulp. They are used in drinks, desserts, and sauces.",
    },
    {
        name: "Pear",
        price: 4.19,
        family: "Rose",
        vitamin: ["Vitamin A", "Vitamin C"],
        color: ["purple"],
        inCart: false,
        favourite: false,
        quantity: 1,
        description:
            "Pears are soft, juicy fruits with a sweet flavor and a grainy texture. They are eaten fresh, poached, or used in desserts.",
    },
    {
        name: "Persimmon",
        price: 4.24,
        family: "Others",
        vitamin: ["Vitamin C", "Vitamin E"],
        color: ["green"],
        inCart: false,
        favourite: false,
        quantity: 1,
        description:
            "Persimmons are orange-red fruits with a sweet, honey-like flavor. They can be eaten fresh or dried when fully ripe.",
    },
    {
        name: "Pineapple",
        price: 4.43,
        family: "Tropical",
        vitamin: ["Vitamin B", "Vitamin K"],
        color: ["yellow"],
        inCart: false,
        favourite: false,
        quantity: 1,
        description:
            "Pineapples are tropical fruits with spiky skin and sweet-tart yellow flesh. They are widely used in cooking and drinks.",
    },
    {
        name: "Plum",
        price: 4.4,
        family: "Rose",
        vitamin: ["Vitamin C", "Vitamin E"],
        color: ["pink"],
        inCart: false,
        favourite: false,
        quantity: 1,
        description:
            "Plums are juicy fruits with smooth skin and a sweet-tart taste. They are eaten fresh, dried as prunes, or used in cooking.",
    },
    {
        name: "Raspberry",
        price: 3.97,
        family: "Rose",
        vitamin: ["Vitamin A", "Vitamin C"],
        color: ["orange", "red"],
        inCart: false,
        favourite: false,
        quantity: 1,
        description:
            "Raspberries are small, red fruits with a delicate, sweet-tart flavor. They are commonly used in desserts, jams, and health foods.",
    },
    {
        name: "Rose-apple",
        price: 3.82,
        family: "Others",
        vitamin: ["Vitamin D", "Vitamin A"],
        color: ["yellow", "green"],
        inCart: false,
        favourite: false,
        quantity: 1,
        description:
            "Rose apples are bell-shaped tropical fruits with a crisp texture and subtle floral taste. They are often eaten fresh.",
    },
    {
        name: "Strawberry",
        price: 4.29,
        family: "Rose",
        vitamin: ["Vitamin B", "Vitamin C"],
        color: ["orange", "red"],
        inCart: false,
        favourite: false,
        quantity: 1,
        description:
            "Strawberries are sweet, red berries with a juicy texture and fragrant aroma. They are popular in desserts, salads, and preserves.",
    },
    {
        name: "Watermelon",
        price: 2.67,
        family: "Gourd",
        vitamin: ["Vitamin C", "Vitamin E"],
        color: ["pink"],
        inCart: false,
        favourite: false,
        quantity: 1,
        description:
            "Watermelons are large fruits with juicy, sweet, red or pink flesh. They are perfect for hydration and enjoyed fresh during summer.",
    },
];

fruits[0].favourite = true;
fruits[1].favourite = true;

function findFilter(
    searchTerm = null,
    favourite = false,
    colorArray = null,
    family,
) {
    if (searchTerm === undefined || searchTerm === null) return fruits;

    const cleanTerm = searchTerm.toLowerCase().trim();
    let outputList = [];

    const updatedList = fruits.filter((item) => {
        const cleanFruitName = item.name.toLowerCase();
        const cleanFruitFamily = item.family.toLowerCase();
        if (favourite) {
            if (
                (cleanFruitName.includes(cleanTerm) ||
                    cleanFruitFamily.includes(cleanTerm)) &&
                item.favourite
            ) {
                outputList.push(item);
            }
        } else {
            if (
                cleanFruitName.includes(cleanTerm) ||
                cleanFruitFamily.includes(cleanTerm)
            ) {
                outputList.push(item);
            }
        }
    });

    return outputList || fruits;
}

console.log(findFilter("ap", true));
