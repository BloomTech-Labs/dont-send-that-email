import React, { Component } from "react";
import axios from "axios";
import { Button, Col, Container, Input, Row } from "reactstrap";
import BreadCrumb from "../BreadCrumb";
import Sidebar from "../Navigation/Sidebar";
import { Link } from "react-router-dom";
import Editor from "./Editor";
import Analysis from "./Analysis";
import "./email.css";

class NewEmail extends Component {
  crumbs = [{ name: "Home", path: "/" }, { name: "Document" }];
  state = {
    title: "",
    text:
      "I hate ice cream. I love to go to the park. I'm worried that I will have to eat ice cream at the park. Would you like to go to the park and eat my ice cream?",
    tone_analysis: null,
    error: "",
    addressee: "",
    versions: [],
    selected_version: 0
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    if (id) {
      this.fetchEmail(id);
    }
  }

  fetchEmail = id => {
    axios
      .get(process.env.REACT_APP_EMAILS_URL + id, { withCredentials: true })
      .then(({ data }) => {
        const { email } = data;
        if (email) {
          const state = { ...this.state, ...data.email };

          // Set the latest version as selected
          if (data.email.versions.length) {
            state.selected_version = data.email.versions.length;
          }

          // Update the editor once new state is populated
          this.setState(state, this.updateEditor);
        }
      });
  };

  updateEditor = () => {
    const { text } = this.selectedVersion();
    this.setState({ text });
  };

  previousVersion = () => {
    if (this.state.selected_version > 0) {
      const selected_version = this.state.selected_version - 1;
      this.setState({ selected_version }, this.updateEditor);
    }
  };

  nextVersion = () => {
    if (this.state.selected_version < this.state.versions.length) {
      const selected_version = this.state.selected_version + 1;
      this.setState({ selected_version }, this.updateEditor);
    }
  };

  selectedVersion = () => this.state.versions[this.state.selected_version - 1];

  processTone = () => {
    const selected = this.selectedVersion();
    // TODO
    // if (selected.tone_analysis) { }
    if (selected) {
      const { text } = selected;
      const sentences = text.split(".");
      const colors = ["red", "orange", "royalblue"];
      return sentences
        .map((s, i) => this.tonalSentence(colors[i % colors.length], s))
        .join(".");
    } else {
      return "oops";
    }
  };

  tonalSentence = (color, text) =>
    `<span style="color: ${color}">${text}</span>`;

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  analyzeText = () => {
    axios
      .post("http://localhost:5000/api/watson", { text: this.state.text })
      .then(res => this.setState({ tone_analysis: res.data }))
      .catch(err => this.setState({ error: err }));
  };

  handleSave = async e => {
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
    };

    if (this.props.match.params.id) {
      body.email.id = this.props.match.params.id;
    }

    let headers = {
      withCredentials: true,
      headers: { Authorization: process.env.USER_COOKIE }
    };

    try {
      const {
        data: { id }
      } = await axios.post(process.env.REACT_APP_EMAILS_URL, body, headers);
      if (!this.props.match.params.id) {
        this.props.history.push(`/email/${id}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <Container>
        <BreadCrumb crumbs={this.crumbs} />
        <Row>
          <Col sm="3">
            <Sidebar />
          </Col>
          <Col>
            <Row>
              <Col sm="auto">
                <Input
                  name="title"
                  value={this.state.title}
                  onChange={this.handleInput}
                />
                <Input
                  name="addressee"
                  value={this.state.addressee}
                  onChange={this.handleInput}
                />
              </Col>
              <Col>
                <Row>
                  <Col xs={{ size: 10, offset: 1 }}>
                    <Button onClick={this.previousVersion}>Previous</Button>
                    {this.state.selected_version} / {this.state.versions.length}
                    <Button onClick={this.nextVersion}>Next</Button>
                  </Col>
                </Row>
                <Row>
                  <Col xs={{ size: 10, offset: 1 }}>
                    <Button onClick={this.analyzeText}>Analyze</Button>
                    <Button onClick={this.handleSave}>Save</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <Editor html={this.processTone()} onChange={this.handleInput} />
              </Col>
              <Col sm={{ order: 1 }}>
                <Analysis toneAnalysis={this.state.tone_analysis} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default NewEmail;
