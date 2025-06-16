import { describe,it, expect } from "vitest";
import { render, screen} from "@testing-library/react";
import ErrorPage from "../component/ErrorPage.jsx";

describe("ErrorPage component",() => {
    it("ErrorPage is rendering",() => {
        render(<ErrorPage></ErrorPage>);

        expect(screen.get)
    })
})