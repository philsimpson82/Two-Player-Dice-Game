import { useState } from 'react';
import { Container, Button, Row, Col } from 'reactstrap';
import './App.css';

function App() {
  const [startGame, setStartGame] = useState(true);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  let [currentScore, setCurrentScore] = useState(0);
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);
  const [dieFace, setDieFace] = useState(7);

  function newGame () {
    setStartGame(false);
    setCurrentPlayer(1);
    setCurrentScore(0);
    setPlayerOneScore(0);
    setPlayerTwoScore(0);
    setDieFace(7);
  }

  function rollCalculator () {
    let rollValue = Math.floor((Math.random() * 6) + 1);
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
      setDieFace(7);
    } else {
      setPlayerTwoScore(playerTwoScore + currentScore);
      setCurrentPlayer(1);
      setCurrentScore(0);
      setDieFace(7);
    }
    if (playerOneScore >= 100) {
      //setGameWinner(1);
    } else {
      //setGameWinner(2);
    }
  }

  function resetGame () {
    setCurrentPlayer(1);
    setCurrentScore(0);
    setPlayerOneScore(0);
    setPlayerTwoScore(0);
    setDieFace(7);
    setStartGame(true);
  }

  return (
    <Container className='feltTable'>
      <Row className='row-content scoreCard'>
        <Col className='text-start my-3' md='6'>Player 1 Score: {playerOneScore}</Col>
        <Col className='text-end my-3' md='6'>Player 2 Score: {playerTwoScore}</Col>
      </Row>
      <Row className='row-content m-3 d-flex justify-content-center'>
        <h2 className='text-center'>Welcome to Dice Roll!</h2>
        {`Current Player is Player ${currentPlayer}`}
      </Row>
      <Row className='row-content d-flex justify-content-center'>
        <img className='dice m-5' src={`../img/die_face_${dieFace}_T.png`} alt='die face' />
      </Row>
      <Row className='row-content d-flex justify-content-center'>
        <h4 className='text-center'>Current Score Count: {currentScore}</h4>
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
