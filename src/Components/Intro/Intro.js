import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thymbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'

import { themeContext } from '../../Context'
import { useContext } from "react";

import { motion } from 'framer-motion'

function Intro() {

    const transition = { duration: 2, type: 'spring' }

    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode


    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={{ color: darkMode ? 'white' : ' ' }} >Hy! I Am</span>
                    <span>Pawan Joshi</span>
                    <span>Frontend Developer with high level of experience in web designing and developement, productiong the Quality work</span>
                </div>
                <a href="https://wa.me/917465906545?text=Hi%2C%0AI%20am%20here%20from%20your%20portfolio%20website.%0Aand%20wanna%20takl%20with%20you." target={'_blank'} rel="noreferrer" >

                    <button className=" button i-button ">Hire me</button>
                </a>
                <div className="i-icons">
                    <a href="#"><img src={Github} alt="" /></a>
                    <a href="#"><img src={LinkedIn} alt="" /></a>
                    <a href="#"><img src={Instagram} alt="" /> </a>
                </div>

            </div>


            <div className="i-right">
                <img src={Vector1} alt="vector1" />
                <img src={Vector2} alt="vector2" />
                <img src={boy} alt="boy" />
                <motion.img
                    initial={{ left: '-24%' }}
                    whileInView={{ left: '-14%' }}
                    transition={transition}
                    src={glassesimoji} alt="emoji" />

                {/* importing floading div------------------------  */}

                <motion.div
                    initial={{ top: '-4', left: '78%' }}
                    whileInView={{ left: '68%' }}
                    transition={transition}
                    style={{ top: '-4%', left: '68%' }}
                    className="floating-div"
                    >
                    <FloatingDiv image={Crown} txt1='Web' txt2='Developer' />
                </motion.div>

                <motion.div
                    initial={{ top: '18rem', left: '9rem' }}
                    whileInView={{ left: '0rem' }}
                    transition={transition}
                    style={{ top: '18rem', left: 0 }}
                    className="floating-div"
                    >
                    <FloatingDiv image={thymbup} txt1='Best Design' txt2='Award' />
                </motion.div>

                {/* blurred image */}
                <div className='blur' style={{ background: "rgb(238,210,355" }}></div>
                <div className='blur' style={{ background: "#c1f5ff", top: '17rem', left: '-9rem' }}></div>

            </div>
        </div>
    )
}

export default Intro