import { Props } from "./header.type";
import css from "./header.module.css";

const Header = ({ text }: Props) => {
    return <h2 className={css.header} data-testid="header">{text}</h2>;
};

export default Header;
