import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Values from "../Values";
import * as hook from "../../../../fetchHooks/useGetQuantRanking";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

const data = {
    info: {
        sector: "info1",
        industry: "info2",
    },
    rankings: {
        overall: {
            rank: 11,
            total: 13,
        },

        sector: {
            rank: 22,
            total: 23,
        },

        industry_specific: {
            rank: 33,
            total: 333,
        },
    },
};
const mountWithQueryClient = (component: ReactNode) =>
    render(
        <QueryClientProvider client={new QueryClient()}>
            {component}
        </QueryClientProvider>,
    );

describe("Values", () => {
    it("should show values in a correct order", async () => {
        const spy = vi.spyOn(hook, "useGetQuantRanking");
        spy.mockReturnValue(
            { data, isFetched: true, isError: false } as any,
        );
        mountWithQueryClient(<Values />);

        expect(await screen.findAllByText("info1")).toBeDefined();
        expect(await screen.findAllByText("info2")).toBeDefined();
        expect(await screen.findAllByText("11")).toBeDefined();
        expect(await screen.findAllByText("22")).toBeDefined();
        expect(await screen.findAllByText("33")).toBeDefined();
        expect(await screen.findAllByText("13")).toBeDefined();
        expect(await screen.findAllByText("23")).toBeDefined();
        expect(await screen.findAllByText("333")).toBeDefined();
    });
});
