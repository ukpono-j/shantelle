import React from 'react'
import Navbar from './components/navbar/Navbar'
import "./App.css"
import {
  Route,
  Routes,
} from "react-router-dom";
import About from './components/pages/About';
import Graphics from './components/pages/Graphics';
import Dance from './components/pages/Dance';
import Modelling from './components/pages/Modelling';
import Ecommerce from './components/pages/Ecommerce';
import Consultancy from './components/pages/Consultancy';
import Copywriting from './components/pages/Copywriting';
import Photography from './components/pages/Photography';
import EducationalInstructor from './components/pages/EducationalInstructor';
import Contact from './components/pages/Contact';
import EcommerceCart from './components/mainComponents/Ecommerce/EcommerceCart';
import Dashboard from './components/dasboard/Dashboard';
import LogIn from './components/authentication/LogIn';
import SignUp from './components/authentication/SignUp';
import DashboardUsers from './components/dasboard/DashboardUsers';
import DashboardChat from './components/dasboard/DashboardChat';
import EcommerceElectronics from './components/mainComponents/Ecommerce/EcommerceElectronics';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Dance />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/graphics' element={<Graphics />}></Route>
        <Route path='/modelling' element={<Modelling />}></Route>
        <Route path='/ecommerce' element={<Ecommerce />}></Route>
        <Route path='/consultancy' element={<Consultancy />}></Route>
        <Route path='/copywriting' element={<Copywriting />}></Route>
        <Route path='/photography' element={<Photography />}></Route>
        <Route path='/education' element={<EducationalInstructor />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/cart' element={<EcommerceCart />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/dashboard/customers" element={<DashboardUsers />}></Route>
        <Route path="/dashboard/chat" element={<DashboardChat />}></Route>
        {/* =============== Ecommerce =============== */}
        <Route path='/ecommerce/electronics' element={<EcommerceElectronics />}></Route>
        <Route path='/login' element={<LogIn />}></Route>
        <Route path='/SignUp' element={<SignUp />}></Route>
      </Routes>
    </div>
  )
}
export default App;