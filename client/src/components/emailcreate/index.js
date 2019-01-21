import React, {Component }from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Sidebar from '../Navigation/Sidebar';
import { Link } from 'react-router-dom';
import Editor from './Editor';
import './email.css';

class NewEmail extends Component {
  state = {
    title: "",
    text: "hello world",
    tone_analysis: null,
    error: "",
    addressee: "",
    versions: []
  }

  componentDidMount () {
    const { id } = this.props.match.params;
    if (id) {
      this.fetchEmail(id);
    }
  }

  fetchEmail = (id) => {
    axios.get(process.env.REACT_APP_EMAILS_URL + id, { withCredentials: true })
      .then(({ data }) => {
        const state = { ...this.state, ...data.email };
        // Grab the latest version and set the text to match
        // TODO: set the version number instead and let user navigate between versions
        if (data.email.versions.length) {
          state.text = data.email.versions.pop().text;
        }
        this.setState(state);
      });
  }

  handleInputChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  analyzeText = () => {
    axios
      .post('http://localhost:5000/api/watson', {text: this.state.text})
      .then(res => this.setState({analysis: res.data}))
      .catch(err => this.setState({error: err}))
  }

  handleSave = async (e) => {
    e.preventDefault();
    const body = {
      email: {
        title: this.state.title,
        addressee: this.state.addressee
      },
      version: {
        text: this.state.text,
        tone_analysis: this.state.tone_analysis
      }
    }

    if (this.props.match.params.id) {
      body.email.id = this.props.match.params.id;
    }

    
    let headers = {
      withCredentials: true,
      headers: {'Authorization': process.env.USER_COOKIE}
    }

    try {
      const { data: { id } } = await axios.post(process.env.REACT_APP_EMAILS_URL, body, headers)
      if (!this.props.match.params.id) {
        this.props.history.push(`/email/${id}`);
      }
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
   
<div>
        <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div>
      {/* className="navbar-header" */}
      {/* <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>                        
      </button>
      <a className="navbar-brand" href="#">DSTE</a> */}
      <Breadcrumb>
          <BreadcrumbItem><Link to='/'>Home</Link></BreadcrumbItem>
          <BreadcrumbItem active>Document</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav">
        <li className="active"><a href="/">Home</a></li>
        {/* <li><a href="/">SignOut</a></li> */}
 
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li><a href="/"><span className="glyphicon glyphicon-log-in"></span> SignOut</a></li>
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
      <label htmlFor="email">Name</label>
      <input className="form-control"  placeholder="Name" name="title" value={this.state.title} onChange={this.handleInputChange}/>
    </div>

    <div className="form-group">
      <label htmlFor="email">To</label>
      <input  className="form-control"  placeholder="To" name="addressee" onChange={this.handleInputChange} value={this.state.addressee} />
      <Editor html={this.state.text} onChange={this.handleInputChange} />
    </div>

    <div className="col-sm-8 text-left"> 
      <h1>Copy Edit</h1>
      <p>test text here</p>
      <hr />
      <h3>Test</h3>
      <Button type="Analyze" onClick={this.analyzeText}>Analyze</Button>

      <Button type="submit" onClick={this.handleSave}>Save</Button>

      <Button type="submit">Cancel</Button>
    </div>
    <div className="col-sm-2 sidenav">
      <div className="well">
      <a href="/">Angry <span className="badge">5%</span></a><br />
      </div>
      <div className="well">
      <a href="/">Sadness<span className="badge">10%</span></a>< br />
      </div>
      <div className="well">
      <a href="/">Joy <span className="badge">5%</span></a><br />
      </div>
    </div>
  </div>
</div>
</div>


    );
  }

}



export default NewEmail;

