import React, { Component } from 'react';
import LandingStyled from './styles/LandingStyled';

class Landing extends Component {
  render() {
    return (
      <LandingStyled>
        {this.props.children}
      </LandingStyled>
    )
  }
};

export default Landing;