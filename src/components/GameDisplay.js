import { Row } from "reactstrap";

const GameDisplay = (props) => {
    return (
        <>
            <Row className='row-content m-3 d-flex justify-content-center'>
                {props.gameWinner && props.startGame && <h2 className='text-center'>{`Player ${props.currentPlayer} WINS!`}</h2>}
                {!props.startGame && !props.gameWinner && <h2 className='text-center'>Welcome to Dice Roll!</h2>}
                {props.startGame && !props.gameWinner && <h2 className='text-center'>{`Player ${props.currentPlayer} is rolling!`}</h2>}
            </Row>
            <Row className='row-content d-flex justify-content-center'>
                <img className='dice m-5' src={`../img/die_face_${props.dieFace}_T.png`} alt='die face' />
            </Row>
            <Row className='row-content d-flex justify-content-center'>
                <h4 className='text-center'>Current Score Count: {props.currentScore}</h4>
            </Row>
        </>
    );
}

export default GameDisplay;