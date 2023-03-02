import { Row, Col, Button, Container } from "reactstrap";

const GameControls = (props) => {
    let controlContent = null;

    if (props.startGame) {
        controlContent = (
            <Container>
                <Row>
                    <Col className='d-flex justify-content-center my-3 me-5'>
                        <Button
                            className='me-5'
                            size='lg'
                            color='primary'
                            onClick={props.rollCalculator}
                        >
                            Roll Again
                        </Button>
                    </Col>
                    <Col className='d-flex justify-content-center my-3 ms-5'>
                        <Button
                            className='ms-5'
                            size='lg'
                            color='secondary'
                            onClick={props.endTurn}
                        >
                            End Turn
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col className='d-flex justify-content-center'>
                    <Button
                        className='my-5'
                        size='lg' 
                        color='danger' 
                        onClick={props.resetGame}
                    >
                        Reset Game
                    </Button>
                    </Col>
                </Row>
            </Container>
        );
    } else {
        controlContent = (
            <Container>
                <Row>
                    <Col className='d-flex justify-content-center'>
                        <Button
                            className='my-5'
                            size='lg' 
                            color='success' 
                            onClick={props.newGame}
                        >
                            Start New Game
                        </Button>
                    </Col>
                </Row>
            </Container>
        );
    }

    return (
        <>
          {controlContent}  
        </>
    );
}

export default GameControls;