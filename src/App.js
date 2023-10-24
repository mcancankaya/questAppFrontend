
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import User from './components/User/User';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/users/:userId' element={<User />}></Route> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
