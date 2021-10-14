// react 
import React from 'react'


// css
import '../css/App.css';
import '../media/icons/css/uicons-regular-rounded.css';

import favicon from "../media/icons/favicon.ico"
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

  return (
    <div className="App">
      <Helmet >
        <title>JE Development</title>
        <meta charSet='utf-8'></meta>
        <link rel="icon" href={favicon} type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Josiah Eakle Knoxville TN Web Developer" />
      </Helmet>
      <Background />

      <AnimatePresence>
      </AnimatePresence>
      <Intro />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;