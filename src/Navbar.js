import './scss/style.scss';
import React from 'react';

const navbar = () => {
  return(
 <div className='container'>
  <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Shortly</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link" href="#">Features</a>
        <a className="nav-link" href="#">Pricing</a>
        <a className="nav-link ">Resources</a>
      </div>
    
    </div>  <button className='float me-2 bnone login'>
          LogIn
      </button>
      <button className='float bnone signup'>
          Sign Up
      </button>
  </div>
</nav>
 </div>
  )

   
};

export default navbar;
