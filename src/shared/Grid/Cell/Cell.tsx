import { Props } from "./cell.type";
import css from "./cell.module.css";
import { classNames } from "../../utils";

const Cell = ({ children, className = "", align = "left" }: Props) => {
    const classnames = classNames({}, [
        css.font,
        className,
        css[align]
    ]);

    return <div className={classnames}>{children}</div>;
};

export default Cell;
