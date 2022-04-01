import {Link} from 'react-router-dom'



function Header(){

return(
  <>
  <header className="header-section">
    <div className="navbar">
      <ul className='nav-links'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About </Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/articles">Articles</Link></li>
      
      </ul>
    </div>
  </header>
  </>
)

}
export {Header};