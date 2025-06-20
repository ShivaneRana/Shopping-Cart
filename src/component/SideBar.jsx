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
    const familyList = [
    "Rose", "Avocado", "Banana", "Berry",
    "Grape", "Citrus", "Tropical", "Gourd","Others"
    ]

    return <div className={style.familyItemHolder}>
        {
            familyList.map((item) => {
                return (
                    <div key={item} className={style.familyItem}>
                        <input type="checkbox" name="family"></input>
                        <label htmlFor="family">{item}</label>
                    </div>
                )
            })
        }
    </div>;
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
        "Vitamin K"
    ]

    return <div className={style.vitaminItemHolder}>
        {
            vitaminList.map((item) => {
                return (
                    <div key={item} className={style.vitaminItem}>
                        <input type="checkbox" name="vitamin"></input>
                        <label htmlFor="vitamin">{item}</label>
                    </div>
                )
            })
        }
    </div>;
}

export default SideBar;
