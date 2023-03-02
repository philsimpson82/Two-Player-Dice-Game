import { Row } from "reactstrap";

const GameDisplay = (props) => {
    let displayContent = null;

    if (props.startGame && props.gameWinner) {
        displayContent = (
            <>
                <h2 className='text-center'>{`Player ${props.currentPlayer} WINS!`}</h2>
            </>
        );
    } else if (props.startGame && !props.gameWinner) { 
        displayContent = (
            <>
                <h2 className='text-center'>{`Player ${props.currentPlayer} is rolling!`}</h2>
            </>
        );
    } else {
        displayContent = (
            <>
                <h2 className='text-center'>Welcome to Dice Roll!</h2>
            </>
        )
    }

    return (
        <>
            <Row className='d-flex justify-content-center m-3'>
                {displayContent}
            </Row>
            <Row className='d-flex justify-content-center'>
                <img className='dice m-5' src={`../img/die_face_${props.dieFace}_T.png`} alt='die face' />
            </Row>
            <Row className='d-flex justify-content-center'>
                <h4 className='text-center'>Current Score Count: {props.currentScore}</h4>
            </Row>
        </>
    );
}

export default GameDisplay;