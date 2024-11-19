// 'id' is as simple as possible, can be improved

// 'label' and 'id' are exactly the same, probable one can be removed. But in this case we'll use id as label, which is confusing
export const LIST_FACTOR_GRADES = [
    { id: "Growth", key: "1", label: "Growth" },
    { id: "Momentum", key: "2", label: "Momentum" },
    { id: "Profitability", key: "3", label: "Profitability" },
    { id: "Revisions", key: "4", label: "Revisions" },
    { id: "Valuation", key: "5", label: "Valuation" },
] as const;

export const LIST_RATINGS_SUMMARY = [
    { id: "SA_Analysts", label: "SA Analysts", key: "1" },
    { id: "Wall_Street", label: "Wall Street", key: "2" },
    { id: "Quant", label: "Quant", key: "3" },
] as const;

export const LIST_QUANT_RANKING = [
    [
        { id: "sector", label: "Sector", key: "1" },
        { id: "industry", label: "Industry", key: "2" },
    ],
    [
        { id: "overall", label: "Ranked Overall", key: "3" },
        { id: "sector", label: "Ranked Sector", key: "4" },
        { id: "industry_specific", label: "Ranked Industry", key: "5" },
    ],
] as const;
