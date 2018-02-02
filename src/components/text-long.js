/* eslint react/jsx-filename-extension: 0, react/prefer-stateless-function: 0
  arrow-body-style: 0, react/prop-types: 0
*/
import React from 'react';
import { Collapse } from 'reactstrap';

const style = {
  fontSize: '0.7rem',
  paddingLeft: '1rem'
};

const Textlong = (props) => {
  return (
    <Collapse isOpen={props.isOpen} style={style}>
      {props.children}
    </Collapse>
  );
};

export default Textlong;
