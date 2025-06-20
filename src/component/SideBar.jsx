import style from "../style/SideBar.module.css";
import expandedIcon from "../assets/images/down.svg";
import shrinkIcon from "../assets/images/top.svg";
import checkIcon from "../assets/images/check.svg";
import { useState } from "react";

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
    const [check, setCheck] = useState(false);

    function toggleCheck() {
        setCheck((prev) => !prev);
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
    const [selectedFamily, setSelectedFamily] = useState(null);
    const familyList = [
        "Rose",
        "Laurel",
        "Banana",
        "Heath",
        "Cactus",
        "Fig",
        "Grape",
        "Citrus",
        "Kiwi",
        "Cashew",
        "Gourd",
        "Papaya",
        "Ebony",
        "Myrtle",
        "Pineapple",
        "Passionfruit",
        "Mangosteen",
    ];

    return <div className={style.familyItemHolder}></div>;
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
            {expanded && VitaminItemHolder}
        </div>
    );
}

function VitaminItemHolder() {
    return <div className={style.vitaminItemHolder}></div>;
}

export default SideBar;
