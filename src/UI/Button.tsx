import React from 'react';
import { StyledButton } from '../styled-components';

type Props = {
  onButtonSubmit: (e: any) => void;
};

class Button extends React.Component<Props> {
  render() {
    return (
      <React.Fragment>
        <StyledButton
          mainColor="#10b981"
          secondColor="white"
          onClick={this.props.onButtonSubmit}
        >
          +
        </StyledButton>
      </React.Fragment>
    );
  }
}

export default Button;
