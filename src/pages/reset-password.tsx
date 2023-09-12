import React, { useState } from "react";
import Input from "../components/Input";
import { useAuth } from "../contexts/AuthContext";

const ResetPassword: React.FC = () => {
  const [email, setEmail] = useState("");

  const { resetPassword } = useAuth();

  return (
    <>
      <div className="mt-24"></div>
      <div className="w-96 mx-auto mt-10 p-4 border-2 border-brown-3 rounded-lg shadow-lg bg-brown-1">
        <h2 className="text-center  text-xl font-bold text-brown-3">
          RESET PASSWORD
        </h2>
        <div className="mt-2"></div>
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
        />

        <hr className="border-t-2 border-red-1 my-4 mr-5 ml-5" />

        <div className="mt-4"></div>

        <button
          onClick={() => resetPassword(email)}
          className="uppercase rounded-lg border-2 border-red-1 bg-transparent text-red-1 px-4 py-1 w-full cursor-pointer transition duration-300 hover:bg-red-1 hover:text-white font-bold"
        >
          Continue
        </button>
      </div>
    </>
  );
};

export default ResetPassword;
