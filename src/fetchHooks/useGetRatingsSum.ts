import { useQuery } from "@tanstack/react-query";
import { RATINGS_SUMMARY_URL } from "../api";
import { fetcher } from "./fetcher";

export const useGetRatingsSum = () => {
    return useQuery<RatingsSummResp>({
        queryKey: ["ratings-summary"],
        queryFn: () => fetcher<RatingsSummResp>(RATINGS_SUMMARY_URL),
        retry: false,
        refetchOnWindowFocus: false,
    });
};

export type RatingsSummResp = Record<string, { rating: string; score: number }>;
