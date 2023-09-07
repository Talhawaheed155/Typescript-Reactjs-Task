import React, { useState } from 'react';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput'; // Assuming you've imported the PasswordInput component
import ConfirmPasswordInput from './ConfirmPasswordInput';
import ContinueButton from './ContinueButton';
import Navbar from './Navbar';
import ClickableGoogleIcon from './ClickableGoogleIcon';

const SignupPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const handleConfirmPasswordChange = (value: string) => {
    setConfirmPassword(value);
  };

  const handleCustomClick = () => {
    // Define your custom click behavior here
    console.log('Clickable Google Icon was clicked with custom behavior');
  };

  return (
    <>
      <Navbar />
      <div className="mt-24"></div>
      <div className="w-96 mx-auto mt-10 p-4 border-2 border-brown-3 rounded-lg shadow-lg bg-brown-1">
        <h2 className="text-center text-xl font-bold text-brown-3">SIGN UP</h2>
        <div className="mt-4"></div>
        <EmailInput value={email} onChange={handleEmailChange} />
        <PasswordInput value={password} onChange={handlePasswordChange} />
        <ConfirmPasswordInput value={confirmPassword} onChange={handleConfirmPasswordChange} />
        <hr className="border-t-2 border-red-1 my-4 mr-5 ml-5" />
        
        {/* Include the ClickableGoogleIcon component */}
        <ClickableGoogleIcon href="/your-link-target" onClick={handleCustomClick} />
        
        <hr className="border-t-2 border-red-1 my-4 mr-5 ml-5" />
        <ContinueButton />
      </div>
    </>
  );
};

export default SignupPage;
