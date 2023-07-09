import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from '../Card/Card'
import resume from './resume.pdf'

import { themeContext } from '../../Context'
import { useContext } from "react";

import { motion } from 'framer-motion'

function Services() {
  const transition = { duration: 2, type: 'spring' }

  const theme = useContext(themeContext)
      const darkMode = theme.state.darkMode
  return (
    <div className="services" id='Services'>
      {/* seft side---------- */}
      <div className="awesome">
        <span style={{color: darkMode? 'white': ' '}}>My Awesome</span>
        <span>services</span>
        <span>
          Lorem ispum is simpley dummy text of printing of printing lorem
          <br />ispum is simpley dummy text of printing
        </span>
        <a href={resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#abf1ff94" }}></div>
      </div>
      {/* right side-----------------? */}
      {/* card1->  */}
      <div className="cards">
        <motion.div
        whileInView={{left:'14rem'}}
        initial={{left:'28rem'}}
        transition={transition}
         style={{ left: "14rem" }}>
          <Card
            emoji={HeartEmoji}
            heading={'Design'}
            detail={"Figma, Sketch, Photoshop, Adobe, Adobe  xd"} />
        </motion.div>

        {/* card2->  */}
        <motion.div
         whileInView={{left:'-4rem'}}
         initial={{left:'-8rem'}}
         transition={transition}
         style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={Glasses}
            heading={'Developer'}
            detail={"HTML, CSS, JavaScript, React, Python, C & C++"} />
        </motion.div>

        {/* card3->  */}
        <motion.div 
         whileInView={{left:'12rem'}}
         initial={{left:'24rem'}}
         transition={transition}
        style={{ top: "19rem", left: "12rem" }}>
          <Card
            emoji={Humble}
            heading={'UI/UX'}
            detail={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, natus nihil?"} />
        </motion.div>

        <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
      </div>
    </div>
  )
}

export default Services