import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faPhone, faAngleRight, faStar } from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faTwitter, faGithub} from '@fortawesome/free-brands-svg-icons'
function About(){

  return(
    <>
      <section className="about-section">
     <h3>About Me</h3>
       <div className="about-container">
        <div className="about-info1"> 
          <p className="intro"><span className='name'>Hello, I'm Judith Manyo Ogar</span><br /><span>A skilled Frontend Developer</span> who understand and know to implement good user interface and create great user experience with clean codes.  <br/> I know the importance of web accessibility, and so I write codes that makes the web accessible to everyone regardless of physical condition and devices used.
          <span>I believe team work makes the dream work!</span> & I'm your best bet to add to your team and help build your product. I'm a great communicator and problem solver
          <br/> <span>I will turn your dream product to reality with codes!</span></p>
         
        </div>
        <div className="image">
          <img src='images/image.jpeg' alt="Judith"></img>
        </div>
       </div>
       <ul className='social-links'>
        <li><FontAwesomeIcon 
          icon={faPhone} 
           className="font-awesome"
          />+234 90 3811 6985
        </li>

        <li><FontAwesomeIcon 
           icon={faEnvelope} 
           className="font-awesome"
            />judithmanyo2@gmail.com
        </li>
        
        <li><a href="https://github.com/Manyo-Rocks"><FontAwesomeIcon 
           icon={faGithub} 
            className="font-awesome"
           /></a>
        </li>
         <li><a href='https://twitter.com/Judith_ogar' ><FontAwesomeIcon 
           icon= {faTwitter} 
           className="font-awesome"
           /></a>
          </li>
        <li><a href="https://linkedin.com/in/judith-manyo-ogar"><FontAwesomeIcon 
           icon= {faLinkedin} 
           className="font-awesome"
           /></a>
           </li>
        
        
       </ul>

       <div className="tech-skills">
       <h4>Technologies & Tools I Work With</h4>
         <ul>
           <li>React Js</li>
           <li>JavaScript</li>
           <li>HTML5</li>
           <li>CSS3</li>
           <li>GIT</li>

         </ul>
       </div>
       </section>
    </>
  )
} 

export {About}