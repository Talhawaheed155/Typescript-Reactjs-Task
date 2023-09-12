import React, { useState } from "react";

import Input from "../components/Input";
import { useAuth } from "../contexts/AuthContext";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, continueWithGoogle } = useAuth();

  return (
    <>
   <Navbar/>
      <div className="mt-24"></div>{" "}
      {/* Add margin-top to create a 4-line distance */}
      <div className="w-96 mx-auto mt-10 p-4 border-2 border-brown-3 rounded-lg shadow-lg bg-brown-1">
        <h2 className="text-center text-xl text-brown-3 font-bold">SIGN IN</h2>
        <div className="mt-2"></div>
        <div className="flex flex-col gap-2">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
          />
        </div>

        <hr className="border-t-2 border-red-1 my-4 mr-5 ml-5" />

        {/* Include the ClickableGoogleIcon component */}
        <div
          className="w-200 h-10 bg-white bg-opacity-50 rounded-lg flex items-center justify-center cursor-pointer"
          onClick={() =>
            continueWithGoogle().catch((err: any) => console.error(err))
          }
        >
          <img
            src="/google.png"
            alt="Google Icon"
            className="w-6 h-6" // Adjust the width and height as needed
          />
        </div>

        <hr className="border-t-2 border-red-1 my-4 mr-5 ml-5" />
        <Button
          onClick={() => login(email, password)}
          disabled={!email || !password}
        >
          Continue
        </Button>
      </div>
      <div className="flex justify-center">
        <Link to="/forgot-password">
          <Button className="border-none hover:bg-transparent hover:text-black mt-2">
            Forgot Password?
          </Button>
        </Link>
      </div>
    </>
  );
};

export default SignIn;
