import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Container from "../Container";

describe("Container", () => {
    it("should show children", () => {
        render(
            <Container className="">
                <span>child1</span>
                <span>child2</span>
            </Container>,
        );

        const child1 = screen.getAllByText("child1");
        const child2 = screen.getAllByText("child2");

        expect(child1).toBeDefined();
        expect(child2).toBeDefined();

    });
});
