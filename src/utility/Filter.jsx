import { useImmer } from "use-immer";

function useFilter(){

    const [filter,updateFilter] = useImmer({
        name: "",
        family: "",
        vitamin: [],
        color: [],
        inCart: false,
        favourite: false,
    })

    function changeName(newName){

        if(typeof(newName) !== "string") throw new Error("wrong data type, must be a string")
        updateFilter(draft => {
            draft.name = newName;
        })
    }

    function changeFamily(newFamily){

        if(typeof(newFamily) !== "string") throw new Error("wrong data type, must be a string")
        updateFilter(draft => {
            draft.family = newFamily;
        })
    }

    function toggleFavourite(){
        updateFilter(draft => {
            draft.favourite = (!draft.favourite);
        })
    }

    function addColor(newColor){

        if(typeof(newColor) !== "string") throw new Error("wrong data type, must be a string")
        updateFilter(draft => {
            draft.color.push(newColor.toLowerCase());
        })
    }

    function removeColor(color){

        if(typeof(color) !== "string") throw new Error("wrong data type, must be a string")
        updateFilter(draft => {
            if(draft.color.length >= 1){
                draft.color = draft.color.filter(item => item !== color)
            }
        })
    }

    function addVitamin(newVitamin){

        if(typeof(newVitamin) !== "string") throw new Error("wrong data type, must be a string")
        updateFilter(draft => {
            draft.vitamin = draft.vitamin.push(newVitamin.toLowerCase());
        })
    }

    function removeVitamin(vitamin){

        if(typeof(color) !== "string") throw new Error("wrong data type, must be a string")
        updateFilter(draft => {
            if(draft.vitamin.length >= 1){
                draft.vitamin.filter(item => item !== vitamin)
            }
        })
    }
    
    function filterFruit(fruitArray, filterObject){
        return fruitArray.filter(item => {

            let nameMatch = item.name.toLowerCase().includes(filterObject.name.toLowerCase());

            let familyMatch = item.family.toLowerCase().includes(filterObject.family.toLowerCase());

            let favouriteMatch = true;
            if (filterObject.favourite === true) {
                favouriteMatch = item.favourite === true;
            }

            let colorMatch = true;
            if (filter.color.length > 0) {

                if (filterObject.color.length === 1) {
                    const filterCol = filterObject.color[0].toLowerCase();
                    colorMatch = item.color.some(itemCol => itemCol.toLowerCase() === filterCol);
                }

                if (filterObject.color.length > 1) {

                    colorMatch = (filterObject.color.every(filterCol => {
                        return item.color.some(itemCol => {
                            return itemCol.toLowerCase().includes(filterCol.toLowerCase())
                        });
                    }))
                }

            }

            let vitaminMatch = true;
            if (filterObject.vitamin.length > 0) {


                if (filterObject.vitamin.length === 1) {
                    const filterVit = filterObject.vitamin[0].toLowerCase();
                    vitaminMatch = item.vitamin.some(itemVit => itemVit.toLowerCase() === filterVit);
                }

                if (filterObject.vitamin.length > 1) {

                    vitaminMatch = (filterObject.vitamin.every(filterVit => {
                        return item.vitamin.some(itemVit => {
                            return itemVit.toLowerCase().includes(filterVit.toLowerCase())
                        });
                    }))
                }

            }

            return nameMatch && familyMatch && favouriteMatch && colorMatch && vitaminMatch;
        })
    }

    return{
        filter,
        tFav : toggleFavourite,
        changeName,
        changeFamily,
        addColor,
        addVitamin,
        removeColor,
        removeVitamin,
        filterFruit,
        toggleFavourite
    }
}

export default useFilter;