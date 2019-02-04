import React, { Component } from 'react';
import './assets/css/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tai from "./assets/img/faces/tai.png";
import Chad from "./assets/img/faces/chad.jpg";
import Richard from "./assets/img/faces/richard.jpeg";
import Will from "./assets/img/faces/willsmith.jpeg";

class LandingPage extends Component {

  render() {
    return (
      <div>
        {/* Navbar */}  
        <nav
          className="navbar navbar-expand-lg fixed-top navbar-transparent"
          color-on-scroll="300"
        >
          <div className="container">
            <div className="navbar-translate">
              <a className="navbar-brand" href="#">
                Don't send that email
              </a>
              <button
                className="navbar-toggler navbar-toggler-right navbar-burger"
                type="button"
                data-toggle="collapse"
                data-target="#navbarToggler"
                aria-controls="navbarTogglerDemo02"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-bar" />
                <span className="navbar-toggler-bar" />
                <span className="navbar-toggler-bar" />
              </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarToggler">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a
                    href={process.env.REACT_APP_BACKEND_URL + '/auth/login'}
                    className="nav-link"
                  >
                    <i className="nc-icon nc-button-power" />Let's get started
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    rel="tooltip"
                    title="Follow us on Twitter"
                    data-placement="bottom"
                    href="#"
                  >
                    <FontAwesomeIcon
                      icon={['fab', 'twitter']}
                      className="fa fa-twitter"
                    />
                    <p className="d-lg-none">Twitter</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    rel="tooltip"
                    title="Like us on Facebook"
                    data-placement="bottom"
                    href="https://www.facebook.com"
                  >
                    <FontAwesomeIcon
                      icon={['fab', 'facebook']}
                      className="fa fa-facebook-square"
                    />
                    <p className="d-lg-none">Facebook</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    rel="tooltip"
                    title="Follow us on Instagram"
                    data-placement="bottom"
                    href="https://www.instagram.com"
                  >
                    <FontAwesomeIcon
                      icon={['fab', 'instagram']}
                      className="fa fa-instagram"
                    />
                    <p className="d-lg-none">Instagram</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    rel="tooltip"
                    title="Star on GitHub"
                    data-placement="bottom"
                    href="https://github.com/Lambda-School-Labs/dont-send-that-email"
                  >
                    <FontAwesomeIcon
                      icon={['fab', 'github']}
                      className="fa fa-github"
                    />
                    <p className="d-lg-none">GitHub</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Centered Text */}
        <div className="page-header computer" data-parallax="false">
          <div className="filter" />
          <div className="container">
            <div className="motto text-center">
              <h1>Don't send that email!</h1>
              <h3>
                Save yourself the trouble of worrying about the tone of your
                emails.
              </h3>
              <br />
              <a href={process.env.REACT_APP_BACKEND_URL + '/auth/login'} className="btn btn-outline-neutral btn-round"><i className="fa fa-play"></i>Let's get started</a>
            </div>
          </div>
        </div>
        {/* Let's Talk Product Section */}
        <div className="main">
          <div className="section text-center">
            <div className="container">
              <div className="row">
                <div className="col-md-8 ml-auto mr-auto">
                  <h2 className="title">Let's talk product</h2>
                  <h5 className="description">
                    Our product can help you in many situations, want that job
                    and need someone to ensure you give the proper tone or
                    convey the right emotions? We got you covered. 
                  </h5>
                  <br />
                  <a href="#paper-kit" className="btn btn-danger btn-round">
                    See Details
                  </a>
                </div>
              </div>
              <br />
              <br />
              <div className="row">
                {/* Family and friends card */}
                <div className="col-md-3">
                  <div className="info">
                    <div className="icon icon-danger">
                      <i className="nc-icon nc-chat-33" />
                    </div>
                    <div className="description">
                      <h4 className="info-title">Family and friends</h4>
                      <p className="description">
                        Our product can help you give the proper holiday wish or
                        casual conversation.
                      </p>
                      <a href="#pkp" className="btn btn-link btn-danger">
                        See more
                      </a>
                    </div>
                  </div>
                </div>
                {/* Intuitive card */}
                <div className="col-md-3">
                  <div className="info">
                    <div className="icon icon-danger">
                      <i className="nc-icon nc-bulb-63" />
                    </div>
                    <div className="description">
                      <h4 className="info-title">Intuitive</h4>
                      <p>
                        Help you catch the right emotions to ensure higher
                        chances to convey what you want.
                      </p>
                      <a href="#pkp" className="btn btn-link btn-danger">
                        See more
                      </a>
                    </div>
                  </div>
                </div>
                {/* Promotions card */}
                <div className="col-md-3">
                  <div className="info">
                    <div className="icon icon-danger">
                      <i className="nc-icon nc-email-85" />
                    </div>
                    <div className="description">
                      <h4 className="info-title">Promotions</h4>
                      <p>Sometime knowing the proper tone can help reach new potential customers.</p>
                      <a href="#pkp" className="btn btn-link btn-danger">
                        See more
                      </a>
                    </div>
                  </div>
                </div>
                {/* Efficiency card */}
                <div className="col-md-3">
                  <div className="info">
                    <div className="icon icon-danger">
                      <i className="nc-icon nc-watch-time" />
                    </div>
                    <div className="description">
                      <h4 className="info-title">Efficiency</h4>
                      <p>
                        Our product utilize IBM Tone analyzer to ensure you get proper and accurate details.
                      </p>
                      <a href="#pkp" className="btn btn-link btn-danger">
                        See more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

    {/* Let's talk about us Section */}
    <div className="section section-dark text-center team-3">
        <div className="container">
            <div className="row">
            <div className="col-md-8 ml-auto mr-auto text-center">
                <h2 className="title">Let's talk about us</h2>
                <h5 className="description">Six Web Developers from variety of background, met each other for the first time to create a full scale application together.</h5>
            </div>
            </div>
            <div className="space-top"></div>
            <div className="row">
            <div className="col-md-6">
                <div className="card card-profile card-plain">
                <div className="row">
                    <div className="col-md-5">
                    <div className="card-img-top">
                        <a href="#pablo">
                        <img className="img" src={Richard} alt={"Richard Pryor"} />
                        </a>
                    </div>
                    </div>
                    <div className="col-md-7">
                    <div className="card-body text-left">
                        <h4 className="card-title">Richard Verdier</h4>
                        <h6 className="card-category">Full Stack Web Developer</h6>
                        <p className="card-description">
                          I think we did well.
                        </p>
                        <div className="card-footer pull-left">
                        <a href="#pablo" className="btn btn-just-icon btn-link btn-twitter">
                            <FontAwesomeIcon
                            icon={['fab', 'twitter']}
                            className="fa fa-twitter"
                            />
                        </a>
                        <a href="#pablo" className="btn btn-just-icon btn-link btn-facebook">
                            <FontAwesomeIcon
                                icon={['fab', 'linkedin-in']}
                                className="fa fa-linkedin"
                            />
                        </a>
                        <a href="#pablo" className="btn btn-just-icon btn-link btn-google">
                            <FontAwesomeIcon 
                                icon={['fab', 'google-plus-g']}
                                className="fa fa-google-plus"
                            />
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card card-profile card-plain">
                <div className="row">
                    <div className="col-md-5">
                    <div className="card-img-top">
                        <a href="#pablo">
                        <img className="img" src="./assets/img/faces/Fred.jpg"/>
                        </a>
                    </div>
                    </div>
                    <div className="col-md-7">
                    <div className="card-body text-left">
                        <h4 className="card-title">Fred Kohn</h4>
                        <h6 className="card-category">Full Stack Web Developer</h6>
                        <p className="card-description">
                          Hello darkness my old friend.
                        </p>
                        <div className="card-footer pull-left">
                        <a href="#pablo" className="btn btn-just-icon btn-link btn-twitter">
                            <FontAwesomeIcon
                            icon={['fab', 'twitter']}
                            className="fa fa-twitter"
                            />
                        </a>
                        <a href="#pablo" className="btn btn-just-icon btn-link btn-facebook">
                            <FontAwesomeIcon
                                icon={['fab', 'linkedin-in']}
                                className="fa fa-linkedin"
                            />
                        </a>
                        <a href="#pablo" className="btn btn-just-icon btn-link btn-google">
                            <FontAwesomeIcon 
                                icon={['fab', 'google-plus-g']}
                                className="fa fa-google-plus"
                            />
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card card-profile card-plain">
                <div className="row">
                    <div className="col-md-5">
                    <div className="card-img-top">
                        <a href="#pablo">
                        <img className="img" src={Will} alt={"Will Smith"} />
                        </a>
                    </div>
                    </div>
                    <div className="col-md-7">
                    <div className="card-body text-left">
                        <h4 className="card-title">Will Kwon</h4>
                        <h6 className="card-category">Web Designer</h6>
                        <p className="card-description">
                          Wait is the timezone issue related to stripe?
                        </p>
                        <div className="card-footer pull-left">
                        <a href="#pablo" className="btn btn-just-icon btn-link btn-twitter">
                            <FontAwesomeIcon
                            icon={['fab', 'twitter']}
                            className="fa fa-twitter"
                            />
                        </a>
                        <a href="#pablo" className="btn btn-just-icon btn-link btn-facebook">
                            <FontAwesomeIcon
                                icon={['fab', 'linkedin-in']}
                                className="fa fa-linkedin"
                            />
                        </a>
                        <a href="#pablo" className="btn btn-just-icon btn-link btn-google">
                            <FontAwesomeIcon 
                                icon={['fab', 'google-plus-g']}
                                className="fa fa-google-plus"
                            />
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card card-profile card-plain">
                <div className="row">
                    <div className="col-md-5">
                    <div className="card-img-top">
                        <a href="#pablo">
                        <img className="img" src="./assets/img/faces/jared.jpg"/>
                        </a>
                    </div>
                    </div>
                    <div className="col-md-7">
                    <div className="card-body text-left">
                        <h4 className="card-title">Jared Cuffe</h4>
                        <h6 className="card-category">Web Designer</h6>
                        <p className="card-description">
                        Debugging timezones with Richard. Almost, but not quite
                        </p>
                        <div className="card-footer pull-left">
                        <a href="#pablo" className="btn btn-just-icon btn-link btn-twitter">
                            <FontAwesomeIcon
                            icon={['fab', 'twitter']}
                            className="fa fa-twitter"
                            />
                        </a>
                        <a href="#pablo" className="btn btn-just-icon btn-link btn-facebook">
                            <FontAwesomeIcon
                                icon={['fab', 'linkedin-in']}
                                className="fa fa-linkedin"
                            />
                        </a>
                        <a href="#pablo" className="btn btn-just-icon btn-link btn-google">
                            <FontAwesomeIcon 
                                icon={['fab', 'google-plus-g']}
                                className="fa fa-google-plus"
                            />
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card card-profile card-plain">
                <div className="row">
                    <div className="col-md-5">
                    <div className="card-img-top">
                        <a href="#pablo">
                        <img className="img" src={Tai} alt={"me"}/>
                        </a>
                    </div>
                    </div>
                    <div className="col-md-7">
                    <div className="card-body text-left">
                        <h4 className="card-title">Tai Le</h4>
                        <h6 className="card-category">Web Designer</h6>
                        <p className="card-description">
                          I love you like Kanye loves Kanye. Don't be scared of the truth. Kanye loves himself like Kanye loves Kanye.
                        </p>
                        <div className="card-footer pull-left">
                        <a href="#pablo" className="btn btn-just-icon btn-link btn-twitter">
                            <FontAwesomeIcon
                            icon={['fab', 'twitter']}
                            className="fa fa-twitter"
                            />
                        </a>
                        <a href="#pablo" className="btn btn-just-icon btn-link btn-facebook">
                            <FontAwesomeIcon
                                icon={['fab', 'linkedin-in']}
                                className="fa fa-linkedin"
                            />
                        </a>
                        <a href="#pablo" className="btn btn-just-icon btn-link btn-google">
                            <FontAwesomeIcon 
                                icon={['fab', 'google-plus-g']}
                                className="fa fa-google-plus"
                            />
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card card-profile card-plain">
                <div className="row">
                    <div className="col-md-5">
                    <div className="card-img-top">
                        <a href="#pablo">
                        <img className="img" src={Chad} alt={"Chad"}/>
                        </a>
                    </div>
                    </div>
                    <div className="col-md-7">
                    <div className="card-body text-left">
                        <h4 className="card-title">Chad Jemmet</h4>
                        <h6 className="card-category">Web Designer</h6>
                        <p className="card-description">
                          I don't have any signal out here.
                        </p>
                        <div className="card-footer pull-left">
                        <a href="#pablo" className="btn btn-just-icon btn-link btn-twitter">
                            <FontAwesomeIcon
                            icon={['fab', 'twitter']}
                            className="fa fa-twitter"
                            />
                        </a>
                        <a href="#pablo" className="btn btn-just-icon btn-link btn-facebook">
                            <FontAwesomeIcon
                                icon={['fab', 'linkedin-in']}
                                className="fa fa-linkedin"
                            />
                        </a>
                        <a href="#pablo" className="btn btn-just-icon btn-link btn-google">
                            <FontAwesomeIcon 
                                icon={['fab', 'google-plus-g']}
                                className="fa fa-google-plus"
                            />
                        </a>
                        </div>
                    </div>
                    </div>
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
                            <i className="nc-icon nc-single-02" />
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <label>Email</label>
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="nc-icon nc-email-85" />
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                    </div>
                    <label>Message</label>
                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder="Tell us your thoughts and feelings..."
                    />
                    <div className="row">
                      <div className="col-md-4 ml-auto mr-auto">
                        <button className="btn btn-danger btn-lg btn-fill">
                          Send Message
                        </button>
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
