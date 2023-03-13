import { NavLink } from "react-router-dom";

const ProjectItem = ({index, title, img}) => {
  return ( 
    <li className="project">
      <NavLink to={`/project/${index}`}>
        <img src={img} alt={title} className="project__img"/>
        <h3 className="project__title">{title}</h3>
      </NavLink>
        
    </li>
   );
}
 
export default ProjectItem;