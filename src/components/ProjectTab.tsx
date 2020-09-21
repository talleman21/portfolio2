import React from "react";

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
  // const {title,type,description,technologies,github,image} = props.project

  return (
    <div className="project border mx-auto">
      <div className="row">
        <div className="col-4 border-right">
          {props.projects.map((project) => (
            <div className="border-bottom p-3 text-right">{project.title}</div>
          ))}
        </div>
        <div className="col">
          <div className="row">
            <div className="col">
              <div className=''>Type: {props.projects[0].type}</div>
              <div>
                <div>
                  Description: 
                </div>
                <div>
                  {props.projects[0].description}</div>
                </div>
                <div>GitHub: {props.projects[0].github}</div>
                <div>Live: {props.projects[0].live}</div>

            </div>
            <div className="col">
              <div className="d-flex justify-content-center">
                <img src="format.png" alt='monitors showing apps' />
              </div>
              <div className="d-flex justify-content-center">
                {props.projects[0].technologies.map((tech) => (
                  <img style={{ height: "40px", padding: "5px" }} src={`tech-images/${tech}.png`} />
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
