import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faTwitter, faGithub} from '@fortawesome/free-brands-svg-icons'
function About(){

  return(
    <>
      <section className="about-section">
     <h3>About Me</h3>
     <div className="my-info">
      
        <p>My name is Judith Manyo Ogar. I love to be called Manyorock. I'm a Frontend Developer currently based in Ibadan, Nigeria.</p>
        <p>Because of my love for Innovation and Technology, I got into software development in 2020.<br/> I'm fascinated about the new age Technology and I cant wait to see how the world evolves with Tech & I'm glad I am part of it.<br/>I associate with various developers communities on Twitter and Linkedin</p>



        <div className="tech-skills">
        <h5>Technologies I work with</h5>
        <p> As a Frontend Developer, my Tech skills are
        <ul>
          <li>React Js</li>
           <li>JavaScript</li>
           <li>HTML5</li>
           <li>CSS3</li>
           <li>GIT</li>
        </ul>
        </p>
        </div>
        <div className="soft-skills">
          <h5>Soft skills</h5>
          <ul>
            <li>Fast Learner</li>
            <li>Good collaborator</li>
            <li>Team sportmanship</li>
            <li>Result oriented</li>
            <li>Good communication skills</li>
          </ul>
        </div>
        <p>When I'm not writing codes, I could be reading a novel, music & Dancing, or surfing the internet.</p>
     </div>
        
       
        <div className="contact">
        <h5> Do you want to contact me?</h5>
       
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
       </div>
           
       </section>
    </>
  )
} 

export {About}