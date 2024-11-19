import { describe, expect, it, vi } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { useGetFactorGrades3M } from "../useGetFactorGrades3M";
import * as fetcher from "../fetcher";
import { queryClientWrapper } from "../../../tests/wrapper";

const spy = vi.spyOn(fetcher, "fetcher");

describe("useGetFactorGrades3M", () => {
  it("should call fetch and return data", async () => {
    spy.mockImplementation(() => Promise.resolve("any data"));

    const { result } = renderHook(() => useGetFactorGrades3M(), {
      wrapper: queryClientWrapper,
    });

    await waitFor(
      () => expect(result.current.isLoading).toBe(false),
    );

    expect(result.current.data).toEqual("any data");
    expect(spy).toBeCalledTimes(1);
  });
});
