import "./index.css";
import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import AboutPage from "./Components/AboutPage";
import NavbarPage from "./Components/NavbarPage";
import Contact from "./Components/Contact";
import AllVillah from "./Components/AllVillah";
import Villas from "./Components/Villas";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Footer from "./Components/Footer";
import { useEffect } from "react";
import Dashboard from "./Components 2/Dashboard";
import AuthForm from "./Components/AuthForm";
import AddVillas from "./Components 2/AddVillas";
import PaymentSuccess from "./Components 2/PaymentSuccess";
import PaymentFailure from "./Components 2/PaymentFailure";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation();

  // Check if the current path is either '/login', '/signup', or '/dashboard'
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';
  const isDashboardPage = location.pathname === '/dashboard';

  return (
    <>
      {/* Navbar is not displayed on login, signup, and dashboard pages */}
      {!isAuthPage && !isDashboardPage && <NavbarPage />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/villas' element={<AllVillah />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/select_villa/:id' element={<Villas />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/authform' element={<AuthForm />} />
        <Route path='/addvillas' element={<AddVillas />} />
        <Route path='/payment-success' element={<PaymentSuccess />} />
        <Route path='/payment-failure' element={<PaymentFailure />} />
    
     

      </Routes>

      {/* Footer is not displayed on dashboard pages */}
      {!isDashboardPage && <Footer />}
    </>
  );
}

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
