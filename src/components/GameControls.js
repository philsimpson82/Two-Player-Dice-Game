import { Row, Col, Button, Container } from "reactstrap";

const GameControls = (props) => {
    let controlContent = null;

    if (props.startGame) {
        controlContent = (
            <Container>
                <Row className='row-content'>
                    <Col className='d-flex justify-content-start my-3'>
                        <Button
                            color='primary'
                            onClick={props.rollCalculator}
                        >
                            Roll Again
                        </Button>
                    </Col>
                    <Col className='d-flex justify-content-end my-3'>
                        <Button
                            color='secondary'
                            onClick={props.endTurn}
                        >
                            End Turn
                        </Button>
                    </Col>
                </Row>
                <Row className='d-flex justify-content-center'>
                    <Button
                        className='col-3 btn-lg my-5' 
                        color='danger' 
                        onClick={props.resetGame}
                    >
                        Reset Game
                    </Button>
                </Row>
            </Container>
        );
    } else {
        controlContent = (
            <Container>
                <Row className='row-content d-flex justify-content-center'>
                    <Button
                        className='col-3 btn-lg my-5' 
                        color='success' 
                        onClick={props.newGame}
                    >
                        Start New Game
                    </Button>
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

// {startGame && <Button className='col-3 btn-lg my-5' color='danger' onClick={resetGame}>Reset Game</Button>}