import React, {useState, useEffect} from "react";
import logo from "../assets/images/skillswap-logo.png";
import { Link,useNavigate } from "react-router-dom";


const Navbar = () => {

  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    const checkAuth =()=>{
      const token = localStorage.getItem("authToken");
      setIsLoggedIn(!!token);
    }
    checkAuth();

    window.addEventListener("authChange", checkAuth);
    return()=> window.addEventListener("authChange", checkAuth);
    
  },[]);

  const handleLogout = ()=>{
    localStorage.removeItem("authToken");
    // setIsLoggedIn(false);
    window.dispatchEvent(new Event("authChange"));
    navigate('/login');
  }


  return (
    <nav className="sticky top-0 z-50 bg-white/50 backdrop-blur-sm mx-auto shadow-sm">
      <div className="max-w-7xl container mx-auto flex justify-between items-center py-4 px-6">
        {/* Left Section: Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="SkillSwap" className="w-45 h-12" />
        </div>

        {/* Center Section: Menu */}
        <div className="ml-auto flex items-center space-x-6 p-4">
          <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <li className="hover:text-blue-600 cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-blue-600 cursor-pointer">
              <Link to="/explore">Explore Skills</Link>
            </li>
            <li className="hover:text-blue-600 cursor-pointer">
              <Link to="/about">About</Link>
            </li>
            { !isLoggedIn ? (
              <li className="hover:text-blue-600 cursor-pointer">
              <Link to="/login">Login</Link>
            </li>
            ) : (
              <li className="hover:text-blue-600 cursor-pointer" onClick={handleLogout}>
               Log Out 
              </li>
            )}
            <li>
              <Link to="/payments">GOLD ⭐</Link>

            </li>
          </ul>
        </div>
        {/* Right Section: Button */}
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 button-anim">
          <Link to="/start-swap">Start Swapping Now</Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
