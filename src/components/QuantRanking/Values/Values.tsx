import { LIST_QUANT_RANKING } from "../../../fetchHooks/config";
import { useGetQuantRanking } from "../../../fetchHooks/useGetQuantRanking";
import Cell from "../../../shared/Grid/Cell/Cell";
import CellLoader from "../../../shared/Grid/CellLoader/CellLoader";
import Toast from "../../../shared/Toast/Toast";
import css from "./values.module.css";

const Values = () => {
    const { isFetched, data, isError } = useGetQuantRanking();
    const [info, rank] = LIST_QUANT_RANKING;

    const infoList = info.map(({ id, key }) => {
        return (
            <Cell key={key} className={css.cell} align="right">
                <CellLoader isLoading={!isFetched} isError={isError}>
                    {data?.info?.[id]}
                </CellLoader>
            </Cell>
        );
    });

    const rankList = rank.map(({ id, key }) => {
        return (
            <Cell key={key} className={css.cell} align="right">
                <CellLoader isLoading={!isFetched} isError={isError}>
                    <span className={css.bold}>
                        {data?.rankings[id].rank}
                    </span>{" "}
                    out of{" "}
                    <span className={css.bold}>
                        {data?.rankings[id].total}
                    </span>
                </CellLoader>
            </Cell>
        );
    });

    return (
        <>
            {isError && (
                <Toast isVisible>
                    Error. Can't fetch quant ranking
                </Toast>
            )}
            {infoList}
            {rankList}
        </>
    );
};

export default Values;
