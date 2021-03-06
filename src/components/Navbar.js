import React, {useState} from 'react';
import PropTypes from 'prop-types';
// import { Link} from "react-router-dom";
export default function Navbar(props) {

  const [myStyle, setMyStyle] = useState({
   color : 'blue'
})

    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#" style ={myStyle} >{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" style ={myStyle} >Home</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" to="#" style ={myStyle} >{props.about}</a>
        </li> */}
        
       
      </ul> 
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox"onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
    </div>
  </div>
</nav> 
        </div>
      
    )
}
Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    about : PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title : "Set title first",
    about : "Set about first"
}
