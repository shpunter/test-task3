import { Props } from "./loader.type";
import css from "./loader.module.css";

const Loader = ({ isLoading, children }: Props) => {
    return isLoading ? <div className={css.loader}>Loading...</div> : children;
};

export default Loader;
