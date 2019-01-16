import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LandingPage extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
      return (
        <div>
            <nav>
                <Link to="/documents" onClick={this.props.handleClick}><a href={process.env.REACT_APP_LOGIN_URL}>Sign In</a></Link>
                <a href={process.env.REACT_APP_LOGIN_URL}>Sign Up</a>
            </nav>
            <div>
                <img src="#" alt="image goes here"/>
                <p>Blah blah blah(Description goes here)</p>  
            </div>
        </div>
        
      );
    }
  }

  export default LandingPage;
