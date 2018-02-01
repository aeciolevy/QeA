/* eslint react/jsx-filename-extension: 0, react/prefer-stateless-function: 0
  arrow-body-style: 0, react/prop-types: 0
*/
import React from 'react';
import { Title } from './styleds';

const Headline = ({ handleClick, children }) => {
  return <Title onClick={() => handleClick()}> {children} </Title>;
};

export default Headline;
