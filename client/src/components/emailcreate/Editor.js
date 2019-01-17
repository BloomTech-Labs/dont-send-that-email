import React from 'react';
import ReactDOM from 'react-dom';

class ContentEditable extends React.Component {
  render = () => {
    return <div 
      onInput={this.emitChange} 
      onBlur={this.emitChange}
      contentEditable
      dangerouslySetInnerHTML={{__html: this.props.html}}></div>;
  }

  shouldComponentUpdate = (nextProps) => {
    return nextProps.html !== ReactDOM.findDOMNode(this).innerHTML;
  }

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
  }
}

export default ContentEditable;