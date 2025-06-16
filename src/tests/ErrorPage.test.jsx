import { describe,it, expect, beforeEach } from "vitest";
import { render, screen} from "@testing-library/react";
import {MemoryRouter, createMemoryRouter, RouterProvider, Routes, Route} from "react-router-dom";
import userEvent from "@testing-library/user-event";
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

    it("check if the link button works", async () => {
        const user = userEvent.setup();

        const route = createMemoryRouter([
            {
                path:"/error",
                element:<ErrorPage></ErrorPage>,
            },
            {
                path:"/shopping-cart",
                element:<div>home page</div>
            },
        ],
        {
            initialEntries:["/error"],
        })

        render(<RouterProvider router={route}/>)

        const link = screen.getAllByRole("link", {name: /home page/i});
        await user.click(link[0])

        const para = screen.getAllByText(/home page/i);
        expect(para[0]).toBeInTheDocument();
    })
})
