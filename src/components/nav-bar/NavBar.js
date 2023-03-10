import { NavLink } from 'react-router-dom'
import BtnDarkMode from '../btn-dark-mode/BtnDarkMode';

const NavBar = () => {

  const normal = 'nav-list__link'
  const active = 'nav-list__link nav-list__link--active'

  
  return ( 
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to='/'  className="logo"><strong>Freelancer</strong> portfolio</NavLink>

          <BtnDarkMode/>

          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink to='/' className={(({isActive}) => isActive ? active : normal)}>Home</NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to='/projects'  className={(({isActive}) => isActive ? active : normal)}>Projects</NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to='/contacts'  className={(({isActive})=> isActive ? active : normal)}>Contacts</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
   );
}
 
export default NavBar;