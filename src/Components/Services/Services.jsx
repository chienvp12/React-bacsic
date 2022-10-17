import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import Resume from './CV_Nguyen Van Chien.pdf';
import {themeContext} from '../../Context';
import {useContext} from 'react';
import {motion} from 'framer-motion';


function Services() {
    const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  const transition = {duration: 1, type: 'spring'}
  return (
    <div className="services">
        {/* left side */}
        <div className="awesome">
            <span style={{color: darkMode? 'white': ''}}>My awesome</span>
            <span>Services</span>
            <spane>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ducimus numquam deserunt, <br/>labore praesentium, quos saepe pariatur nihil.</spane>
            <a href={Resume} download>

            <button className='button s-button'>Dowload CV</button>
            </a>
            <div className="blur s-blur1" style={{background: '#abf1ff94'}}></div>

        </div>
        {/* right side */}
        <div className="cards">
            <motion.div 
                whileInView={{left: "14rem"}}
                initial={{left:"25rem"}}
                transition={transition}
                style={{left: '14rem'}}>
                <Card 
                    emoji = {HeartEmoji}
                    heading = {'Design '}
                    detail = {'Figma, Photoshop, Adobe, Adobe xd'}
                />
            </motion.div>
            <motion.div 
                whileInView={{top: "15rem"}}
                initial={{right:"5rem"}}
                transition={transition}
                style={{top: '12rem',left: '-4rem'}}>
                <Card 
                    emoji = {Glasses}
                    heading = {'Developer'}
                    detail = {'HTML, CSS, JAVASCRIPT, NODE, EXPRESS'}
                />
            </motion.div>
            <motion.div 
                whileInView={{top: "20rem"}}
                initial={{right:"5rem"}}
                transition={transition}
                style={{top: '19rem',left: '12rem'}}>
                <Card 
                    emoji = {Humble}
                    heading = {'UI/UX'}
                    detail = {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ducimus numquam deserunt'}
                />
            </motion.div>
            <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
        </div>
    </div>
  )
}

export default Services