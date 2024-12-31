import './App.css';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Importing react-router
import Sidebar from './Components/Pages/Sidebar/Sidebar';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import Accounts from './Components/Pages/Accounts/Accounts';
import SignIn from './Components/Pages/SignIn/SignIn';
import Error from './Components/Pages/Error/Error';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-md">
          <Sidebar />
        </div>

        {/* Main content */}
        <div className="flex-1 p-6"> {/* Ensuring content doesn't overlap with sidebar */}
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} /> {/* Render Dashboard by default */}
            <Route path="/accounts" element={<Accounts />} /> {/* Render Accounts */}
            <Route path="/signIn" element={<SignIn/>} /> {/* Render Accounts */}
            <Route path="/error" element={<Error/>} /> {/* Render Accounts */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
