import { Props } from "./container.type";
import css from "./container.module.css";

const Container = ({ children, className }: Props) => {
    return (
        <div className={`${css.container} ${className}`}>
            {children}
        </div>
    );
};

export default Container;
