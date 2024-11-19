import Header from "../Header/Header";
import css from "./card.module.css";
import { Props } from "./card.types";

const Card = ({ title, children }: Props) => {
    return (
        <div className={css.card}>
            <Header text={title}/>
            {children}
        </div>
    );
};

export default Card;
