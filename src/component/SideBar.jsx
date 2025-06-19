import style from "../style/SideBar.module.css";
import expandedIcon from "../assets/images/down.svg";
import shrinkIcon from "../assets/images/top.svg";
import checkIcon from "../assets/images/check.svg";
import { useState } from "react";
import { uuidv7 } from "uuidv7";

function SideBar() {
    return (
        <div className={style.main}>
            <ColorSelector></ColorSelector>
        </div>
    );
}

function ColorSelector() {
    const [expanded, setExpanded] = useState(true);
    const colorList = ["Red", "Orange", "Yellow", "Green", "Purple", "Pink"];

    function toggleExpanded() {
        setExpanded((prev) => !prev);
    }

    return (
        <div className={style.colorContainer}>
            <div onClick={toggleExpanded} className={style.colorHeadingHolder}>
                <p>Color</p>
                <img
                    title={expanded ? "Shrink section" : "Expand section"}
                    src={expanded ? shrinkIcon : expandedIcon}
                ></img>
            </div>
            <div className={style.colorItemHolder}>
                {expanded
                    ? colorList.map((item) => {
                          const tempUUID = uuidv7();
                          return (
                              <ColorItem
                                  key={tempUUID}
                                  color={item}
                              ></ColorItem>
                          );
                      })
                    : null}
            </div>
        </div>
    );
}

function ColorItem({ color }) {
    const [check, setCheck] = useState(false);

    function toggleCheck() {
        setCheck((prev) => !prev);
    }

    return (
        <div className={style.colorItem}>
            <button
                onClick={toggleCheck}
                style={{ backgroundColor: `${color}` }}
            >
                {check ? <img src={checkIcon}></img> : null}
            </button>
            <p>{color}</p>
        </div>
    );
}

export default SideBar;
