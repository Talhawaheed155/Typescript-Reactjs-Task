import { Route, Routes } from "react-router";
import SentimentAnalysis from "./SentimentAnalysis";
import TrafficAnalysis from "./TrafficAnalysis";
import BasketAnalysis from "./BasketAnalysis";
import Sidebar from "../../components/Sidebar";

export default function Dashboard() {
  return (
    <div className="bg-white flex min-h-screen">
      <Sidebar />

      <Routes>
        <Route path="/" element={<HomeDash />} />
        <Route path="/SentimentAnalysis" element={<SentimentAnalysis />} />
        <Route path="/SentimentAnalysis" element={<SentimentAnalysis />} />
        <Route path="/TrafficAnalysis" element={<TrafficAnalysis />} />
        <Route path="/BasketAnalysis" element={<BasketAnalysis />} />
      </Routes>
    </div>
  );
}

const HomeDash = () => {
  return (
    <div
      className="flex bg-white"
      style={{ backgroundColor: "white", minHeight: "100vh" }}
    >
      <h2 className="ml-6 my-3">Dashboard</h2>
    </div>
  );
};
