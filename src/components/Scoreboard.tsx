import React from 'react';

interface ScoreboardProps {
  player1: string;
  player2: string;
  score1: number;
  score2: number;
  color1: string;
  color2: string;
  isXNext: boolean;
}

const Scoreboard: React.FC<ScoreboardProps> = ({
  player1,
  player2,
  score1,
  score2,
  color1,
  color2,
  isXNext,
}) => {
  return (
    <div className='flex flex-col items-center mb-4'>
      <h2 className='text-2xl sm:text-3xl mb-2 text-white font-bold'>MARCADOR</h2>
      <div className='flex justify-center items-center space-x-2 sm:space-x-4 w-full'>
        <div
          className='p-2 sm:p-4 rounded flex-1 flex flex-col items-center'
          style={{
            backgroundColor: isXNext ? color1 : '#2E2E2E',
            minWidth: '100px',
            maxWidth: '150px',
          }}
        >
          <span className='text-sm sm:text-base font-bold text-white'>{player1}</span>
        </div>

        <span className='text-2xl sm:text-4xl text-white font-bold'>{score1}</span>

        <div className='flex items-center text-xl sm:text-3xl text-white'>-</div>

        <span className='text-2xl sm:text-4xl text-white font-bold'>{score2}</span>

        <div
          className='p-2 sm:p-4 rounded flex-1 flex flex-col items-center'
          style={{
            backgroundColor: !isXNext ? color2 : '#2E2E2E',
            minWidth: '100px',
            maxWidth: '150px',
          }}
        >
          <span className='text-sm sm:text-base font-bold text-white'>{player2}</span>
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;
