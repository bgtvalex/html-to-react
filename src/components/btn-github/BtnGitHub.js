import img from './img/gitHub-black.svg'

import { NavLink } from "react-router-dom";

const BtnGitHub = (git) => {
  return ( 
    <NavLink to={git}  className="btn-outline">
      <img src={ img } alt=""/>
      GitHub repo
    </NavLink>
   );
}
 
export default BtnGitHub;