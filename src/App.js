

import { Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import Sidebar from './Components/Sidebar';
import User from './Components/User';

function App() {
  return (
    <div className="app">

      
     
      <Sidebar />

      <Routes>

      <Route path='/' element={<Home />} />

      <Route path='/dashboard' element={<Dashboard />} />

      <Route path='/user' element={<User />} />

      </Routes>

   

      
    
   
    
    </div>
  );
}

export default App;
