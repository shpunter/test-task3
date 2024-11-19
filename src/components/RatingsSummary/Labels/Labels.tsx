import { LIST_RATINGS_SUMMARY } from "../../../fetchHooks/config";
import Cell from "../../../shared/Grid/Cell/Cell";
import css from "./labels.module.css";

const Labels = () => {
    return LIST_RATINGS_SUMMARY.map(({ label, key }) => {
        return <Cell key={key} className={css.font}>{label}</Cell>;
    });
};

export default Labels;
