import React from 'react';
import { Link } from 'react-router-dom';

const ContinueButton: React.FC = () => {
  return (
    <Link to="/Forget-pass">
      <button
        className="rounded-lg border-2 border-red-1 bg-transparent text-red-1 px-4 py-1 w-full cursor-pointer transition duration-300 hover:bg-red-1 hover:text-white font-bold"
      >
        Continue
      </button>
    </Link>
  );
};

export default ContinueButton;
