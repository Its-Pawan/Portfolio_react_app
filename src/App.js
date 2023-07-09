import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Exprience from "./Components/Exprience/Experience";
import Works from "./Components/Works/Works";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonial from "./Components/Testimonials/Testimonial";
import Contact from "./Components/Contacts/Contact";
import Footer from "./Components/Footer/Footer";
import { themeContext } from './Context'
import { useContext } from "react";

function App() {

  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  return (
    <div className="App"
      style={{
        background: darkMode ? 'black' : ' ',
        color: darkMode ? 'white' : ' '  
        // background: "black", color: "white"
      }}
    >

      <Navbar />
      <Intro />
      <Services />
      <Exprience />
      <Works />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;