import { useState } from 'react';
import { Container, Button, Row, Col } from 'reactstrap';
// import die_face_1 from './assets/img/die_face_1_T.png';
// import die_face_2 from './assets/img/die_face_2_T.png';
// import die_face_3 from './assets/img/die_face_3_T.png';
// import die_face_4 from './assets/img/die_face_4_T.png';
// import die_face_5 from './assets/img/die_face_5_T.png';
// import die_face_6 from './assets/img/die_face_6_T.png';

function App() {
  const [newGame, setNewGame] = useState(true);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [currentScore, setCurrentScore] = useState(0);
  const [dice, setDice] = useState(7);
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);

  function rollCalculator () {
    let rollValue = Math.floor((Math.random() * 6) + 1);
    setDice(rollValue);
    setCurrentScore(rollValue);
  }

  function endTurn () {
    if (currentPlayer === 1) {
      setPlayerOneScore(playerOneScore + currentScore);
      setCurrentPlayer(2);
    } else {
      setPlayerTwoScore(playerTwoScore + currentScore);
      setCurrentPlayer(1);
    }
  }

  function resetGame () {
    setCurrentPlayer(1);
    setCurrentScore(0);
    setPlayerOneScore(0);
    setPlayerTwoScore(0);
  }

  return (
    <Container>
      <Row>
        <Col>Player 1 Score {playerOneScore}</Col>
        <Col>Player 2 Score {playerTwoScore}</Col>
      </Row>
      <Row>Welcome to Dice Roll!</Row>
      <Row>
        <img src={`./assets/img/die_face_${dice}_T.png`} alt='die face' />
      </Row>
      <Row>
        <Col>
          <Button color='Primary' onClick={rollCalculator()}>
            Roll Again
          </Button>
        </Col>
        <Col>
          <Button color='Secondary' onClick={endTurn()}>
            End Turn
          </Button>
        </Col>
      </Row>
      <Button color='Danger' onClick={resetGame()}>
        Reset Game
      </Button>
    </Container>
  );
}

export default App;
