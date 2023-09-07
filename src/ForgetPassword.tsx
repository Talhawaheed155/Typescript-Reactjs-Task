import React from 'react';
import { Link } from 'react-router-dom';

const ForgetPassword: React.FC = () => {
  return (
    <div className="flex justify-center">
      <Link to="/forgot-password">
        <button className="rounded-lg bg-transparent text-red-1 px-4 py-2 cursor-pointer transition duration-300 hover:text-white font-bold">
          Forgot Password ?
        </button>
      </Link>
    </div>
  );
};

export default ForgetPassword;
