/* eslint react/jsx-filename-extension: 0, react/prefer-stateless-function: 0
  arrow-body-style: 0, react/prop-types: 0
*/
import React from 'react';
// Component to show long text with collapse
import { Collapse } from 'reactstrap';

const style = {
  fontSize: '0.7rem',
  paddingLeft: '1rem',
  paddingBottom: '0.5rem'
};

const Textlong = (props) => {
  return (
    <Collapse isOpen={props.isOpen} style={style}>
      {props.children}
    </Collapse>
  );
};

export default Textlong;
