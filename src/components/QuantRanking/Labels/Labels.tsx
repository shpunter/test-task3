import { LIST_QUANT_RANKING } from "../../../fetchHooks/config";
import Cell from "../../../shared/Grid/Cell/Cell";
import { MapFn } from "./labels.type";
import css from "./labels.module.css";

const Labels = () => {
    const mapFn = ({ label, key }: MapFn) => (
        <Cell className={css.cell} key={key}>{label}</Cell>
    );

    return LIST_QUANT_RANKING.map((array) => array.map(mapFn)).flat();
};

export default Labels;
