import React, { Component } from 'react';
import ContainerStyled from './styles/ContainerStyled';

class Container extends Component {
  render() {
    return (
      <ContainerStyled>
        {this.props.children}
      </ContainerStyled>
    )
  }
};

export default Container;