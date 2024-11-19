import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import CellHeader from "../CellHeader";

describe("CellHeader", () => {
    it("should show children", () => {
        render(
            <CellHeader>
                <span>child1</span>
                <span>child2</span>
            </CellHeader>,
        );

        const child1 = screen.getAllByText("child1");
        const child2 = screen.getAllByText("child2");

        expect(child1).toBeDefined();
        expect(child2).toBeDefined();
    });
});
