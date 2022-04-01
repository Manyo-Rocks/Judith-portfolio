import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
function Projects(){

  return(
    <>
      
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
            <a href='https://carsandspec.netlify.app/'>
            <img src='images/cars&spec.jpg' alt="Cars website" /></a>
          </div>
          <div className="project-info">
            <h4 className='title'>Cars & Spec</h4>
            <p>A website that gives informations  and specifications of exotic and luxury cars, to help people know some information about the car they want to purchase. </p><ul>
              <li><FontAwesomeIcon icon={faStar}/> Website visitors can directly search for informations about their choiced car rather than having to go through the lists of all the cars displayed.</li>
              <li><FontAwesomeIcon icon={faStar} /> Website visitors can make comments and view previous visitors comments.</li>
            </ul>
              <p><span>This website was built with React Js</span></p>
            
          </div>
        </div>
        </div>
    </>
  )
} 

export {Projects}