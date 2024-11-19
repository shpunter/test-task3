import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Labels from "../Labels";
import { LIST_FACTOR_GRADES } from "../../../../fetchHooks/config";

describe("Labels", () => {
    it("should show user friendly labels in correct order", () => {
        const component = render(<Labels />);
        const { children } = component.container;

        for (let i = 0; i < LIST_FACTOR_GRADES.length; i++) {
            expect(children[i + 1].innerHTML).toEqual(
                LIST_FACTOR_GRADES[i].label,
            );
        }
    });
});
