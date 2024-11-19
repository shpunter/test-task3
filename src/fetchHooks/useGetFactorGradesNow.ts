import { useQuery } from "@tanstack/react-query";
import { FACTOR_GRADES_NOW_URL } from "../api";
import { fetcher } from "./fetcher";

export const useGetFactorGradesNow = () => {
    return useQuery<FactorGradesNowResp>({
        queryKey: ["factor-grades-now"],
        queryFn: () => fetcher(FACTOR_GRADES_NOW_URL),
        retry: false,
        refetchOnWindowFocus: false,
    });
};

type FactorGradesNowResp = {
    [key: string]: {
        current: string;
    };
};
