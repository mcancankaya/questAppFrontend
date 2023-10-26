
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import User from './components/User/User';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import { Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/users/:userId' element={<User />}></Route> 
          <Route exact path="/auth"
         element= {localStorage.getItem("currentUser") !=null ? <Navigate  to="/"/> :<Auth/> }
      ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
