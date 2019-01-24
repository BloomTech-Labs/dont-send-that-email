import React, { Component } from "react";
import axios from "axios";
import striptags from "striptags";
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
    addressee: "",
    versions: [{ text: "", tone_analysis: null }],
    selected_version: 1
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    if (id) {
      this.fetchEmail(id);
    }
  }

  fetchEmail = id => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + `/emails/${id}`, {
        withCredentials: true
      })
      .then(({ data }) => {
        const { email } = data;
        if (email) {
          const state = { ...this.state, ...data.email };

          // Set the latest version as selected
          if (data.email.versions.length) {
            state.selected_version = data.email.versions.length;
          }

          // Update the editor once new state is populated
          this.setState(state);
        }
      });
  };

  previousVersion = () => {
    if (this.state.selected_version > 1) {
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

  // Return the selected version, or a blank one if none have been made.
  selectedVersion = () => {
    return this.state.versions[this.state.selected_version - 1];
  };

  // Apply watson analysis to the version's text
  processTone = () => {
    let { text, tone_analysis } = this.selectedVersion();
    if (text) {
      if (tone_analysis && tone_analysis.sentences_tone) {
        const colors = {
          Joy: "success",
          Anger: "danger",
          Fear: "warning",
          Sadness: "info",
          Confident: "success",
          Analytical: "primary",
          Tentative: "warning"
        };
        tone_analysis.sentences_tone
          .filter(({ tones }) => tones.length) // Ignore sentences with no tones
          .forEach(({ text: sentence, tones }) => {
            const re = new RegExp(sentence.trim()); // No leading or trailing whitespace in highlights
            const color = colors[tones[0].tone_name]; // Currently selects the first tone, not necessarily the best/strongest
            text = text.replace(re, match => {
              console.log("Matched");
              return `<span class="label-${color}">${match}</span>`;
            });
            console.log(text);
          });
      }
      return text;
    }
    return "";
  };

  tonalSentence = (color, text) =>
    `<span style="color: ${color}">${text}</span>`;

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // This is expensive
  editorInput = e => {
    const text = striptags(e.target.value);
    const versions = this.state.versions;
    versions[this.state.selected_version - 1].text = text;
    this.setState({ versions });
  };

  analyzeText = () => {
    axios
      .post(
        process.env.REACT_APP_BACKEND_URL + "/api/watson",
        { text: this.selectedVersion().text },
        { withCredentials: true }
      )
      .then(res => {
        const { versions } = this.state;
        versions[this.state.selected_version - 1].tone_analysis = res.data;
        this.setState({ versions });
      })
      .catch(err => this.setState({ error: err }));
  };

  handleSave = async e => {
    e.preventDefault();
    const body = {
      email: {
        title: this.state.title,
        addressee: this.state.addressee
      },
      version: this.selectedVersion()
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
      } else {
        this.fetchEmail(id);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Renames button to "save as" when editing a version that is not the latest
  saveButton = () => {
    if (this.state.selected_version === this.state.versions.length) {
      return "Save";
    }
    return "Save as";
  };

  render() {
    return (
      <Container fluid>
        <BreadCrumb crumbs={this.crumbs} />
        <Row>
          <Sidebar />
          <Col>
            <Row>
              <Col sm="auto">
                <Input
                  name="title"
                  value={this.state.title}
                  onChange={this.handleInput}
                  spellCheck="false"
                />
                <Input
                  name="addressee"
                  value={this.state.addressee}
                  onChange={this.handleInput}
                  spellCheck="false"
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
                    <Button onClick={this.handleSave}>
                      {this.saveButton()}
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <Editor html={this.processTone()} onChange={this.editorInput} />
              </Col>
              <Col sm={{ order: 1 }}>
                <Analysis toneAnalysis={this.selectedVersion().tone_analysis} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default NewEmail;
