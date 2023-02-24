import { Row, Col, Button } from "reactstrap";

const GameControls = (props) => {
    return (
        <>
            <Row className='row-content'>
                <Col className='d-flex justify-content-start my-3'>
                    <Button
                        color='primary'
                        onClick={rollCalculator}
                    >
                        Roll Again
                    </Button>
                </Col>
                <Col className='d-flex justify-content-end my-3'>
                    <Button
                        color='secondary'
                        onClick={endTurn}
                    >
                        End Turn
                    </Button>
                </Col>
            </Row>
            <Row className='row-content d-flex justify-content-center'>
                {!startGame && <Button className='col-3 btn-lg my-5' color='success' onClick={newGame}>Start New Game</Button>}
                {startGame && <Button className='col-3 btn-lg my-5' color='danger' onClick={resetGame}>Reset Game</Button>}
            </Row>
        </>
    );
}

export default GameControls;