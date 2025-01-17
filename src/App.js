import Access from './pages/Access';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Register from './pages/Register';
import User from './pages/User';
import Website from './pages/Website';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard'

import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Activity from './pages/Activity';
import Transaction from './pages/Transaction';
import Support from './pages/Support';
import TransferType from './pages/TransferType';
function App() {
  return (
    <Router>
       
      <Routes>
        <Route path="/" element={<Access />} />
        <Route path="/website" element={<Website />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<User />} />
        <Route path="/support" element={<Support />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/transfer" element={<TransferType />} />
      </Routes>
    </Router>
  );
}

export default App;
