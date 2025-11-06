import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import FeaturedSkills from './components/FeaturedSkills';
import Footer from './components/Footer';
import ExploreSkills from './pages/ExploreSkills';
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import StartSwap from './pages/StartSwap';
import AddSkill from "./pages/AddSkills";
import WebDevelopment from './pages/WebDevelop'; 
import GraphicDesign from './pages/GraphicDesign';
import LanguageExchange from './pages/LanguageExchange';
import Music from './pages/Music';
import Community from './pages/Community';
import Collaboration from './pages/Collaboration';
import Growth from './pages/Growth';
import Payments from './pages/Payments';
import ChatPage from './pages/ChatPage';

function App() {

  return (
    <>
    <Router>
         <Navbar />

      <Routes>
        {/* Home page */}
        <Route path='/' element={
          <>
            <Hero />
            <HowItWorks />
            <FeaturedSkills />  
          </>
        } />

        <Route path='/explore' element={<ExploreSkills />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/start-swap" element={<StartSwap/>} />
        <Route path='/add-skills' element={<AddSkill/>} />
        <Route path='/web-development' element={<WebDevelopment/>} />
        <Route path='/graphic-design' element={<GraphicDesign/>} />
        <Route path='/language-exchange' element={<LanguageExchange/>} />
        <Route path='/music' element={<Music/>} />
        <Route path='/community' element={<Community/>} />
        <Route path='/collaboration' element={<Collaboration/>} />
        <Route path='/growth' element={<Growth/>} />
        <Route path='/payments' element={<Payments />} />
        <Route path='/chat' element={<ChatPage/>} />
      </Routes>
      <Footer/>
      </Router>
    </>
  )
}

export default App;
