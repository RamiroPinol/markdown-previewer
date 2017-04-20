import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';

function TextOutput(props) {
  function createMarkdown() {
    return { __html: marked(props.value) };
  }

  return (
    <div className="textOutput form-control" dangerouslySetInnerHTML={createMarkdown()} />
  );
}

TextOutput.PropTypes = {
  value: PropTypes.string.isRequired,
};

export default TextOutput;
