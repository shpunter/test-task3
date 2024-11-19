import { LIST_FACTOR_GRADES } from "../../../fetchHooks/config";
import { useGetFactorGradesNow } from "../../../fetchHooks/useGetFactorGradesNow";
import Cell from "../../../shared/Grid/Cell/Cell";
import CellHeader from "../../../shared/Grid/CellHeader/CellHeader";
import CellLoader from "../../../shared/Grid/CellLoader/CellLoader";
import Toast from "../../../shared/Toast/Toast";

const FactorGradesNow = () => {
    const { data, isFetched, isError } = useGetFactorGradesNow();

    return (
        <>
            {isError && (
                <Toast isVisible>
                    Error. Can't fetch factor grades
                </Toast>
            )}
            <CellHeader>Now</CellHeader>
            {LIST_FACTOR_GRADES.map(({ id, key }) => {
                return (
                    <Cell key={key} align="center">
                        <CellLoader isLoading={!isFetched} isError={isError}>
                            {data?.[id].current}
                        </CellLoader>
                    </Cell>
                );
            })}
        </>
    );
};

export default FactorGradesNow;
