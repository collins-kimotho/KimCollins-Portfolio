import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// Components
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Skill from "./components/Skill"
import Work from "./components/Work"
import About from "./About"
import Blog from "./components/Blog"; //





const App = () => {
  return (
    <Router>
    
    <main>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <main>
              <Hero />
              <About />
              <Skill />
              <Work />
              <Contact />
            </main>
            <Footer />
          </>
        } />
        <Route path="/blog" element={<Blog/>} />
      </Routes>
    </main>
   
  </Router>
  )
}

export default App