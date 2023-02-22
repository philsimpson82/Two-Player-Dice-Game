import { useState } from 'react';
import { Container, Button, Row, Col } from 'reactstrap';
// import die_face_1 from './assets/img/die_face_1_T.png';
// import die_face_2 from './assets/img/die_face_2_T.png';
// import die_face_3 from './assets/img/die_face_3_T.png';
// import die_face_4 from './assets/img/die_face_4_T.png';
// import die_face_5 from './assets/img/die_face_5_T.png';
// import die_face_6 from './assets/img/die_face_6_T.png';
// import die_face_7 from './assets/img/die_face_7_T.png';

function App() {
  const [newGame, setNewGame] = useState(true);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  let [currentScore, setCurrentScore] = useState(0);
  const [dice, setDice] = useState(7);
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);
  let [dieFace, setDieFace] = useState(7);

  function rollCalculator () {
    let rollValue = Math.floor((Math.random() * 6) + 1);
    setDice(rollValue);
    setDieFace(rollValue);
    setCurrentScore(currentScore += rollValue);
    console.log(dieFace);
    
    if (currentScore > 21 ) {
      setCurrentScore(0);
      currentPlayer === 1 ? setCurrentPlayer(2) : setCurrentPlayer(1);
    }
  }

  function endTurn () {
    if (currentPlayer === 1) {
      setPlayerOneScore(playerOneScore + currentScore);
      setCurrentPlayer(2);
      setCurrentScore(0);
    } else {
      setPlayerTwoScore(playerTwoScore + currentScore);
      setCurrentPlayer(1);
      setCurrentScore(0);
    }
  }

  function resetGame () {
    setCurrentPlayer(1);
    setCurrentScore(0);
    setPlayerOneScore(0);
    setPlayerTwoScore(0);
    setDieFace(`die_face_7`);
  }

  return (
    <Container>
      <Row className='row-content'>
        <Col className='text-start my-3' md='6'>Player 1 Score {playerOneScore}</Col>
        <Col className='text-end my-3' md='6'>Player 2 Score {playerTwoScore}</Col>
      </Row>
      <Row className='row-content d-flex justify-content-center'>
        <h3 className='text-center'>Welcome to Dice Roll!</h3>
        {`Current Player is Player ${currentPlayer}`}
      </Row>
      <Row className='row-content d-flex justify-content-center'>
        <img className='dice img-thumbnail' src={`../img/die_face_${dieFace}_T.png`} alt='die face' />
        {currentScore}
      </Row>
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
      <Row className='d-flex justify-content-center'>
        <Button
          className='col-3 btn-lg my-5' 
          color='danger'
          onClick={resetGame}
        >
            Reset Game
          </Button>
        </Row>
    </Container>
  );
}

export default App;
