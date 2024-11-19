import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import FactorGrades3M from "../FactorGrades3M";
import { LIST_FACTOR_GRADES } from "../../../../fetchHooks/config";
import * as hook from "../../../../fetchHooks/useGetFactorGrades3M";

const data = {
    "Valuation": "F1",
    "Growth": "F2",
    "Profitability": "F3",
    "Momentum": "F4",
    "Revisions": "F5",
};

const spy = vi.spyOn(hook, "useGetFactorGrades3M");

describe("FactorGrades3M", () => {
    it("should have correct order", () => {
        spy.mockReturnValueOnce(
            { data, isFetched: true, isError: false } as any,
        );

        const component = render(<FactorGrades3M />);
        const { children } = component.container;

        for (let i = 0; i < LIST_FACTOR_GRADES.length; i++) {
            expect(children[i + 1].innerHTML).toEqual(
                data[LIST_FACTOR_GRADES[i].id],
            );
        }
    });
});
