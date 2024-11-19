import { describe, expect, it, vi } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { useGetQuantRanking } from "../useGetQuantRanking";
import * as fetcher from "../fetcher";
import { queryClientWrapper } from "../../../tests/wrapper";

const spy = vi.spyOn(fetcher, "fetcher");

const mockedData = {
  "sector": "sector info",
  "industry": "industry info",
  "rankings": {
    "overall": {
      "rank": 1,
      "total": 2,
    },
    "sector": {
      "rank": 2,
      "total": 2,
    },
    "industry_specific": {
      "rank": 3,
      "total": 4,
    },
  },
};

describe("useGetQuantRanking", () => {
  it("should aggregate data", async () => {
    spy.mockImplementation(() => Promise.resolve(mockedData));

    const { result } = renderHook(() => useGetQuantRanking(), {
      wrapper: queryClientWrapper,
    });

    await waitFor(
      () => expect(result.current.isLoading).toBe(false),
    );

    expect(result.current.data).toEqual({
      info: { sector: "sector info", industry: "industry info" },
      rankings: {
        overall: { rank: 1, total: 2 },
        sector: { rank: 2, total: 2 },
        industry_specific: { rank: 3, total: 4 },
      },
    });

    expect(spy).toBeCalledTimes(1);
  });
});
