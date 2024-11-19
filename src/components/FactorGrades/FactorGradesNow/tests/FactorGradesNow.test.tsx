import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import FactorGradesNow from "../FactorGradesNow";
import { LIST_FACTOR_GRADES } from "../../../../fetchHooks/config";
import * as hook from "../../../../fetchHooks/useGetFactorGradesNow";

const data = {
    "Valuation": {
        "current": "B1",
    },
    "Growth": {
        "current": "B2",
    },
    "Profitability": {
        "current": "B3",
    },
    "Momentum": {
        "current": "B4",
    },
    "Revisions": {
        "current": "B5",
    },
};

const spy = vi.spyOn(hook, "useGetFactorGradesNow");

describe("FactorGradesNow", () => {
    it("should have correct order", () => {
        spy.mockReturnValueOnce(
            { data, isFetched: true, isError: false } as any,
        );

        const component = render(<FactorGradesNow />);
        const { children } = component.container;

        for (let i = 0; i < LIST_FACTOR_GRADES.length; i++) {
            expect(children[i + 1].innerHTML).toEqual(
                data[LIST_FACTOR_GRADES[i].id].current,
            );
        }
    });
});
