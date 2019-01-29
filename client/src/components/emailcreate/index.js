import React, { Component } from "react";
import axios from "axios";
import striptags from "striptags";
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Input,
  Row,
  Card,
  InputGroup,
  InputGroupAddon
} from "reactstrap";
import BreadCrumb from "../BreadCrumb";
import Sidebar from "../Navigation/Sidebar";
import { Link } from "react-router-dom";
import Editor from "./Editor";
import Analysis from "./Analysis";
import "./email.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class NewEmail extends Component {
  crumbs = [{ name: "Home", path: "/" }, { name: "Document" }];
  state = {
    title: "",
    addressee: "",
    versions: [{ text: "", tone_analysis: null }],
    selected_version: 1,
    makingCall: false,
    error: false
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
  sendEmail = () => {
    console.log("hello world");
    axios
      .post(
        process.env.REACT_APP_BACKEND_URL + "/sendemail",
        {
          title: this.state.title,
          text: this.selectedVersion().text,
          addressee: this.state.addressee,
          reqType: "send"
        },
        { withCredentials: true }
      )
      .then(res => console.log(res))
      .catch(err => console.log(err));
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
    if (!this.state.makingCall) {
      this.setState({ makingCall: true }, () => {
        axios
          .post(
            process.env.REACT_APP_BACKEND_URL + "/api/watson",
            { text: this.selectedVersion().text, reqType: "analyze" },
            { withCredentials: true }
          )
          .then(res => {
            const { versions } = this.state;
            versions[this.state.selected_version - 1].tone_analysis = res.data;
            this.setState({ versions, error: false, makingCall: false });
          })
          .catch(err => this.setState({ error: err, makingCall: false }));
      });
    }
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
      } = await axios.post(
        process.env.REACT_APP_BACKEND_URL + "/emails",
        body,
        headers
      );
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

  navigationButtons = () => (
    <ButtonGroup>
      <Button color="danger" onClick={this.previousVersion}>
        <FontAwesomeIcon icon="arrow-left" className="fa-lg version-icon" />
      </Button>
      <Button color="danger" disabled>
        {this.state.selected_version} / {this.state.versions.length}
      </Button>
      <Button color="danger" onClick={this.nextVersion}>
        <FontAwesomeIcon icon="arrow-right" className="fa-lg version-icon" />
      </Button>
    </ButtonGroup>
  );

  actionButtons = () => (
    <ButtonGroup>
      <Button onClick={this.analyzeText}>Analyze</Button>
      <Button onClick={this.handleSave}>{this.saveButton()}</Button>
      <Button onClick={this.sendEmail}>Send</Button>
    </ButtonGroup>
  );

  render() {
    return (
      <Container fluid>
        <Sidebar />
        <BreadCrumb crumbs={this.crumbs} />
        <Row>
          <Col>
            <Row>
              <Col xs={12} sm={{ order: 0, size: 8 }}>
                <InputGroup className="email-fields">
                  <InputGroupAddon addOnType="prepend">Title</InputGroupAddon>
                  <Input
                    name="title"
                    value={this.state.title}
                    onChange={this.handleInput}
                    spellCheck="false"
                  />
                </InputGroup>
                <InputGroup className="email-fields">
                  <InputGroupAddon addOnType="prepend">
                    Addressee
                  </InputGroupAddon>
                  <Input
                    name="addressee"
                    value={this.state.addressee}
                    onChange={this.handleInput}
                    spellCheck="false"
                  />
                </InputGroup>
              </Col>
              <Col xs={12} sm={{ size: 4 }}>
                <Card className="no-transition" body>
                  <ButtonGroup vertical>
                    {this.navigationButtons()}
                    {this.actionButtons()}
                  </ButtonGroup>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col xs={{ order: 2 }} sm={{ order: 0, size: 8 }}>
                <Editor html={this.processTone()} onChange={this.editorInput} />
              </Col>
              <Col xs={{ order: 1 }} sm={{ size: 4 }}>
                <Analysis
                  error={this.state.error}
                  toneAnalysis={this.selectedVersion().tone_analysis}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default NewEmail;
