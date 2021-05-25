// react 
import React, { useState, useEffect } from 'react'

// css
import '../css/App.css';
import '../media/icons/css/uicons-regular-rounded.css';

// components
import Header from "../components/Header.js"
import Intro from "../components/Intro.js"
import About from "../components/About.js"
import Projects from "../components/projects/Projects.js"
import Footer from "../components/Footer.js"
import Background from '../components/Background';
import Contact from '../components/Contact';

// animation
import { AnimatePresence } from 'framer-motion';

const App = () => {

  const [ renderHeader, setRenderHeader ] = useState(false);

  const showHeader = ( bool ) => {
    setRenderHeader(bool);
  }


  return (
    <div className="App">
      {/* <CanvasBackground /> */}

      {/* <AnimBackground></AnimBackground> */}
      <Background />

      <AnimatePresence>
        {(!!renderHeader)? <Header key='header' />:null}
      </AnimatePresence>
      <Intro renderHeader={showHeader} />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;