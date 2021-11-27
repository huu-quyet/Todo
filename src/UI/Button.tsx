import React from 'react';
import './Button.css';

type Props = {
  onButtonSubmit: (e: any) => void;
};

class Button extends React.Component<Props> {
  render() {
    return (
      <React.Fragment>
        <button onClick={this.props.onButtonSubmit}>+</button>
      </React.Fragment>
    );
  }
}

export default Button;
