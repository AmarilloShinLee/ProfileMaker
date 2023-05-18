import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';

import LandingPage from "./pages/LandingPage";
import Registration from "./pages/Registration"
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Registration" element={<Registration/>}></Route>
      </Routes>
    </>
  );
}

export default App;
