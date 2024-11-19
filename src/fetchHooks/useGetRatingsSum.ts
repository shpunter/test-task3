import { useQuery } from "@tanstack/react-query";
import { RATINGS_SUMMARY_URL } from "../api";
import { fetcher } from "./fetcher";
import { RatingsSumResp } from "./types";

export const useGetRatingsSum = () => {
    return useQuery<RatingsSumResp>({
        queryKey: ["ratings-summary"],
        queryFn: () => fetcher<RatingsSumResp>(RATINGS_SUMMARY_URL),
        retry: false,
        refetchOnWindowFocus: false,
    });
};
