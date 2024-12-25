import React from 'react';
import Square from './Square';

interface BoardProps {
  squares: string[];
  onClick: (index: number) => void;
  blinkingIndex: number | null;
  player1Color: string;
  player2Color: string;
}

const Board: React.FC<BoardProps> = ({
  squares,
  onClick,
  blinkingIndex,
  player1Color,
  player2Color,
}) => {
  return (
    <div className='pt-10 grid grid-cols-3 gap-0'>
      {squares.map((square, i) => (
        <Square
          key={i}
          value={square}
          onClick={() => onClick(i)}
          isBlinking={i === blinkingIndex}
          color={square === 'X' ? player1Color : player2Color}
          position={i}
        />
      ))}
    </div>
  );
};

export default Board;
