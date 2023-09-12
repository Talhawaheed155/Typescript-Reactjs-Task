import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import ResetPassword from "./pages/reset-password";
import Home from "./pages";
import Dashboard from "./pages/dashboard";
import { AuthProvider } from "./contexts/AuthContext";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/forgot-password" element={<ResetPassword />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
