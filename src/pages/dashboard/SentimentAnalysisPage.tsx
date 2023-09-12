import React from "react";
import Sidebar from "./sidebar";
const SentimentAnalysisPage: React.FC = () => {
  return (
    <div className="flex bg-white"  style={{ backgroundColor: "white", minHeight: "100vh" }}>
    <Sidebar/>
    <h2 className="ml-6 my-3">SentimentAnalysisPage</h2>
    </div>
  );
};

export default SentimentAnalysisPage;
