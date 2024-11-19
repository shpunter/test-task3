import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Labels from "../Labels";
import { LIST_RATINGS_SUMMARY } from "../../../../fetchHooks/config";

describe("Labels", () => {
    it("show labels in a correct order", () => {
        const component = render(<Labels />);
        const { children } = component.container;

        for (let i = 0; i < LIST_RATINGS_SUMMARY.length; i++) {
            expect(children[i].innerHTML).toEqual(
                LIST_RATINGS_SUMMARY.flat()[i].label,
            );
        }
    });
});
