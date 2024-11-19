import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Card from "../Card";

describe("Card", () => {
    it("should contain children and header", () => {
        render(<Card title="header text">children</Card>);

        const headerComponent = screen.getByTestId("header");
        const children = screen.getByText("children");

        expect(headerComponent.innerHTML).toEqual("header text");
        expect(children).toBeDefined();
    });
});
