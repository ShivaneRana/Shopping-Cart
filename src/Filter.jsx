import { useImmer } from "use-immer";

function useFilter() {
    const [filter, updateFilter] = useImmer({
        name: "",
        family: "",
        vitamin: [],
        color: [],
        inCart: false,
        favourite: false,
    });

    function changeName(newName) {
        if (typeof newName !== "string")
            throw new Error("wrong data type, must be a string");
        updateFilter((draft) => {
            draft.name = newName;
        });
    }

    function changeFamily(newFamily) {
        if (typeof newFamily !== "string")
            throw new Error("wrong data type, must be a string");
        updateFilter((draft) => {
            draft.family = newFamily;
        });
    }

    function resetFamily() {
        updateFilter((draft) => {
            draft.family = "";
        });
    }

    function toggleFavourite() {
        updateFilter((draft) => {
            draft.favourite = !draft.favourite;
        });
    }

    function addColor(newColor) {
        if (typeof newColor !== "string") {
            throw new Error("wrong data type, must be a string");
        }

        updateFilter((draft) => {
            draft.color.push(newColor.toLowerCase());
        });
    }

    function removeColor(color) {
        if (typeof color !== "string") {
            throw new Error("wrong data type, must be a string");
        }

        updateFilter((draft) => {
            draft.color = draft.color.filter(
                (item) => item !== color.toLowerCase(),
            );
        });
    }

    function addVitamin(newVitamin) {
        if (typeof newVitamin !== "string") {
            throw new Error("wrong data type, must be a string");
        }

        updateFilter((draft) => {
            draft.vitamin.push(newVitamin.toLowerCase());
        });
    }

    function removeVitamin(vitamin) {
        if (typeof vitamin !== "string") {
            throw new Error("wrong data type, must be a string");
        }

        updateFilter((draft) => {
            draft.vitamin = draft.vitamin.filter(
                (item) => item !== vitamin.toLowerCase(),
            );
        });
    }

    function filterFruit(fruitArray, filterObject) {
        return fruitArray.filter((item) => {
            let nameMatch = item.name
                .toLowerCase()
                .includes(filterObject.name.toLowerCase().trim());

            let familyMatch = item.family
                .toLowerCase()
                .includes(filterObject.family.toLowerCase());

            let favouriteMatch = true;
            if (filterObject.favourite === true) {
                favouriteMatch = item.favourite === true;
            }

            let colorMatch = true;
            if (filter.color.length > 0) {
                if (filterObject.color.length === 1) {
                    const filterCol = filterObject.color[0].toLowerCase();
                    colorMatch = item.color.some(
                        (itemCol) => itemCol.toLowerCase() === filterCol,
                    );
                }

                if (filterObject.color.length > 1) {
                    colorMatch = filterObject.color.every((filterCol) => {
                        return item.color.some((itemCol) => {
                            return itemCol
                                .toLowerCase()
                                .includes(filterCol.toLowerCase());
                        });
                    });
                }
            }

            let vitaminMatch = true;
            if (filterObject.vitamin.length > 0) {
                if (filterObject.vitamin.length === 1) {
                    const filterVit = filterObject.vitamin[0].toLowerCase();
                    vitaminMatch = item.vitamin.some(
                        (itemVit) => itemVit.toLowerCase() === filterVit,
                    );
                }

                if (filterObject.vitamin.length > 1) {
                    vitaminMatch = filterObject.vitamin.every((filterVit) => {
                        return item.vitamin.some((itemVit) => {
                            return itemVit
                                .toLowerCase()
                                .includes(filterVit.toLowerCase());
                        });
                    });
                }
            }

            return (
                nameMatch &&
                familyMatch &&
                favouriteMatch &&
                colorMatch &&
                vitaminMatch
            );
        });
    }

    return {
        filter,
        changeName,
        changeFamily,
        resetFamily,
        addColor,
        addVitamin,
        removeColor,
        removeVitamin,
        filterFruit,
        toggleFavourite,
    };
}

export default useFilter;
