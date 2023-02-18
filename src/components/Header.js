import { Container, Row, Col } from "reactstrap";

const Header = (props) => {
    return(
        <Container>
            <Row>
                <Col>Player 1 Score {props.playeronescore}</Col>
                <Col>Player 2 Score {props.playertwoscore}</Col>
            </Row>
        </Container>
    );
};

export default Header;