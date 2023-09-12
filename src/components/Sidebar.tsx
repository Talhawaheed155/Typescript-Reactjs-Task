import { Link } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";

export default function Sidebar() {
  const { logout } = useAuth();
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="bg-yellow-1 w-64 h-screen flex flex-col justify-between">
        {/* Your sidebar content goes here */}
        <div className="mt-2">
          {" "}
          {/* Reduced margin from mt-4 to mt-2 */}
          <Link to="/dashboard" className="flex items-center">
            <img
              src="/favico.png"
              alt="Your Logo"
              className="w-14 h-14 mr-2 ml-6"
            />
            <h1 className="text-xl text-brown-2 font-bold">Pizza Cloud</h1>
          </Link>
          <div className="mt-6"></div>
          <Link
            to={"/dashboard/BasketAnalysis"}
            className="ml-4 rounded-lg shadow-md overflow-hidden flex items-center"
            style={{ background: "white", width: "13.7rem", height: "4rem" }} // Adjust width and height as needed
          >
            <img
              src={"/Pixel_printer.png"}
              alt="Basket-Analysis"
              className="w-12 h-12 ml-2"
            />
            {/* Slightly increased image size */}
            <p className="text-sm text-red-2 font-semibold ml-2">
              Basket Analysis
            </p>
          </Link>
          <div className="mt-3"></div>
          <Link
            to="/dashboard/SentimentAnalysis"
            className="ml-4 rounded-lg shadow-md overflow-hidden flex items-center"
            style={{ background: "white", width: "13.7rem", height: "4rem" }} //
          >
            <img
              src={"/Pixel_corazon.png"}
              alt="Sentiment-Analysis"
              className="w-12 h-12 ml-2"
            />
            <p className="text-sm text-red-2 font-semibold ml-2">
              Sentiment Analysis
            </p>
          </Link>
          <div className="mt-3"></div>
          <Link
            to="/dashboard/TrafficAnalysis"
            className="ml-4 rounded-lg shadow-md overflow-hidden flex items-center"
            style={{ background: "white", width: "13.7rem", height: "4rem" }} //
          >
            <img
              src={"/Trafic.png"}
              alt="Sentiment-Analysis"
              className="w-12 h-12 ml-2"
            />
            <p className="text-sm text-red-2 font-semibold ml-2">
              Traffic Analysis
            </p>
          </Link>
        </div>
        <div className="mb-4 px-4">
          <Button onClick={logout}>LOG OUT</Button>
        </div>
      </div>
    </div>
  );
}
