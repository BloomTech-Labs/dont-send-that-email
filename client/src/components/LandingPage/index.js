import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

class LandingPage extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
      return (
<div>
    <nav className="navbar navbar-expand-lg fixed-top navbar-transparent" color-on-scroll="300">
        <div className="container">
			<div className="navbar-translate">
				<a className="navbar-brand" href="https://www.creative-tim.com">Don't send that email</a>
	            <button className="navbar-toggler navbar-toggler-right navbar-burger" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-bar"></span>
					<span className="navbar-toggler-bar"></span>
					<span className="navbar-toggler-bar"></span>
	            </button>
			</div>
	        <div className="collapse navbar-collapse" id="navbarToggler">
	            <ul className="navbar-nav ml-auto">
					<li className="nav-item">
                        <a href={process.env.REACT_APP_LOGIN_URL} class="nav-link"><i class="nc-icon nc-button-power"></i>Let's get started</a>
	                </li>
					<li className="nav-item">
                        <a className="nav-link" rel="tooltip" title="Follow us on Twitter" data-placement="bottom" href={"#"} target="_blank">
                            <i className="fa fa-twitter"></i>
                            <p className="d-lg-none">Twitter</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" rel="tooltip" title="Like us on Facebook" data-placement="bottom" href={"#"} target="_blank">
                            <i className="fa fa-facebook-square"></i>
                            <p className="d-lg-none">Facebook</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" rel="tooltip" title="Follow us on Instagram" data-placement="bottom" href={"#"} target="_blank">
                            <i className="fa fa-instagram"></i>
                            <p className="d-lg-none">Instagram</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" rel="tooltip" title="Star on GitHub" data-placement="bottom" href={"#"} target="_blank">
                            <i className="fa fa-github"></i>
                            <p className="d-lg-none">GitHub</p>
                        </a>
                    </li>
	            </ul>
	        </div>
		</div>
    </nav>
        
    
<div className="page-header computer" data-parallax="false" >
    <div className="filter"></div>
        <div className="container">
            <div className="motto text-center">
                <h1>Don't send that email!</h1>
                <h3>Save yourself the trouble of worrying about the tone of your emails.</h3>
                <br />
            </div>
        </div>
    </div>
<div className="main">
    <div className="section text-center">
        <div className="container">
            <div className="row">
                <div className="col-md-8 ml-auto mr-auto">
                    <h2 className="title">Let's talk product</h2>
                    <h5 className="description">Our product can help you in many situations, want that job and need someone to ensure you give the proper tone or convey the right emotions? We got you covered. Working for a non-profit organization and need to bring awareness? We got you covered.</h5>
                    <br/>
                    <a href="#paper-kit" className="btn btn-danger btn-round">See Details</a>
                </div>
            </div>
            <br/><br/>
            <div className="row">
                <div className="col-md-3">
                    <div className="info">
                        <div className="icon icon-danger">
                            <i className="nc-icon nc-chat-33"></i>
                        </div>
                        <div className="description">
                            <h4 className="info-title">Family and friends</h4>
                            <p className="description">Our product can help you give the proper holiday wish or casual conversation.</p>
                            <a href="#pkp" className="btn btn-link btn-danger">See more</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="info">
                        <div className="icon icon-danger">
                            <i className="nc-icon nc-bulb-63"></i>
                        </div>
                        <div className="description">
                            <h4 className="info-title">Intuitive</h4>
                            <p>Help you catch the right emotions to ensure higher chances to convey what you want.</p>
                            <a href="#pkp" className="btn btn-link btn-danger">See more</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="info">
                        <div className="icon icon-danger">
                            <i className="nc-icon nc-email-85"></i>
                        </div>
                        <div className="description">
                            <h4 className="info-title">Promotions</h4>
                            <p>Our product can help you achieve.</p>
                            <a href="#pkp" className="btn btn-link btn-danger">See more</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="info">
                        <div className="icon icon-danger">
                            <i className="nc-icon nc-watch-time"></i>
                        </div>
                        <div className="description">
                            <h4 className="info-title">Efficiency</h4>
                            <p>Always in a hurry? We got you covered, One click away to prevent offensive emails.</p>
                            <a href="#pkp" className="btn btn-link btn-danger">See more</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <div className="section section-dark text-center">
        <div className="container">
            <h2 className="title">Let's talk about us</h2>
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-profile card-plain">
                        <div className="card-avatar">
                            <a href={"#"}>
                                <img src="./assets/img/faces/thomas.jpg" alt="..."/>
                            </a>
                        </div>
                        <div className="card-body">
                            <a href="#paper-kit">
                                <div className="author">
                                    <h4 className="card-title">Thomas</h4>
                                    <h6 className="card-category">Project Manager</h6>
                                </div>
                            </a>
                            <p className="card-description text-center">
                            Did you meet this week MVP yet?
                            </p>
                        </div>
                        <div className="card-footer text-center">
                            <a href="#pablo" className="btn btn-link btn-just-icon btn-neutral"><i className="fa fa-twitter"></i></a>
                            <a href="#pablo" className="btn btn-link btn-just-icon btn-neutral"><i className="fa fa-google-plus"></i></a>
                            <a href="#pablo" className="btn btn-link btn-just-icon btn-neutral"><i className="fa fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card card-profile card-plain">
                        <div className="card-avatar">
                            <a href="#avatar"><img src="./assets/img/faces/Fred.jpg" alt="..."/></a>
                        </div>
                        <div className="card-body">
                            <a href="#paper-kit">
                                <div className="author">
                                    <h4 className="card-title">Fred</h4>
                                    <h6 className="card-category">Designer</h6>
                                </div>
                            </a>
                            <p class="card-description text-center">
                            Hey.
                            </p>
                        </div>
                        <div class="card-footer text-center">
                            <a href="#pablo" className="btn btn-link btn-just-icon btn-neutral"><i className="fa fa-twitter"></i></a>
                            <a href="#pablo" className="btn btn-link btn-just-icon btn-neutral"><i className="fa fa-google-plus"></i></a>
                            <a href="#pablo" className="btn btn-link btn-just-icon btn-neutral"><i className="fa fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card card-profile card-plain">
                        <div className="card-avatar">
                            <a href="#avatar"><img src="./assets/img/faces/jared.jpg" alt="..."/></a>
                        </div>
                        <div className="card-body">
                            <a href="#paper-kit">
                                <div className="author">
                                    <h4 className="card-title">Jared</h4>
                                    <h6 className="card-category">Developer</h6>
                                </div>
                            </a>
                            <p className="card-description text-center">
                            We chose NodeJS because it is highly performant event-driven response cycle allows for high traffic.
                            </p>
                        </div>
                        <div className="card-footer text-center">
                            <a href="#pablo" className="btn btn-link btn-just-icon btn-neutral"><i className="fa fa-twitter"></i></a>
                            <a href="#pablo" className="btn btn-link btn-just-icon btn-neutral"><i className="fa fa-google-plus"></i></a>
                            <a href="#pablo" className="btn btn-link btn-just-icon btn-neutral"><i className="fa fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

        <div className="section landing-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 ml-auto mr-auto">
                        <h2 className="text-center">Keep in touch?</h2>
                        <form className="contact-form">
                            <div className="row">
                                <div className="col-md-6">
                                    <label>Name</label>
                                    <div className="input-group">
                                        <span className="input-group-addon">
                                            <i className="nc-icon nc-single-02"></i>
                                        </span>
                                        <input type="text" className="form-control" placeholder="Name"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label>Email</label>
                                    <div className="input-group">
                                        <span className="input-group-addon">
                                            <i className="nc-icon nc-email-85"></i>
                                        </span>
                                        <input type="text" className="form-control" placeholder="Email"/>
                                    </div>
                                </div>
                            </div>
                            <label>Message</label>
                            <textarea className="form-control" rows="4" placeholder="Tell us your thoughts and feelings..."></textarea>
                            <div className="row">
                                <div className="col-md-4 ml-auto mr-auto">
                                    <button className="btn btn-danger btn-lg btn-fill">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div> 
</div> 
    
      );
    }
  }

export default LandingPage;
