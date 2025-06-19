import { useState } from "react";

export function useFavoriteState() {
    const [favourite, setFavourite] = useState(false);

    function toggleFavourite() {
        setFavourite((prev) => !prev);
    }

    return {
        favourite,
        toggleFavourite,
    };
}
