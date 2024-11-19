import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import FactorGrades6M from "../FactorGrades6M";
import { LIST_FACTOR_GRADES } from "../../../../fetchHooks/config";
import * as hook from "../../../../fetchHooks/useGetFactorGrades6M";

const data = {
    data: [
        [
            "Growth",
            "A1",
        ],
        [
            "Profitability",
            "A2",
        ],
        [
            "Valuation",
            "A3",
        ],
        [
            "Momentum",
            "A4",
        ],
        [
            "Revisions",
            "A5",
        ],
    ],
};

const spy = vi.spyOn(hook, "useGetFactorGrades6M");

describe("FactorGrades6M", () => {
    it("should have correct order", () => {
        spy.mockReturnValueOnce(
            { data, isFetched: true, isError: false } as any,
        );

        const component = render(<FactorGrades6M />);
        const { children } = component.container;

        for (let i = 0; i < LIST_FACTOR_GRADES.length; i++) {
            expect(children[i + 1].innerHTML).toEqual(
                data.data.find(([id]) => {
                    return LIST_FACTOR_GRADES[i].id === id;
                })?.[1],
            );
        }
    });
});
