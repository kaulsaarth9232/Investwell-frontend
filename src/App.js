import logo from './logo.svg';
import './App.css';
import Home from '../src/uicollections/Home/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './uicollections/Signup/Index'
import Indexlogin from './uicollections/Login/Index'
import PolicyDocs from './uicollections/PolicyDocs/PolicyDocs';
import Navbar from './uicollections/Navbar/Navbar';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/Navbar' element={<Navbar />}></Route>
          <Route path='/policy' element={<PolicyDocs />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/login" element={<Indexlogin />}>
          </Route>
          <Route path="/signup" element={<Index />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
