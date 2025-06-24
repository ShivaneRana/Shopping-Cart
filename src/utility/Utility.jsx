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

export function useCartState() {
    const [cart, setCart] = useState(false);

    function toggleCart() {
        setCart((prev) => !prev);
    }

    return {
        cart,
        toggleCart,
    };
}
