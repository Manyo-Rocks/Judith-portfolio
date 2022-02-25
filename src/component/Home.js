
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faPhone, faAngleRight, faStar } from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faTwitter, faGithub} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

function Home() {

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
      <div className="see-more">
          <Link to={`/about`}>see         more<FontAwesomeIcon 
           icon={faAngleRight} 
           />
         </Link>
      </div>  
      </section>
      <div className="projects-cointainer">
       <h3>My Projects</h3>
        <div className="project">
          <div className="project-img">
           <a href='https://xabeez-beauty.netlify.app/'> <img src='images/xabeez-img.jpg' alt="xabeez website" /></a>
          </div>
          <div className="project-info">
            <h4 className='title'>Xabeez website</h4>
            <p>A beauty and cosmetic website where users can shop their favourites makeup items.</p> <ul>
              <li><FontAwesomeIcon icon={faStar} />Website visitors can add items to their cart.</li>
              <li><FontAwesomeIcon icon={faStar} /> Website visitors can see the number of items in their carts, increase or decrease the number of cart items and see total amount they need to pay</li>
            </ul>
             <p><span class="tools-used">This website was built with HTML, CSS & JavaScript</span></p>
            
          </div>
        </div>
        <div className="project">
          <div className="project-img">
            <img src='images/cars&spec.jpg' alt="Cars website" />
          </div>
          <div className="project-info">
            <h4 className='title'>Cars & Spec</h4>
            <p>A website that gives informations  and specifications of exotic and luxury cars, to help people know some information about the car they want to purchase. </p><ul>
              <li><FontAwesomeIcon icon={faStar}/> Website visitors can directly search for informations about their choiced car rather than having to go through the lists of all the cars displayed.</li>
              <li><FontAwesomeIcon icon={faStar} /> Website visitors can make comments and view previous visitors comments.</li>
            </ul>
              <p><span class="tools-used">This website was built with React Js</span></p>
            
          </div>
        </div>
        <div className="see-more">
          <Link to={`/projects`}>see         more<FontAwesomeIcon 
           icon={faAngleRight} 
           
           />
         </Link>
      </div> 
      </div> 
      <section className="article">
        <h3>My Article </h3>
        <a href="https://manyo-rock.hashnode.dev/what-do-cascading-in-css-actually-mean#write-comment"><img src='images/blogpost1.jpg' alt="article" style={{width:'70%',heigth: '10px', padding: '1rem'}} /></a>
      </section>
     
   </>
  )
} 

export {Home}