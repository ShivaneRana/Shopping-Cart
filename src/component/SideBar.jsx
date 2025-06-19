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
            <PriceSelector></PriceSelector>
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

function PriceSelector() {
    const [expanded, setExpanded] = useState(true);

    function toggleExpanded() {
        setExpanded((prev) => !prev);
    }

    return (
        <div className={style.priceContainer}>
            <div onClick={toggleExpanded} className={style.headingHolder}>
                <p>Price</p>
                <img
                    title={expanded ? "Shrink section" : "Expand section"}
                    src={expanded ? shrinkIcon : expandedIcon}
                ></img>
            </div>
            {expanded ? <PriceItem></PriceItem> : null}
        </div>
    );
}

function PriceItem() {
    const [lowToHigh, setLowToHigh] = useState(false);
    const [HighToLow, setHighToLow] = useState(false);

    function toggleLowToHigh() {
        if (HighToLow) {
            setHighToLow(false);
        }

        setLowToHigh((prev) => !prev);
    }

    function toggleHighToLow() {
        if (lowToHigh) {
            setLowToHigh(false);
        }

        setHighToLow((prev) => !prev);
    }

    return (
        <div className={style.priceItemHolder}>
            <div onClick={toggleLowToHigh}>
                <input
                    checked={lowToHigh}
                    onChange={toggleLowToHigh}
                    name="lowToHigh"
                    type="checkbox"
                ></input>
                <label htmlFor="lowToHigh">Set price low to high</label>
            </div>
            <div onClick={toggleHighToLow}>
                <input
                    checked={HighToLow}
                    onChange={toggleHighToLow}
                    name="highToLow"
                    type="checkbox"
                ></input>
                <label htmlFor="highToLow">Set price high to low</label>
            </div>
        </div>
    );
}

export default SideBar;
