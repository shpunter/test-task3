import { LIST_FACTOR_GRADES } from "../../../fetchHooks/config";
import { useGetFactorGrades6M } from "../../../fetchHooks/useGetFactorGrades6M";
import Cell from "../../../shared/Grid/Cell/Cell";
import CellHeader from "../../../shared/Grid/CellHeader/CellHeader";
import CellLoader from "../../../shared/Grid/CellLoader/CellLoader";
import Toast from "../../../shared/Toast/Toast";

const FactorGrades6M = () => {
    const { data, isFetched, isError } = useGetFactorGrades6M();

    const aggregated = data?.data.reduce<{ [key: string]: string }>(
        (acc, [key, value]) => {
            acc[key] = value;

            return acc;
        },
        {},
    );

    return (
        <>
            {isError && (
                <Toast isVisible>
                    Error. Can't fetch factor grades 6M ago
                </Toast>
            )}
            <CellHeader>6M ago</CellHeader>
            {LIST_FACTOR_GRADES.map(({ id, key }) => {
                return (
                    <Cell key={key} align="center">
                        <CellLoader isLoading={!isFetched} isError={isError}>
                            {aggregated?.[id]}
                        </CellLoader>
                    </Cell>
                );
            })}
        </>
    );
};

export default FactorGrades6M;
