import { useQuery } from "@tanstack/react-query";
import { FACTOR_GRADES_6M_URL } from "../api";
import { fetcher } from "./fetcher";
import { FactorGrades6MResp } from "./types";

export const useGetFactorGrades6M = () => {
    return useQuery<FactorGrades6MResp>({
        queryKey: ["factor-grades-6m"],
        queryFn: () => fetcher(FACTOR_GRADES_6M_URL),
        retry: false,
        refetchOnWindowFocus: false,
    });
};
