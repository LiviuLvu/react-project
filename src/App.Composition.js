import React, { Component } from 'react';

function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {/* props.children pass children elements directly into their output */}
      {props.children}
    </div>
  );
}

function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
      {/* props.children pass children elements directly into their output       */}
      {props.children}
    </FancyBorder>
  );
}

class SignUpDialog extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = {login: ''};
  }

  render() {
    return (
      // SignUpDialog is a special case of Dialog
      <div className="col-md-5">
        <Dialog
          title="React Exploration Program"
          message="Please enter your name">
          <div className="input-group">
            <input
              value={this.state.login}
              onChange={this.handleChange}
              className="form-control" />
            <span class="input-group-btn">
              <button
                type="button"
                onClick={this.handleSignUp}
                className="btn btn-primary">
                Sign Me Up!
              </button>
            </span>
          </div>
          <br/>
        </Dialog>
      </div>        
    );
  }

  handleChange(e) {
    this.setState({login: e.target.value});
  }

  handleSignUp() {
    alert(`Welcome aboard, ${this.state.login}!`);
  }
}

export default SignUpDialog;