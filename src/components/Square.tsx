import React from 'react';

interface SquareProps {
  value: string | null;
  onClick: () => void;
  isBlinking: boolean;
  color: string;
  position: number;
}

const Square: React.FC<SquareProps> = ({
  value,
  onClick,
  isBlinking,
  color,
  position,
}) => {
  const borderClasses = [
    'border-t-0 border-l-0', // Top-left corner
    'border-t-0', // Top-center
    'border-t-0 border-r-0', // Top-right corner
    'border-l-0', // Middle-left
    '', // Middle-center
    'border-r-0', // Middle-right
    'border-b-0 border-l-0', // Bottom-left corner
    'border-b-0', // Bottom-center
    'border-b-0 border-r-0', // Bottom-right corner
  ];

  const textGlowStyle = {
    textShadow: `0 0 0px ${color}, 0 0 0px ${color}, 1px 2px 5px ${color}`,
  };

  return (
    <button
      className={`w-20 h-20 sm:w-40 sm:h-40 flex items-center justify-center bg-custom-dark border-4 border-white-500 text-4xl sm:text-8xl font-bold ${borderClasses[position]}`}
      style={{ color: value ? color : 'inherit' }}
      onClick={onClick}
    >
      <span
        className={`${isBlinking ? 'animate-blink' : ''}`}
        style={{ ...textGlowStyle, color: value ? color : 'inherit' }}
      >
        {value}
      </span>
    </button>
  );
};

export default Square;
