import React from 'react';

const LandingPage = () => {
      return (
        <div>
            <nav>
            <a href={process.env.REACT_APP_LOGIN_URL}>Sign In</a>
            <a href={process.env.REACT_APP_LOGIN_URL}>Sign Up</a>
            </nav>
            <div>
                <img src="#" alt="image goes here"/>
                <p>Blah blah blah(Description goes here)</p>  
            </div>
        </div>
        
      );
  }

  export default LandingPage;