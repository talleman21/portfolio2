import React from "react";

interface Props {
  className?: string;
}

const Jumbotron = (props: Props) => {
  return (
    <div className={`jumbotron jumbotron-fluid ${props.className}`}>
      <div className="container">
          <div className='m-sm-4 d-flex  justify-content-center' >
            <img className='rounded-circle profile-img'  src='talleman_profile.png' />
            <div className='text-dark intro pt-4'>
              <h3 className='text-center'>
                Thomas Alleman
              </h3>
              <h5 className='text-center'>Developer</h5>
              <hr/>
              <div className='text-center'>
                <img style={{height:'30px'}} className='mx-1' src="tech-images/mongodb.png" alt=""/>
                <img style={{height:'30px'}} className='mx-1' src="tech-images/express.js.png" alt=""/>
                <img style={{height:'30px'}} className='mx-1' src="tech-images/react.png" alt=""/>
                <img style={{height:'30px'}} className='mx-1' src="tech-images/node.js.png" alt=""/>
              </div>
            </div>
          </div>
        
      </div>
    </div>
  );
};

export default Jumbotron;
