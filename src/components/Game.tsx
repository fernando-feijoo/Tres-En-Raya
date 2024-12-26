import React, { useState, useEffect, useRef } from 'react';
import Board from './Board';

interface GameProps {
  player1: string;
  player2: string;
  color1: string;
  color2: string;
  setScore1: React.Dispatch<React.SetStateAction<number>>;
  setScore2: React.Dispatch<React.SetStateAction<number>>;
  onNextTurn: (isXNext: boolean) => void;
}

const Game: React.FC<GameProps> = ({
  color1,
  color2,
  setScore1,
  setScore2,
  onNextTurn,
}) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [startingPlayer, setStartingPlayer] = useState<'X' | 'O'>('X');
  const [winner, setWinner] = useState<string | null>(null);
  const [turnCount, setTurnCount] = useState(0);
  const [blinkingIndex, setBlinkingIndex] = useState<number | null>(null);
  const [moves, setMoves] = useState<number[]>([]);
  const blinkTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (winner) {
      // Confetti Effect
      const count = 800;
      const defaults = {
        origin: { y: 0.7 },
      };
      const fire = (particleRatio: number, opts: object) => {
        window.confetti({
          ...defaults,
          ...opts,
          particleCount: Math.floor(count * particleRatio),
        });
      };
      fire(0.25, { spread: 26, startVelocity: 55 });
      fire(0.2, { spread: 60 });
      fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
      fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
      fire(0.1, { spread: 120, startVelocity: 45 });

      const nextIsXNext = startingPlayer === 'X' ? false : true;
      onNextTurn(nextIsXNext);
      setIsXNext(nextIsXNext);

      setTimeout(resetBoard, 4300); // Reiniciar el tablero después de 4.3 segundos
    }
  }, [winner, startingPlayer, onNextTurn]);

  useEffect(() => {
    if (!winner && turnCount >= 7) {
      const indexToBlink = moves[turnCount - 7];
      setBlinkingIndex(indexToBlink);

      // Cancelar cualquier temporizador anterior
      if (blinkTimeoutRef.current) {
        clearTimeout(blinkTimeoutRef.current);
      }

      blinkTimeoutRef.current = setTimeout(() => {
        setBlinkingIndex(null);
      }, 16000); // Titilar por 16 segundos
    }
    if (!winner && turnCount >= 8) {
      const indexToClear = moves[turnCount - 8];
      setBoard((prevBoard) => {
        const newBoard = [...prevBoard];
        newBoard[indexToClear] = null;
        return newBoard;
      });
    }
  }, [turnCount, moves, winner]);

  const handleClick = (index: number) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setMoves((prevMoves) => [...prevMoves, index]);
    const nextIsXNext = !isXNext;
    setIsXNext(nextIsXNext);
    setTurnCount(turnCount + 1);
    onNextTurn(nextIsXNext);

    // Check for winner
    const gameWinner = calculateWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
      if (gameWinner === 'X') {
        setScore1((prevScore) => prevScore + 1);
      } else {
        setScore2((prevScore) => prevScore + 1);
      }
    }
  };

  const resetBoard = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(startingPlayer === 'X' ? false : true);
    setStartingPlayer(startingPlayer === 'X' ? 'O' : 'X');
    setWinner(null);
    setTurnCount(0);
    setBlinkingIndex(null);
    setMoves([]);
    // Cancelar cualquier temporizador anterior al reiniciar el tablero
    if (blinkTimeoutRef.current) {
      clearTimeout(blinkTimeoutRef.current);
    }
  };

  return (
    <>
      <Board
        squares={board}
        onClick={handleClick}
        blinkingIndex={blinkingIndex}
        player1Color={color1}
        player2Color={color2}
      />
    </>
  );
};

const calculateWinner = (squares: string[]) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default Game;
