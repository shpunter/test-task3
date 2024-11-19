export type GetUserResp = { premium: boolean };

export type RatingsSumResp = Record<string, { rating: string; score: number }>;

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

export type FactorGradesNowResp = {
    [key: string]: {
        current: string;
    };
};

export type FactorGrades6MResp = {
    data: [string, string][];
};

export type FactorGrades3MResp = {
    [key: string]: string;
};
