import React, { useState } from 'react'
import emailjs from '@emailjs/browser';

import { useRef } from 'react';

import './Contact.css'

import { themeContext } from '../../Context'
import { useContext } from "react";

const Contact = () => {

    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode

    const form = useRef();
    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_8f5e8pp', 'template_y0whd2n', form.current, 'TfE1QO03KWTG5i6L-')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
    };



    return (
        <div className="contact-form" id="Contact">
            {/* left side copy and paste from work section */}
            <div className="w-left">
                <div className="awesome">
                    {/* darkMode */}
                    <span style={{color: darkMode? 'white': ' '}}>Get in Touch</span>
                    <span>Contact me</span>
                    <div
                        className="blur s-blur1"
                        style={{ background: "#ABF1FF94" }}
                    ></div>
                </div>
            </div>
            {/* right side form */}
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" className="user" placeholder="Name" required />
                    <input type="email" name="user_email" className="user" placeholder="Email" required />
                    <textarea name="message" className="user" placeholder="Message" />
                    <input type="submit" value="Send" className="button" />

                        <span>{done && "Thangs for contacting me!"}</span>

                    <div
                        className="blur c-blur1"
                        style={{ background: "var(--purple)" }}
                    ></div>
                </form>
            </div>
        </div>
    );
};
export default Contact;