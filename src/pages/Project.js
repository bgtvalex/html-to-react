import { useParams } from 'react-router-dom'
import BtnGitHub from '../components/btn-github/BtnGitHub'
import projects from '../helpers/projectlist'

const Project = () => {

  const { id } = useParams()
  const project = projects[id]

  return ( 
    <main className="section">
      <div className="container">
        <div className="project-details">

          <h1 className="title-1">{project.title}</h1>

          <img src={project.imgBig} alt={project.title} className="project-details__cover"/>

          <div className="project-details__desc">
            <p>Skills: React, Node.js, MongoDB</p>
          </div>

          {project.git && 
            (<BtnGitHub 
              git={project.git}
              title={project.title}
            />) }

          

          </div>
      </div>
    </main>
   );
}
 
export default Project;