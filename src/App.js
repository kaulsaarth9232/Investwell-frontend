import logo from './logo.svg';
import './App.css';
import Home from '../src/uicollections/Home/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginform from "./uicollections/Login/Loginform"
import Index from './uicollections/Signup/Index'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/login" element={<Loginform />}>
          </Route>
          <Route path="/signup" element={<Index />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
