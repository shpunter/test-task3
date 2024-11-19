import { LIST_RATINGS_SUMMARY } from "../../../fetchHooks/config";
import { useGetRatingsSum } from "../../../fetchHooks/useGetRatingsSum";
import Cell from "../../../shared/Grid/Cell/Cell";
import CellLoader from "../../../shared/Grid/CellLoader/CellLoader";
import Toast from "../../../shared/Toast/Toast";
import { RatingAndScoreList } from "./ratingAndScore.type";

const RatingAndScore = () => {
    const { data, isFetched, isError } = useGetRatingsSum();

    const { score, rating } = LIST_RATINGS_SUMMARY.reduce<RatingAndScoreList>(
        (acc, { id: targetId, key }) => {
            acc.score.push(
                <Cell key={key} align="center">
                    <CellLoader isLoading={!isFetched} isError={isError}>
                        {data?.[targetId]?.score.toFixed(2)}
                    </CellLoader>
                </Cell>,
            );
            acc.rating.push(
                <Cell key={key} align="center">
                    <CellLoader isLoading={!isFetched} isError={isError}>
                        {data?.[targetId]?.rating}
                    </CellLoader>
                </Cell>,
            );

            return acc;
        },
        { score: [], rating: [] },
    );

    return (
        <>
            {rating}
            {score}
            {isError && <Toast isVisible>
                Error. Can't fetch ratings
            </Toast>}
        </>
    );
};

export default RatingAndScore;
