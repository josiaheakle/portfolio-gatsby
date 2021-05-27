// react 
import React, { useState, useEffect } from 'react'


// css
import '../css/App.css';
import '../media/icons/css/uicons-regular-rounded.css';

import favicon from "../media/icons/favicon.ico"

// components
import Header from "../components/Header.js"
import Intro from "../components/Intro.js"
import About from "../components/About.js"
import Projects from "../components/projects/Projects.js"
import Footer from "../components/Footer.js"
import Background from '../components/Background';
import Contact from '../components/Contact';
import Helmet from 'react-helmet';

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
      <Helmet >
        <title>JE Development</title>
        <meta charSet='utf-8'></meta>
        <link rel="icon" href={favicon} type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Josiah Eakle Knoxville TN Web Developer"/>
      </Helmet>
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