import Container from "../../shared/Grid/Container/Container";
import Labels from "./Labels/Labels";
import Values from "./Values/Values";
import css from "./quantRanking.module.css";

const QuantRanking = () => {
    return (
        <Container className={css.template}>
            <Labels />
            <Values />
        </Container>
    );
};

export default QuantRanking;
