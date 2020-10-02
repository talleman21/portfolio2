import React, {useState} from "react";

interface Props {
  projects: Project[];
}

type Project = {
  title: string;
  type: string;
  description: string;
  technologies: string[];
  github: string;
  live:string
  image: string;

};

const ProjectTab = (props: Props) => {
  const {projects} = props

  const [currentProject,setCurrentProject] = useState(0)

  return (
    <div className="project border mx-auto">
      <div className="row">
        <div className="col-3 border-right">
          {projects.map((project,index) => (
            <div  onClick={()=>setCurrentProject(index)} className="border-bottom p-3 text-right">{project.title}</div>
          ))}
        </div>
        <div className="col">
          <div className="row">
            <div className="col-6 d-flex flex-column align-items-between">
              <div>
                <div className='border-bottom'>
                  Type
                </div>
                <div className='mb-3'>
                  {projects[currentProject].type}
                </div>
              </div>
              <div>
                <div className='border-bottom'>
                  Description: 
                </div>
                <div className='mb-3'>
                  {projects[currentProject].description}
                </div>
              </div>
              <div className='row px-3'>
                <a
                  href={projects[currentProject].github}
                  className='github-link col-6 text-center border-right'
                >
                  <i className="fa fa-github m-1" style={{fontSize:'2rem'}}></i>
                </a>
                <a
                  href={projects[currentProject].github}
                  className='live-link col-6 text-center border-left'
                >
                  <i className="fa fa-play m-1" style={{fontSize:'2rem'}}></i>
                </a>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex justify-content-center">
                <img src="format.png" alt='monitors showing apps' />
              </div>
              <div className="d-flex flex-wrap justify-content-center">
                {projects[currentProject].technologies.map((tech) => (
                  <img style={{ height: "40px", padding: "5px" }} src={`tech-images/${tech}.png`} alt={tech + ' logo'} />
                ))}
              </div>
            </div>

            </div>
          </div>

      </div>
    </div>
    // <div className={`project-tab-${props.direction} mx-auto row`} style={{width:'100%'}}>
    //   <div className={`col mx-5 my-3 text-dark order-${props.direction === 'left' ? 1:0}`}>
    //     <h3>{title}</h3>
    //     <h5>{type}</h5>
    //     <hr/>
    //     <div>
    //       {description}
    //     </div>
    //   </div>
    //   <div className="col my-3">
    //     <div className='d-flex justify-content-center'>
    //       <img className={props.direction === 'left' ? '':'mirror-img'} src='format.png' />

    //     </div>
    //     <div className="d-flex justify-content-center">
    //       {technologies.map(tech => <img style={{height:'40px',padding:'5px'}} src={`tech-images/${tech}.png`} />)}
    //     </div>

    //   </div>

    // </div>
  );
};

export default ProjectTab;
