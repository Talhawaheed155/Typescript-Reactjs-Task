import React from "react";
import { Link } from "react-router-dom";

const TrafficAnalysis: React.FC = () => {
  // Updated path

  // Replace with the correct path to your image in the src/assets folder
  const imageUrl = "/Trafic.png";

  return (
    <div className="container flex items-center justify-center">
      <Link
        to={"/dashboard/TrafficAnalysis"}
        className="rounded-lg shadow-md overflow-hidden flex items-center"
        style={{ background: "white", width: "13rem", height: "4rem" }} // Adjust width and height as needed
      >
        <img src={imageUrl} alt="Traffic-Analysis" className="w-12 h-12 ml-2" /> {/* Slightly increased image size */}
        <p className="text-sm text-red-2 font-semibold ml-2">
          Traffic Analysis
        </p>
      </Link>
    </div>
  );
};

export default TrafficAnalysis;
