import { Props } from "./cellHeader.type";
import css from "./cellHeader.module.css";

const CellHeader = ({ children }: Props) => {
    return <span className={css.header}>{children}</span>;
};

export default CellHeader;
