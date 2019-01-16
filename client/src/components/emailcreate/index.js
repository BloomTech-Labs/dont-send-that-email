import React, {Component }from 'react';
import {NavItem, NavLink, Nav} from 'reactstrap';
import axios from 'axios'
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Sidebar from '../Navigation/Sidebar';
import { Link } from 'react-router-dom';
import './email.css';

class NewEmail extends Component {
  constructor(props) {
    super(props)
      this.state = {
        text: '',
        analysis: null,
        error: ''
      }
  }


  handleInputChange = (e) => {
    this.setState({text: e.target.value})
  }

  analyzeText = () => {
    axios
      .post('http://localhost:5000/api/watson', {text: this.state.text})
      .then(res => this.setState({analysis: res.data.document_tone}))
      .catch(err => this.setState({error: err}))
  }



  render() {
    return (
   
<div>
        <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      {/* <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>                        
      </button>
      <a className="navbar-brand" href="#">DSTE</a> */}
      <Breadcrumb>
          <BreadcrumbItem><Link to='documents'>Home</Link></BreadcrumbItem>
          <BreadcrumbItem active>Document</BreadcrumbItem>
      </Breadcrumb>
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
      <Sidebar />
    </div>

    <div className="form-group">
      <label for="email">Name</label>
      <input  className="form-control"  placeholder="Name" name="Name" />
    </div>

    <div className="form-group">
      <label for="email">To</label>
      <input  className="form-control"  placeholder="To" name="To" />
      <textarea value={this.state.text} onChange={this.handleInputChange}>hello world</textarea>
    </div>

    <div className="col-sm-8 text-left"> 
      <h1>Copy Edit</h1>
      <p>test text here</p>
      <hr />
      <h3>Test</h3>
      <Button type="Analyze" onClick={this.analyzeText}>Analyze</Button>

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

}



export default NewEmail;

