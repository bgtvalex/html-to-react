import ProjectItem from "../components/project-item/ProjectItem";
import projects from "../helpers/projectlist";

const Projects = () => {
  return ( 
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {
            projects.map(item => {
              return <ProjectItem
                key={item.id}
                index={item.id}
                title={item.title}
                img={item.img}
              />
              
            })
          }
          
          

        </ul>
      </div>
    </main>
   );
}
 
export default Projects;