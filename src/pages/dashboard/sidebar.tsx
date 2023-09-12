
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import BasketAnalysis from "./BasketAnalysis";
import SentimentAnalysis from "./SentimentAnalysis";
import TrafficAnalysis from "./TrafficAnalysis";

export default function Sidebar() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="bg-yellow-1 w-64 h-screen flex flex-col justify-between">
        {/* Your sidebar content goes here */}
        <div className="mt-2"> {/* Reduced margin from mt-4 to mt-2 */}
          <Link to="/dashboard" className="flex items-center">
            <img
              src="/favico.png"
              alt="Your Logo"
              className="w-14 h-14 mr-2 ml-6"
            />
            <h1 className="text-center text-xl text-brown-2 font-bold">Pizza Cloud</h1>
            
          </Link>
          <div className="mt-6"></div>
          <div className="mt-3"></div>
          <BasketAnalysis />
          <div className="mt-3"></div>
          <SentimentAnalysis />
          <div className="mt-3"></div>
          <TrafficAnalysis />
          
        </div>
        <div className="mb-4">
          <LogoutButton />
          </div>
        </div>
      </div>
    
  );
}
