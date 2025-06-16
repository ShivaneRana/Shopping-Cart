import { describe,it, expect, beforeEach } from "vitest";
import { render, screen} from "@testing-library/react";
import { createMemoryRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "../component/ErrorPage.jsx";

describe("ErrorPage component",() => {
    beforeEach(() => {
        const route = createMemoryRouter(
            [
                {
                    path:"/",
                    element:null,
                    errorElement:<ErrorPage></ErrorPage>,
                },

            ],
            {
                initialEntries:['/bad-route'],
            }
        )

        render(<RouterProvider router={route}/>)
    })

    it("Heading is rendering",() => {
        expect(screen.getByRole("heading",{name: /Whoops/i })).toBeInTheDocument();
    })

    it("image is rendering", () => {
        const img = (screen.getByAltText("errorIcon"));
        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute("src",expect.stringContaining("error.png"));
    })

    it("Link is rendering",async () => {
        const link = (screen.getByRole("link",{name: /Go to home page/i}));
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute("href","/Shopping-Cart");
    })
})
