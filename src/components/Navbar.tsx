import React,{useState} from "react";

interface Props {}

const Navbar = (props: Props) => {

  const [collapse,setCollapse] = useState(true)

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <a className="navbar-brand ml-3 d-sm-none" href="#">
        TAlleman-Portfolio
      </a>
      <button className="navbar-toggler" type="button" onClick={()=>setCollapse(!collapse)}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`${collapse ? 'collapse':''} navbar-collapse`} id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Projects <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Github
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
