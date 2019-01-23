import React, {Component} from 'react';
import axios from 'axios';
import {Button} from 'reactstrap';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import Sidebar from '../Navigation/Sidebar';
import {Link} from 'react-router-dom';
import Editor from './Editor';
import Analysis from './Analysis';
import './email.css';

class NewEmail extends Component {
  state = {
    title: '',
    text: "I hate ice cream. I love to go to the park. I'm worried that I will have to eat ice cream at the park. Would you like to go to the park and eat my ice cream?",
    tone_analysis: null,
    error: '',
    addressee: '',
    versions: [],
  };

  componentDidMount () {
    const {id} = this.props.match.params;
    if (id) {
      this.fetchEmail (id);
    }
  }

  fetchEmail = id => {
    axios
      .get (process.env.REACT_APP_EMAILS_URL + id, {withCredentials: true})
      .then (({data}) => {
        const state = {...this.state, ...data.email};
        // Grab the latest version and set the text to match
        // TODO: set the version number instead and let user navigate between versions
        if (data.email.versions.length) {
          state.text = data.email.versions.pop ().text;
        }
        this.setState (state);
      });
  };

  handleInputChange = e => {
    this.setState ({[e.target.name]: e.target.value});
  };

  handleSave = async e => {
    console.log ('from handle save', e);
    e.preventDefault ();
    const body = {
      email: {
        title: this.state.title,
        addressee: this.state.addressee,
      },
      version: {
        text: this.state.text,
        tone_analysis: this.state.tone_analysis,
      },
    };

    if (this.props.match.params.id) {
      body.email.id = this.props.match.params.id;
    }

    let headers = {
      withCredentials: true,
      headers: {Authorization: process.env.USER_COOKIE},
    };

    try {
      const {data: {id}} = await axios.post (
        process.env.REACT_APP_EMAILS_URL,
        body,
        headers
      );
      if (!this.props.match.params.id) {
        this.props.history.push (`/email/${id}`);
      }
    } catch (err) {
      console.log (err);
    }
  };

  render () {
    return (
      <div>
        <nav className="navbar navbar-inverse">
          {/* breadcrumb div right here*/}
          <div>
            {/* className="navbar-header" */}
            {/* <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>                        
      </button>
      <a className="navbar-brand" href="#">DSTE</a> */}
            <Breadcrumb>
              <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
              <BreadcrumbItem active>Document</BreadcrumbItem>
            </Breadcrumb>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li className="active"><a href="/">Home</a></li>
              {/* <li><a href="/">SignOut</a></li> */}

            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="/">
                  <span className="glyphicon glyphicon-log-in" /> SignOut
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {/* The side nav menu*/}
        <div className="container-fluid text-center">
          <div className="row content">
            <div className="col-sm-2 sidenav">
              <Sidebar />
            </div>

            <div className="container">
              <div className="row align-items-start ">
                {/* the subject line field -Chad */}

                <div className="col">
                  <div className="form-group mb-1 mt-4">
                    <input
                      className="form-control"
                      placeholder="Subject Line"
                      name="title"
                      value={this.state.title}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  {/* the addressee field -Chad*/}
                  <div className="form-group mt-1">
                    <input
                      className="form-control"
                      placeholder="To"
                      name="addressee"
                      onChange={this.handleInputChange}
                      value={this.state.addressee}
                    />
                  </div>
                </div>
                <div className="col-6">
                  {/* I CANNOT figure out how to center these buttons on the Y-axis. Driving me nuts   -Chad */}

                  {/* version buttons go here. They need an arrow icon  -Chad */}
                  <div className="row d-flex justify-content-center mt-4 mb-4">
                    <button type="button" className="btn btn-secondary mr-2">
                      Older
                    </button>
                    <button type="button" className="btn btn-secondary ml-2">
                      Newer
                    </button>
                  </div>
                  <div className="row d-flex justify-content-center mb-3">
                    edit 100/100
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col">
                  {/*This editor component doesn't look like a form field. I'm not sure what's going on here -Chad*/}
                  <div className="border border-light form-group">
                    <Editor
                      html={this.state.text}
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>
                {/*I thought we'd have a column next to the text where the analysis and colors pop up
        Also, we can have a CSS class that governs their behavior when they get added or changed as a result of the analysis
           -Chad*/}
                <div className="analysis col-3">
                  <Analysis
                    toneAnalysis={this.state.tone_analysis}
                    text={this.state.text}
                  />
                </div>
              </div>
              <div className="row d-flex justify-content-start mt-6 ">
                {/* i wrote some css to make the buttons the same width -Chad */}

                {/* adding ternary operator for future use of save vs save as. We have to decide on how we identify the current version*/}
                <Button
                  className="ml-3 mr-3 mt-3 action-buttons"
                  type="submit"
                  onClick={this.handleSave}
                >
                  {this.state.versions ? 'Save' : 'Save As'}
                </Button>
                <Button className="ml-3 mr-3 mt-3 action-buttons" type="submit">
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewEmail;
