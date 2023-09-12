import React from "react";
import Sidebar from "./sidebar"; // Import your Sidebar component or any other components you want to display

const Final: React.FC = () => {
  return (
    <div className="flex bg-white">
      <Sidebar /> {/* Include your Sidebar component */}
      <h2 className="ml-6 my-3">Dashboard</h2>
    </div>
  );
};

export default Final;
