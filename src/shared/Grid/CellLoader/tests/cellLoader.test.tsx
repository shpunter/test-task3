import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import CellLoader from "../CellLoader";

describe("CellLoader", () => {
    it("should show child", () => {
        render(<CellLoader isLoading={false} isError={false}>test</CellLoader>);

        const result = screen.getByText("test");

        expect(result).toBeDefined();
    });

    it("should show loading state", async () => {
        render(<CellLoader isLoading isError={false}>test</CellLoader>);

        const result = await screen.findByTestId("cell-loader");

        expect(result).toBeDefined();
    });

    it("should show error", async () => {
        render(<CellLoader isLoading={false} isError>test</CellLoader>);

        const result = await screen.findByTestId("cell-error");

        expect(result).toBeDefined();
    });
});
