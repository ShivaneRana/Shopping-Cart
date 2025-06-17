import { describe, it, expect, beforeEach, test } from "vitest";
import {
    createMemoryRouter,
    MemoryRouter,
    RouterProvider,
} from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Navbar from "../component/Navbar.jsx";

describe("Navbar component", () => {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>,
        );
    });

    it("Heading is rendered", () => {
        const heading = screen.getByRole("heading", { name: "EdenCrate." });
        expect(heading).toBeInTheDocument();
    });

    it("homeButton rendered", () => {
        const homeButton = screen.getByRole("button", { name: "Home" });
        const link = screen.getByRole("link", { name: "Home" });
        expect(link).toBeInTheDocument();
        expect(homeButton).toBeInTheDocument();
    });

    it("StoreButton rendered", () => {
        const storeButton = screen.getByRole("button", { name: "Store" });
        const link = screen.getByRole("link", { name: "Store" });
        expect(link).toBeInTheDocument();
        expect(storeButton).toBeInTheDocument();
    });

    it("input field is rendered", () => {
        const inputField = screen.getByPlaceholderText("Search");
        expect(inputField).toBeInTheDocument();
    });

    it("favouriteButton is rendered", () => {
        const favButton = screen.getByAltText("favourite icon");
        expect(favButton).toBeInTheDocument();
    });

    it("cartButton is rendered", () => {
        const cartButton = screen.getByAltText("cart icon");
        expect(cartButton).toBeInTheDocument();
    });
});
