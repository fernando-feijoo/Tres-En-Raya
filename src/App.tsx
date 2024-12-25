import React, { useState } from 'react';
import Game from './components/Game';
import PlayerInput from './components/PlayerInput';
import Scoreboard from './components/Scoreboard';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [player1, setPlayer1] = useState('Jugador 1');
  const [player2, setPlayer2] = useState('Jugador 2');
  const [color1, setColor1] = useState('#FF0000'); // Color for Player 1
  const [color2, setColor2] = useState('#0000FF'); // Color for Player 2
  const [score1, setScore1] = useState<number>(0);
  const [score2, setScore2] = useState<number>(0);
  const [isXNext, setIsXNext] = useState<boolean>(true);

  const handleNextTurn = (isXNext: boolean) => {
    setIsXNext(isXNext);
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-custom'>
      <PlayerInput
        setPlayer1={setPlayer1}
        setPlayer2={setPlayer2}
        setColor1={setColor1}
        setColor2={setColor2}
      />
      <Scoreboard
        player1={player1}
        player2={player2}
        score1={score1}
        score2={score2}
        color1={color1}
        color2={color2}
        isXNext={isXNext}
      />
      <Game
        player1={player1}
        player2={player2}
        color1={color1}
        color2={color2}
        setScore1={setScore1}
        setScore2={setScore2}
        onNextTurn={handleNextTurn}
      />
      <Footer />
    </div>
  );
};

export default App;
