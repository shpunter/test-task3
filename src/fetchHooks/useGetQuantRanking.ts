import { useQuery } from "@tanstack/react-query";
import { QUANT_RANKING_URL } from "../api";
import { fetcher } from "./fetcher";
import { QuantRanking, QuantRankingResp } from "./types";

export const useGetQuantRanking = () => {
    return useQuery<QuantRanking>({
        queryKey: ["quant-ranking"],
        queryFn: () =>
            fetcher<QuantRankingResp>(QUANT_RANKING_URL).then((resp) => {
                const { rankings, ...info } = resp;

                return {
                    info,
                    rankings,
                };
            }),
        retry: false,
        refetchOnWindowFocus: false,
    });
};
