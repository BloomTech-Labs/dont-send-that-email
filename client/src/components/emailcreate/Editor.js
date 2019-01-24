import React from "react";
import ReactDOM from "react-dom";

class ContentEditable extends React.Component {
  render = () => {
    return (
      <div
        className="form-control"
        style={{ height: "auto", minHeight: "150px", maxWidth: "65%", minWidth: "355px" }}
        onInput={this.emitChange}
        onBlur={this.emitChange}
        contentEditable
        dangerouslySetInnerHTML={{ __html: this.props.html }}
        spellCheck="true"
      />
    );
  };

  shouldComponentUpdate = nextProps => {
    return nextProps.html !== ReactDOM.findDOMNode(this).innerHTML;
  };

  emitChange = () => {
    var html = ReactDOM.findDOMNode(this).innerHTML;
    if (this.props.onChange && html !== this.lastHtml) {
      this.props.onChange({
        target: {
          name: "text",
          value: html
        }
      });
    }
    this.lastHtml = html;
  };
}

export default ContentEditable;
