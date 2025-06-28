import style from "../style/SideBar.module.css";
import expandedIcon from "../assets/images/down.svg";
import shrinkIcon from "../assets/images/top.svg";
import checkIcon from "../assets/images/check.svg";
import { useState, useContext } from "react";
import { mainContext } from "../App.jsx";

function SideBar() {
    return (
        <div className={style.main}>
            <ColorSelector></ColorSelector>
            <FamilySelector></FamilySelector>
            <VitaminSelector></VitaminSelector>
        </div>
    );
}

// holds the entire colorSet
function ColorSelector() {
    const [expanded, setExpanded] = useState(true);
    const colorList = ["Red", "Orange", "Yellow", "Green", "Purple", "Pink"];

    function toggleExpanded() {
        setExpanded((prev) => !prev);
    }

    return (
        <div className={style.colorContainer}>
            <div onClick={toggleExpanded} className={style.headingHolder}>
                <p>Color</p>
                <img
                    alt="icon for expand/ shrink icon"
                    title={expanded ? "Shrink section" : "Expand section"}
                    src={expanded ? shrinkIcon : expandedIcon}
                ></img>
            </div>
            <div className={style.colorItemHolder}>
                {expanded &&
                    colorList.map((item) => {
                        return <ColorItem key={item} color={item}></ColorItem>;
                    })}
            </div>
        </div>
    );
}

// for individual color item
function ColorItem({ color }) {
    const { addColor, removeColor, filter } = useContext(mainContext);
    let exist = filter.color.includes(color.toLowerCase());
    const check = exist;

    function toggleCheck() {
        if (!check) {
            addColor(color);
        } else {
            removeColor(color);
        }
    }

    return (
        <div className={style.colorItem} onClick={toggleCheck}>
            <button style={{ backgroundColor: `${color}` }}>
                {check ? <img alt="check mark" src={checkIcon}></img> : null}
            </button>
            <p>{color}</p>
        </div>
    );
}

function FamilySelector() {
    const [expanded, setExpanded] = useState(true);

    function toggleExpanded() {
        setExpanded((prev) => !prev);
    }

    return (
        <div className={style.familyContainer}>
            <div onClick={toggleExpanded} className={style.headingHolder}>
                <p>Family</p>
                <img
                    title={expanded ? "Shrink section" : "Expand section"}
                    src={expanded ? shrinkIcon : expandedIcon}
                ></img>
            </div>
            {expanded && <FamilyItemHolder></FamilyItemHolder>}
        </div>
    );
}

function FamilyItemHolder() {
    const familyList = [
        "Rose",
        "Avocado",
        "Banana",
        "Berry",
        "Grape",
        "Citrus",
        "Tropical",
        "Gourd",
        "Others",
    ];

    return (
        <div className={style.familyItemHolder}>
            {familyList.map((item) => {
                return <FamilyItem key={item} item={item}></FamilyItem>;
            })}
        </div>
    );
}

function FamilyItem({ item }) {
    const { changeFamily, resetFamily, filter } = useContext(mainContext);
    let exist = filter.family === item.toLowerCase();
    const check = exist;

    function toggleCheck() {
        if (!check) {
            changeFamily(item.toLowerCase());
        } else {
            resetFamily(item.toLowerCase());
        }
    }

    return (
        <div className={style.familyItem}>
            <input
                checked={check}
                onChange={toggleCheck}
                type="checkbox"
                name="family"
            ></input>
            <label htmlFor="family">{item}</label>
        </div>
    );
}

function VitaminSelector() {
    const [expanded, setExpanded] = useState(true);

    function toggleExpanded() {
        setExpanded((prev) => !prev);
    }

    return (
        <div className={style.vitaminContainer}>
            <div onClick={toggleExpanded} className={style.headingHolder}>
                <p>Vitamins</p>
                <img
                    title={expanded ? "Shrink section" : "Expand section"}
                    src={expanded ? shrinkIcon : expandedIcon}
                ></img>
            </div>
            {expanded && <VitaminItemHolder></VitaminItemHolder>}
        </div>
    );
}

function VitaminItemHolder() {
    const vitaminList = [
        "Vitamin A",
        "Vitamin B",
        "Vitamin C",
        "Vitamin D",
        "Vitamin E",
        "Vitamin K",
    ];

    return (
        <div className={style.vitaminItemHolder}>
            {vitaminList.map((item) => {
                return <VitaminItem key={item} item={item}></VitaminItem>;
            })}
        </div>
    );
}

function VitaminItem({ item }) {
    const { addVitamin, removeVitamin, filter } = useContext(mainContext);
    let exist = filter.vitamin.includes(item.toLowerCase());
    const check = exist;

    function toggleCheck() {
        if (!check) {
            addVitamin(item);
        } else {
            removeVitamin(item);
        }
    }

    return (
        <div className={style.vitaminItem}>
            <input
                checked={check}
                onChange={toggleCheck}
                type="checkbox"
                name="vitamin"
            ></input>
            <label htmlFor="vitamin">{item}</label>
        </div>
    );
}

export default SideBar;
