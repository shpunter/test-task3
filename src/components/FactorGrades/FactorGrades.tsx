import Container from "../../shared/Grid/Container/Container";
import FactorGrades3M from "./FactorGrades3M/FactorGrades3M";
import FactorGrades6M from "./FactorGrades6M/FactorGrades6M";
import FactorGradesNow from "./FactorGradesNow/FactorGradesNow";
import Labels from "./Labels/Labels";
import css from "./factorGrades.module.css";

const FactorGrades = () => {
    return (
        <Container className={css.template}>
            <Labels />
            <FactorGradesNow />
            <FactorGrades3M />
            <FactorGrades6M />
        </Container>
    );
};

export default FactorGrades;
