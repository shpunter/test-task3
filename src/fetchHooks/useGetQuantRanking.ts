import { useQuery } from "@tanstack/react-query";
import { QUANT_RANKING_URL } from "../api";
import { fetcher } from "./fetcher";

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

export type QuantRankingResp = {
    sector: string;
    industry: string;
    rankings: {
        overall: RankObj;
        sector: RankObj;
        industry_specific: RankObj;
    };
};

export type QuantRanking = {
    info: Record<string, string>;
    rankings: Record<string, RankObj>;
};

export type RankObj = {
    rank: number;
    total: number;
};
