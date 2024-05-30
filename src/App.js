import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import CallLogs from './pages/CallLogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route index element={<Login/>}/>
    <Route path="/calllogs" element={<CallLogs/>}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
