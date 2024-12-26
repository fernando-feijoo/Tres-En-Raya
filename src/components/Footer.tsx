import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className='bg-gray-800 py-4 mt-16 px-5 sm:px-36'>
      <div className='container mx-auto flex flex-col items-center justify-between sm:flex-row'>
        <div className='flex items-center mb-4 sm:mb-0'>
          <img
            src='./TFeijooLogo.png'
            alt='TFeijoo Logo'
            className='h-10 mr-2'
          />
          <span className='text-lg font-bold text-white sm:mr-10'>TFeijoo</span>
        </div>
        <div className='flex space-x-4'>
          <a
            href='https://www.buymeacoffee.com/TFeijoo'
            target='_blank'
            className='text-white hover:text-yellow-500'
          >
            <i className='fas fa-coffee fa-lg'></i>
          </a>
          <a
            href='https://www.paypal.com/paypalme/F4Fernando'
            target='_blank'
            className='text-white hover:text-blue-500'
          >
            <i className='fab fa-paypal fa-lg'></i>
          </a>
          <a
            href='https://x.com/f4_fernando'
            target='_blank'
            className='text-white hover:text-blue-400'
          >
            <i className='fab fa-twitter fa-lg'></i>
          </a>
          <a
            href='https://www.linkedin.com/in/fernando-f-feijoo/'
            target='_blank'
            className='text-white hover:text-blue-700'
          >
            <i className='fab fa-linkedin fa-lg'></i>
          </a>
        </div>
      </div>
        <p className='text-white mt-2'>Echo para divertirse By Fernando F. Feijoo</p>
    </footer>
  );
};

export default Footer;
