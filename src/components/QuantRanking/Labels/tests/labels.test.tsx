import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Labels from "../Labels";
import { LIST_QUANT_RANKING } from "../../../../fetchHooks/config";

describe("Labels", () => {
    it("show labels in a correct order", () => {
        const component = render(<Labels />);
        const { children } = component.container;

        for (let i = 0; i < LIST_QUANT_RANKING.length; i++) {
            expect(children[i].innerHTML).toEqual(
                LIST_QUANT_RANKING.flat()[i].label,
            );
        }
    });
});
