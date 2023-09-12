import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import ResetPassword from "./pages/reset-password";
import Home from "./pages";
import Dashboard from "./pages/dashboard";
import { AuthProvider } from "./contexts/AuthContext";
import SentimentAnalysisPage from "./pages/dashboard/SentimentAnalysisPage";
import TrafficAnalysisPage from "./pages/dashboard/TrafficAnalysisPage";
import BasketAnalysisPage from "./pages/dashboard/BasketAnalysisPage";


function App() {
  return (
    <Router>
      <AuthProvider>
      

        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/forgot-password" element={<ResetPassword />} />
          <Route path="/dashboard/SentimentAnalysis" element={<SentimentAnalysisPage />} />
          <Route path="/dashboard/TrafficAnalysis" element={<TrafficAnalysisPage />} />
          <Route path="/dashboard/BasketAnalysis" element={<BasketAnalysisPage/>} />
         
      </Routes>
        
      
     
      
          
        
      </AuthProvider>
    </Router>
  );
}

export default App;
