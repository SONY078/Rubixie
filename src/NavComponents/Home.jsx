import React from 'react'
import MI from '../mi.jpg'
import P2 from '../media_1a6ef4362c114611245fa538130614da40631963c.jpeg'
import PC1 from '../pic1.png';
import PC2 from '../pic2.png';
import PC3 from '../pic3.jpeg';
import PC4 from '../pic4.png';
import PC5 from '../pic5.png';
export default function Home() {
  return (
    <div>
        <div id="mi">
        <img src={MI} alt="mi" />
        </div>
        <div id="p1">
            <div id="who">
                <h2>WHO WE ARE</h2>
                <div id="sp1">
                <p>Rubixe™ is a global technology company specializing in disruptive technologies
                Artificial Intelligence (Al), Machine Learning, Robotic Process Automation (RPA),
                BlockChain, and Internet of Things (IoT).</p>
                <p>Rubixe™ mission is to enable businesses to leverage the full potential of disruptive
                technologies and stay competitive in the market, turning complex challenges into
                solutions, providing a strategic competitive advantage that are more efficient, effective
                and predictable.</p>
                </div>
            </div>
            <img src={P2} alt="p2" id='pic2' />
        </div>
        <div id="p2">
            <div id="sp2">
            <h2>WHERE WE STARTED</h2>
            <p>We started in 2015, With a passionate team who want to bring game-changing solutions through disrupting technologies. We expertise in
            delivering enterprise-level solutions in the field of Artificial Intelligence (Al), Cyber Security, Robotic Process Automation (RPA), Internet of Things
            (loT), and BlockChain technology.</p>
            </div>
        </div>
        <div id="p3">
            <h2>TECH FOR TEENS - A RUBIXEⓇ INITIATIVE</h2>
            <div id="cards">
                <div id="card1" className='card'>
                    <div id="subc1"></div>
                    <div id="cir1">01</div>
                    <div id="si">
                    <img src={PC1} alt="" id='cardimage'/>
                    <span>Introducing Al to
                    children in an age
                    appropriate
                    manner.</span>
                    </div>
                </div>
                <div id="card2" className='card'>
                
                    
                    <div id="sii">
                    <span id='text'>Gain awareness
                    on Al and build an
                    interactive story
                    around it</span>
                    <img src={PC2} alt="" id='cardimage'/>
                    </div>
                    <div id="subc2"></div>
                    <div id="cir2">02</div>
                </div>
                <div id="card3" className='card'>
                <div id="subc3"></div>
                    <div id="cir3">03</div>
                    <div id="si">
                    <img src={PC3} alt="" id='cardimage'/>
                    <span>Acquire
                    programming skills
                    in a user-friendly
                    format</span>
                    </div>
                </div>
                <div id="card4" className='card'>
               
                    
                    <div id="sii">
                    <span id='text'>Exposure to mini
                    projects on
                    diverse topics</span>
                    <img src={PC5} alt="" id='cardimage'/>
                    </div>
                    <div id="subc4"></div>
                    <div id="cir4">04</div>
                </div>
                <div id="card5" className='card'>
                <div id="subc5"></div>
                    <div id="cir5">05</div>
                    <div id="si">
                    <img src={PC4} alt="" id='cardimage'/>
                    <span>Train the teachers programme</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
