import React, { useState } from 'react';

interface PlayerInputProps {
  setPlayer1: (name: string) => void;
  setPlayer2: (name: string) => void;
  setColor1: (color: string) => void;
  setColor2: (color: string) => void;
}

const PlayerInput: React.FC<PlayerInputProps> = ({
  setPlayer1,
  setPlayer2,
  setColor1,
  setColor2,
}) => {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [color1, setColor1Local] = useState('#FF0000'); // Red as default color for Player 1
  const [color2, setColor2Local] = useState('#0000FF'); // Blue as default color for Player 2
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const handleSubmit = () => {
    if (name1 && name2) {
      setPlayer1(name1.toUpperCase());
      setPlayer2(name2.toUpperCase());
      setColor1(color1);
      setColor2(color2);
      setModalIsOpen(false);
    } else {
      alert('Por favor, ingrese los nombres de ambos jugadores.');
    }
  };

  const predefinedColors = [
    '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF',
    '#00FFFF', '#33CCFF', '#FFA500', '#800080', '#008000'
  ];

  return (
    <>
      {modalIsOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50'>
          <div className='bg-white p-8 rounded shadow-lg max-w-sm w-full mx-4'>
            <h2 className='text-2xl mb-4 font-bold text-center'>
              ¡Vamos a jugar!
            </h2>
            <div className='mb-4'>
              <label className='block text-gray-700 mb-1'>Jugador 1</label>
              <input
                type='text'
                placeholder='Nombre del Jugador 1'
                value={name1}
                onChange={(e) => setName1(e.target.value.slice(0, 14).toUpperCase())}
                className='mb-2 p-2 border rounded w-full'
              />
              <label className='block text-gray-700 mb-1'>Color</label>
              <select
                value={color1}
                onChange={(e) => setColor1Local(e.target.value)}
                className='mb-2 p-2 border rounded w-full'
              >
                {predefinedColors.map((color) => (
                  <option key={color} value={color} style={{ backgroundColor: color }}>
                    {color}
                  </option>
                ))}
              </select>
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 mb-1'>Jugador 2</label>
              <input
                type='text'
                placeholder='Nombre del Jugador 2'
                value={name2}
                onChange={(e) => setName2(e.target.value.slice(0, 14).toUpperCase())}
                className='mb-2 p-2 border rounded w-full'
              />
              <label className='block text-gray-700 mb-1'>Color</label>
              <select
                value={color2}
                onChange={(e) => setColor2Local(e.target.value)}
                className='mb-2 p-2 border rounded w-full'
              >
                {predefinedColors.map((color) => (
                  <option key={color} value={color} style={{ backgroundColor: color }}>
                    {color}
                  </option>
                ))}
              </select>
            </div>
            <button
              onClick={handleSubmit}
              className='p-2 bg-blue-500 text-white rounded w-full font-bold'
            >
              Iniciar Juego
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PlayerInput;
