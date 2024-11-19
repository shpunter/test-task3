import { LIST_FACTOR_GRADES } from "../../../fetchHooks/config";
import Cell from "../../../shared/Grid/Cell/Cell";
import CellHeader from "../../../shared/Grid/CellHeader/CellHeader";
import css from "./labels.module.css";

const Labels = () => {
    return (
        <>
            <CellHeader><span/></CellHeader>
            {LIST_FACTOR_GRADES.map(({ label, key }) => {
                return <Cell key={key} className={css.cell}>{label}</Cell>
            })}
        </>
    );
};

export default Labels;
