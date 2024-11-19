import css from "./ratingsSummary.module.css";
import Labels from "./Labels/Labels";
import RatingAndScore from "./RatingAndScore/RatingAndScore";
import Container from "../../shared/Grid/Container/Container";

const RatingsSummary = () => {
    return (
        <Container className={css.template}>
            <Labels />
            <RatingAndScore />
        </Container>
    );
};

export default RatingsSummary;
