import { useState } from 'react';
import { Container, Button, Row, Col } from 'reactstrap';
import './App.css';
import GameControls from './components/GameControls';
import GameDisplay from './components/GameDisplay';
import Header from './components/Header';

function App() {
  const [startGame, setStartGame] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  let [currentScore, setCurrentScore] = useState(0);
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);
  const [dieFace, setDieFace] = useState(7);
  const [gameWinner, setGameWinner] = useState(false);

  function newGame () {
    setStartGame(true);
    setGameWinner(false);
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
    
    if (currentScore > 21 ) {
      setCurrentScore(0);
      currentPlayer === 1 ? setCurrentPlayer(2) : setCurrentPlayer(1);
    }
  }

  function endTurn () {
    if (currentPlayer === 1) {
      setPlayerOneScore(playerOneScore + currentScore);
      if ((playerOneScore + currentScore) >= 100) {
        setGameWinner(true);
        setCurrentPlayer(1);
      } else {
        setCurrentPlayer(2);
        setCurrentScore(0);
        setDieFace(7);
      }
    } else {
      setPlayerTwoScore(playerTwoScore + currentScore);
      if ((playerTwoScore + currentScore) >= 100) {
        setGameWinner(true);
        setCurrentPlayer(2);
      } else {
        setCurrentPlayer(1);
        setCurrentScore(0);
        setDieFace(7);
      }
    }
  }

  function resetGame () {
    setCurrentPlayer(1);
    setCurrentScore(0);
    setPlayerOneScore(0);
    setPlayerTwoScore(0);
    setDieFace(7);
    setStartGame(false);
    setGameWinner(false);
  }

  return (
    <Container className='feltTable'>
      <Header playerOneScore={playerOneScore} playerTwoScore={playerTwoScore}/>
      <GameDisplay startGame={startGame} gameWinner={gameWinner} currentPlayer={currentPlayer} currentScore={currentScore} dieFace={dieFace} />
      <GameControls startGame={startGame} rollCalculator={rollCalculator} newGame={newGame} endTurn={endTurn} resetGame={resetGame}/>
      {/* <Row className='row-content'>
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
      </Row> */}
    </Container>
  );
}

export default App;
