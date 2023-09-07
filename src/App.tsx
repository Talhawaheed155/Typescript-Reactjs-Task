
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import ResetPasswordPage from './ResetPasswordPage';
import BlankPage from './BlankPage';
import ProtectedBlankPage from './ProtectedBlankPage';

function App() {
  return (
    <Router>
    
      <Routes>
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/signin" element={<LoginPage/>} />
        <Route path='/forgot-password' element={<ResetPasswordPage/>}/>
        <Route path='/:blank-page' element={<BlankPage/>}/>
        <Route path='/dashboard:protected Blank' element={<ProtectedBlankPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
