import { LIST_FACTOR_GRADES } from "../../../fetchHooks/config";
import { useGetFactorGrades3M } from "../../../fetchHooks/useGetFactorGrades3M";
import Cell from "../../../shared/Grid/Cell/Cell";
import CellHeader from "../../../shared/Grid/CellHeader/CellHeader";
import CellLoader from "../../../shared/Grid/CellLoader/CellLoader";
import Toast from "../../../shared/Toast/Toast";

const FactorGrades3M = () => {
    const { data, isFetched, isError } = useGetFactorGrades3M();

    return (
        <>
            {isError && (
                <Toast isVisible>
                    Error. Can't fetch factor grades 3M ago
                </Toast>
            )}
            <CellHeader>3M ago</CellHeader>
            {LIST_FACTOR_GRADES.map(({ id, key }) => {
                return (
                    <Cell key={key} align="center">
                        <CellLoader isLoading={!isFetched} isError={isError}>
                            {data?.[id]}
                        </CellLoader>
                    </Cell>
                );
            })}
        </>
    );
};

export default FactorGrades3M;
