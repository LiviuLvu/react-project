import React, { Component } from 'react';

class TemperatureInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const scaleNames = {
      c: 'Celsius',
      f: 'Fahrenheit'
    };
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <form className="col-xs-12 col-sm-6">
        <label>Enter temperature in {scaleNames[scale]}:</label>
        <input value={temperature}
               onChange={this.handleChange}
               className="form-control" />
      </form>
    );
  }
}

export default TemperatureInput;