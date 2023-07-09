import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'

import { Link } from 'react-scroll'

function Navbar() {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Pawan</div>
                <Toggle />
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <Link Link spy={true} smooth={true} to='Navbar' activeClass='activeClass'>
                            <li>Home</li>
                        </Link>
                        <Link Link spy={true} smooth={true} to='Services'  >
                            <li>Services</li>
                        </Link>
                        <Link Link spy={true} smooth={true} to='Experience'  >
                            <li>Exprience</li>
                        </Link>
                        <Link Link spy={true} smooth={true} to='Portfolio'  >
                            <li>Portfolio</li>
                        </Link>
                        <Link Link spy={true} smooth={true} to='Testimonial' >
                            <li>Testimonials</li>
                        </Link>
                    </ul>
                </div>

                <Link Link spy={true} smooth={true} to='Contact' >
                    <button className="button n-botton">
                        Contact
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar