import React from 'react';
import {NavItem, NavLink, Nav} from 'reactstrap';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './email.css';

const NewEmail = () => {
    return (
   
<div>
        <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>                        
      </button>
      <a className="navbar-brand" href="#">DSTE</a>
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav">
        <li className="active"><a href="#">Home</a></li>
        {/* <li><a href="#">SignOut</a></li> */}
 
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> SignOut</a></li>
      </ul>
    </div>
  </div>
</nav>
  
<div className="container-fluid text-center">    
  <div className="row content">
    <div className="col-sm-2 sidenav">
      <p><a href="#">Link</a></p>
      <p><a href="#">Link</a></p>
      <p><a href="#">Link</a></p>
    </div>

    <div className="form-group">
      <label for="email">Name</label>
      <input  className="form-control"  placeholder="Name" name="Name" />
    </div>
                     

    <div className="form-group">
      <label for="email">To</label>
      <input  className="form-control"  placeholder="To" name="To" />
    </div>

    <div className="col-sm-8 text-left"> 
      <h1>Copy Edit</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <hr />
      <h3>Test</h3>
      <Button type="Analyze">Analyze</Button>

      <Button type="submit">Save</Button>

      <Button type="submit">Cancel</Button>
    </div>
    <div className="col-sm-2 sidenav">
      <div className="well">
      <a href="#">Angry <span className="badge">5%</span></a><br />
      </div>
      <div className="well">
      <a href="#">Sadness<span className="badge">10%</span></a>< br />
      </div>
      <div className="well">
      <a href="#">Joy <span className="badge">5%</span></a><br />
      </div>
    </div>
  </div>
</div>
</div>


    );
}


export default NewEmail;