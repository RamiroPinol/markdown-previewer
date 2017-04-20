import React from 'react';
import TextOutput from './TextOutput';

class MainDiv extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className="container" id="mainContainer">
        <div className="row">
          <div className="col-md-12">
            <div className="mainDiv">
              <div className="row">
                <div className="col-sm-6">
                  <textarea
                    className="textInput form-control"
                    placeholder="Enter text here"
                    value={this.state.value}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="col-sm-6">
                  <TextOutput value={this.state.value} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainDiv;
