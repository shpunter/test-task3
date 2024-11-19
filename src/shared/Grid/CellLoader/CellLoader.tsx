import { Props } from "./cellLoader.type";
import css from "./cellLoader.module.css";

const CellLoader = ({ children, isLoading, isError }: Props) => {
    // error msg can be settable and pass as props. Currently no need in it
    // error msg can be splitted into separated component.
    if (isError) {
        return <div className={css.error} data-testid="cell-error">Error</div>;
    }

    return (
        isLoading
            ? <div className={css.line} data-testid="cell-loader" />
            : children
    );
};

export default CellLoader;
