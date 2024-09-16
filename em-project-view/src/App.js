import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from './Component/NavBar';
import Home1 from './Component/Home1';
import Logout from './Component/Logout';
import About  from './Component/About';


import AddEmployee from './Component/AddEmployee';
import UpdateEmployee from './Component/UpdateEmployee';
import EmployeList from './Component/EmployeList';


function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>

    <Routes>
       <Route index element={ <EmployeList/> } />
       <Route path="/" element={ <EmployeList/> } />
       <Route path="/home" element={ <Home1/> } />
       <Route path="/about" element={ <About/> } />
       <Route path="/logout" element={ <Logout/> } />
       <Route path="/addEmployee" element={ <AddEmployee/>} />
       <Route path="/editEmployee/:id" element={ <UpdateEmployee/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
