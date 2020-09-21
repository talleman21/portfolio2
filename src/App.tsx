import React from 'react';
import './style/App.css';
import projectInfo from './shared/projectInfo'

import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron';
import ProjectTab from './components/ProjectTab';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <div className="project-section p-3">
        <h2 className='text-center mb-3 text-light'>Projects</h2>
        <ProjectTab projects={projectInfo} />
      </div>
      
      
    </div>
  );
}

export default App;
