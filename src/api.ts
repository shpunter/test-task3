const BASE_URL = "https://seekingalpha.free.beeceptor.com";
const FACTOR_GRADES_URL = `${BASE_URL}/factor-grades`;

export const USER_URL = `${BASE_URL}/user`;
export const RATINGS_SUMMARY_URL = `${BASE_URL}/ratings-summary`;
export const FACTOR_GRADES_NOW_URL = `${FACTOR_GRADES_URL}/now`;
export const FACTOR_GRADES_3M_URL = `${FACTOR_GRADES_URL}/3m`;
export const FACTOR_GRADES_6M_URL = `${FACTOR_GRADES_URL}/6m`;
export const QUANT_RANKING_URL = `${BASE_URL}/quant-ranking`;

const urls = [
    USER_URL,
    RATINGS_SUMMARY_URL,
    FACTOR_GRADES_NOW_URL,
    FACTOR_GRADES_3M_URL,
    FACTOR_GRADES_6M_URL,
    QUANT_RANKING_URL
] as const;

type URLsAsType = typeof urls;
export type URLs = URLsAsType[number];
