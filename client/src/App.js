import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import AdminLogin from "./pages/AdminLogin/AdminLogin";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import AdminDaskboard from "./pages/AdminDaskboard/AdminDaskboard";
import 'antd/dist/antd.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/admin/login' element={<AdminLogin/>} />
          <Route path='/admin/daskboard' element={<AdminDaskboard/>} />
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
