import React from 'react';
import {themeContext} from '../../Context';
import {useContext} from 'react';
import {motion} from 'framer-motion';
//import intro css
import './Intro.css';
import FloatingDiv from '../FloatingDiv/Floating';
//import img tag
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Boy from '../../img/boy.png';
import Thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import Glassesimoji from '../../img/glassesimoji.png';

function Intro() {
  const transition = {duration: 2, type: 'spring'}
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className='intro'>
        <div className='i-left'>
          <div className='i-name'>
              <span style={{color: darkMode? 'white': ''}}>Hi I Am</span>
              <span>Andrew Thomas</span>
              <span>Frontend Developer with hight
              level of experience in web designing
              and development, producting the Quality work
              </span>
          </div>
        <button className='i-button button'>Here me</button>
        
          <div className="i-icons">
            <img src={Github} alt=""/>
            <img src={LinkedIn} alt=""/>
            <img src={Instagram} alt=""/>
          </div>
        </div>

        <div className="i-right">
          <img src={Vector1} alt="" style={{transform: "scale(0.69)"}}/>
            <img src={Vector2} alt=""/>
            <img src={Boy} alt=""/>
            <motion.img 
              initial = {{left:"36%"}}
              whileInView = {{left: "-24%"}}
              transition={transition}
              src={Glassesimoji} alt="" />
            <motion.div 
              initial = {{top:'-4%', left:"74%"}}
              whileInView = {{left: "68%"}}
              transition={transition} 
              style={{top:'-4%', left: '54%'}}>
              <FloatingDiv image={Crown} txt1='web' txt2='Developer'/>
            </motion.div>
            <motion.div 
              initial = {{top:'18.25rem'}}
              whileInView = {{left: "0"}}
              transition={transition} 
              style={{top:'18rem', left: '0'}}>
            <FloatingDiv image={Thumbup} txt1='Best Design' txt2='Award'/>
            </motion.div>
            <div className="blur" style={{background: 'rbg(238 210 255)'}}></div>
            <div className="blur" style={{background: '#c1f5ff', top:'17rem', width:'21rem', height:'11rem', left:'-9rem'}}></div>

        </div>
        
    </div>
  )
}

export default Intro;