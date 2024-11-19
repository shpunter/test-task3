import {
    FACTOR_GRADES_3M_URL,
    FACTOR_GRADES_6M_URL,
    FACTOR_GRADES_NOW_URL,
    QUANT_RANKING_URL,
    RATINGS_SUMMARY_URL,
    USER_URL,
} from "../api";

const user = { premium: Boolean(Math.floor(Math.random() * 2))
};

const ratingsSummary = {
    "SA_Analysts": {
        "rating": "HOLD",
        "score": 3.00,
    },
    "Wall_Street": {
        "rating": "BUY",
        "score": 4.13,
    },
    "Quant": {
        "rating": "HOLD",
        "score": 3.47,
    },
};

const factorGradesNow = {
    "Valuation": {
        "current": "F",
    },
    "Growth": {
        "current": "D-",
    },
    "Profitability": {
        "current": "A+",
    },
    "Momentum": {
        "current": "B+",
    },
    "Revisions": {
        "current": "B-",
    },
};

const factorGrades3M = {
    "Valuation": "F",
    "Growth": "C-",
    "Profitability": "A+",
    "Momentum": "C-",
    "Revisions": "C",
};

const factorGrades6M = {
    "data": [
        [
            "Growth",
            "D",
        ],
        [
            "Profitability",
            "A+",
        ],
        [
            "Valuation",
            "F",
        ],
        [
            "Momentum",
            "C",
        ],
        [
            "Revisions",
            "C",
        ],
    ],
};

const quantRanking = {
    "sector": "Information Technology",
    "industry": "Technology Hardware, Storage and Peripherals",
    "rankings": {
        "overall": {
            "rank": 825,
            "total": 4455,
        },
        "sector": {
            "rank": 105,
            "total": 552,
        },
        "industry_specific": {
            "rank": 8,
            "total": 28,
        },
    },
};

export const map = {
    [USER_URL]: { data: user, delay: 500 },
    [RATINGS_SUMMARY_URL]: {
        data: ratingsSummary,
        delay: 1000,
    },
    [FACTOR_GRADES_NOW_URL]: { data: factorGradesNow, delay: 1400 },
    [FACTOR_GRADES_3M_URL]: { data: factorGrades3M, delay: 1100 },
    [FACTOR_GRADES_6M_URL]: { data: factorGrades6M, delay: 1700 },
    [QUANT_RANKING_URL]: { data: quantRanking, delay: 1200 },
} as const;
