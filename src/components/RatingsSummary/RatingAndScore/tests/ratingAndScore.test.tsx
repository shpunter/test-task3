import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import RatingAndScore from "../RatingAndScore";
import * as hook from "../../../../fetchHooks/useGetRatingsSum";
import { LIST_RATINGS_SUMMARY } from "../../../../fetchHooks/config";

const data = {
    "SA_Analysts": {
        "rating": "HOLD",
        "score": 3.00,
    },
    "Wall_Street": {
        "rating": "BUY",
        "score": 4.13,
    },
    "Quant": {
        "rating": "HOLD",
        "score": 3.47,
    },
};

describe("RatingAndScore", () => {
    it("should show items in a correct order", () => {
        const spy = vi.spyOn(hook, "useGetRatingsSum");
        spy.mockReturnValue(
            { data, isFetched: true, isError: false } as any,
        );
        const component = render(<RatingAndScore />);
        const { children } = component.container;

        for (let i = 0; i < LIST_RATINGS_SUMMARY.length; i++) {
            const id = LIST_RATINGS_SUMMARY[i].id;
            expect(children[i].innerHTML).toEqual(data[id].rating);
        }

        for (let i = 0; i < LIST_RATINGS_SUMMARY.length; i++) {
            const id = LIST_RATINGS_SUMMARY[i].id;
            expect(children[i + 3].innerHTML).toEqual(
                data[id].score.toFixed(2),
            );
        }
    });
});
