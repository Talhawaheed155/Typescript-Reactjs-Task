import React from "react";
import Sidebar from "./sidebar";
const BasketAnalysisPage: React.FC = () => {
  return (
    <div className="flex bg-white" style={{ backgroundColor: "white", minHeight: "100vh" }} >
      <Sidebar/>
      <h2 className="ml-6 my-3">BasketAnalysisPage</h2>
    </div>
  );
};

export default BasketAnalysisPage;
