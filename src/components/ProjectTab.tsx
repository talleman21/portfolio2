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
    <div className="project mx-auto">
      <div className="row">
        <div className="col-3 border-right ">
          {projects.map((project,index) => (
            <div  
              onClick={()=>setCurrentProject(index)} 
              className={`border-bottom border-right p-3 m-2 text-center cursor-pointer ${currentProject === index ? 'selected-tab text-white':''}`}
              style={{borderRadius:'15px'}}
            >
              {project.title}
            </div>
          ))}
        </div>
        <div className="col">
          <div className="row">
            <div className="col-6 d-flex flex-column align-items-between">
              <div>
                <div className='text-muted text-center mt-1' style={{fontSize:'1.5rem',fontWeight:500}}>
                  {projects[currentProject].type}
                </div>
                <div className='border m-2 p-3 text-muted' style={{fontSize:'1.5rem',fontWeight:500,borderRadius:'15px',minHeight:'200px'}}>
                  <div className="border-bottom">
                    Description:
                  </div>
                  <div style={{fontSize:'1rem'}}>
                    {projects[currentProject].description}
                  </div>
                </div>
              </div>
              <div className='row m-2'>
                <a
                  href={projects[currentProject].github}
                  className='github-link col-6 text-center border-right'
                >
                  <i className="fa fa-github m-1" style={{fontSize:'2rem',textDecoration:'none',color:'white'}}></i>
                </a>
                <a
                  href={projects[currentProject].live}
                  className='live-link col-6 text-center border-left'
                >
                  <i className="fa fa-play m-1" style={{fontSize:'2rem',textDecoration:'none',color:'white'}}></i>
                </a>
              </div>
            </div>
            <div className="col-6 d-flex align-items-center justify-content-center">
              <div>
                <div className="d-flex justify-content-center">
                  <img src={projects[currentProject].image || "format.png"} alt='monitors showing apps' />
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
