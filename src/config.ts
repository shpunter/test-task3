import FactorGrades from "./components/FactorGrades/FactorGrades";
import QuantRanking from "./components/QuantRanking/QuantRanking";
import RatingsSummary from "./components/RatingsSummary/RatingsSummary";

export const premiumCards = [
    { title: "Rating Summary", component: RatingsSummary },
    { title: "Factor Grades", component: FactorGrades },
];
export const basicCards = [
    { title: "Quant Ranking", component: QuantRanking },
];

