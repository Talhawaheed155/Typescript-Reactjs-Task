import React, { useState } from 'react';
import EmailInput from './EmailInput';
import ContinueButton2 from './ContinueButton2';
import Navbar from './Navbar';

const ResetPasswordPage: React.FC = () => 
  {
    const [email, setEmail] = useState('');
  
    const handleEmailChange = (value: string) => {
      setEmail(value);
    };
    
    return (
    
        <>
        <Navbar/>
        <div className="mt-24"></div> 
        <div className="w-96 mx-auto mt-10 p-4 border-2 border-brown-3 rounded-lg shadow-lg bg-brown-1">
    
        <h2 className="text-center  text-xl font-bold text-brown-3">RESET PASSWORD</h2>
       <div className="mt-2"></div>
        <EmailInput value={email} onChange={handleEmailChange} />
        
        
        <hr className="border-t-2 border-red-1 my-4 mr-5 ml-5" />
        
    <div className="mt-4"></div>
        
        <ContinueButton2/>
        
        
    
      </div>
      
     
      

      </>
      );
    };
    
    export default ResetPasswordPage;