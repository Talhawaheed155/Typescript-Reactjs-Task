import React from "react";
import Sidebar from "./sidebar";
const TrafficAnalysisPage: React.FC = () => {
  return (
    <div className="flex bg-white" style={{ backgroundColor: "white", minHeight: "100vh" }} >
      <Sidebar/>
      <h2 className="ml-6 my-3">TrafficAnalysisPage</h2>
     
    </div>
  );
};

export default TrafficAnalysisPage;
