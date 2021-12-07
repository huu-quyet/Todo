import React, { Component, FormEvent } from 'react';

interface State {
  email: string;
  password: string;
  emailError: string;
  passwordError: string;
}

class Login extends Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailError: '',
      passwordError: '',
    };
  }

  onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      email: e.target.value,
    });
  };

  onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (this.state.email === '') {
      this.setState({
        emailError: 'Email is required',
      });
      return false;
    }
    if (this.state.password === '') {
      this.setState({
        passwordError: 'Password is required',
      });
      return false;
    }
    if (this.state.email.length < 7) {
      this.setState({
        emailError: 'Email need have at least 8 charts',
      });
      return false;
    }
    return true;
    console.log('submit');
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Email</label>
            <input
              type="text"
              value={this.state.email}
              onChange={this.onChangeEmail}
            ></input>
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              value={this.state.password}
              onChange={this.onChangePassword}
            ></input>
          </div>
          <button onClick={this.handleSubmit}>Login</button>
        </form>
      </>
    );
  }
}

export default Login;
