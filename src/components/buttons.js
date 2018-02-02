import React from 'react';
import { ButtonBox } from './styleds';

const Buttons = (props) => {
  return (
    <ButtonBox>
      <button className="btn btn-outline-dark btn-sm"> Sort  </button>
      <button className="btn btn-outline-danger btn-sm"> Remove All </button>
      <button className="btn btn-outline-secondary btn-sm"> See all </button>
    </ButtonBox>
  );
};

export default Buttons;
