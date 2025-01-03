import About from "./About"


// Components
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Skill from "./components/Skill"
import Work from "./components/Work"




const App = () => {
  return (
  <>
    <Header/>
    <main>
      <Hero />
      <About />
      <Skill />
      <Work />
      <Contact />
    </main>
    <Footer />
  </>
  )
}

export default App