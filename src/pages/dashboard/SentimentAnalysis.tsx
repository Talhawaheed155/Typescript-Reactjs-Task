import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext"; // Import the useAuth hook

const SentimentAnalysis: React.FC = () => {
  const { user } = useAuth(); // Get the user object from AuthContext

  // Replace with the correct path to your image in the src/assets folder
  const imageUrl = "/Pixel_corazon.png";

  return (
    <div className="container flex items-center justify-center">
      {/* Check if the user is authenticated */}
      {user ? (
       <Link to="/dashboard/SentimentAnalysis" className="rounded-lg shadow-md overflow-hidden">
       {/* ... */}
          <div
            className="flex items-center cursor-pointer"
            style={{ background: "white", width: "13rem", height: "4rem" }}
          >
            <img src={imageUrl} alt="Sentiment-Analysis" className="w-12 h-12 ml-2" />
            <p className="text-sm text-red-2 font-semibold ml-2">Sentiment Analysis</p>
          </div>
        </Link>
      ) : (
        // Render a message or login link for non-authenticated users
        <p>Please <Link to="/sign-in">sign in</Link> to access Sentiment Analysis.</p>
      )}
    </div>
  );
};

export default SentimentAnalysis;
