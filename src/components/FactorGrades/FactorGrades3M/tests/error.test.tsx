import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import FactorGrades3M from "../FactorGrades3M";

vi.mock("../../../../shared/Toast/Toast", () => {
    return {
        __esModule: true,
        default: () => <div>error for test</div>,
    };
});

vi.mock("../../../../fetchHooks/useGetFactorGrades3M", () => {
    return {
        __esModule: true,
        useGetFactorGrades3M: vi.fn().mockReturnValue({
            data: {},
            isFetched: true,
            isError: true,
        }),
    };
});

describe("FactorGrades3M", () => {
    it("should render error component on http error", () => {
        render(<FactorGrades3M />);

        const msg = screen.getByText("error for test");

        expect(msg).toBeDefined();
    });
});
