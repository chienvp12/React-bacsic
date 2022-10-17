import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'
import {themeContext} from '../../Context';
import {useContext} from 'react';
function Contact() {
    const form = useRef();
    const [done, setDone] = useState(false);
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ab5lzpe', 'template_j8y87mm', form.current, '_iKBHaebqkbH62KKK')
        .then((result) => {
            setDone(true)
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    const theme = useContext(themeContext)
     const darkMode = theme.state.darkMode
  return (
    <div className="contact-form">
        <div className="w-left">
            <div className="awesome">
                <span style={{color: darkMode? 'white': ''}}>Get it touch</span>
                <span>Contact me</span>
                <div className="blur c-blur1" style={{ background: "#abf1ff94" }}></div>
                
            </div>
        </div>
        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='user_name' className='user' placeholder='Name'/>
                <input type="email" name='user_email' className='user' placeholder='Email'/>
                <textarea type="message" className='user' placeholder='Message'/>
                <input type="submit" value="Send" className='button'/>
                <span>{done && "Thank for contactin me!"}</span>
                <div className="blur c-blur1" style={{ background: "var(--purple)" }}></div>


            </form>
        </div>
    </div>
  )
}

export default Contact;