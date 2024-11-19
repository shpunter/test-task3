import { useQuery } from "@tanstack/react-query";
import { FACTOR_GRADES_3M_URL } from "../api";
import { fetcher } from "./fetcher";
import { FactorGrades3MResp } from "./types";

export const useGetFactorGrades3M = () => {
    return useQuery<FactorGrades3MResp>({
        queryKey: ["factor-grades-3m"],
        queryFn: () => fetcher(FACTOR_GRADES_3M_URL),
        retry: false,
        refetchOnWindowFocus: false,
    });
};
