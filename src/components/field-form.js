/* eslint react/jsx-filename-extension: 0, react/prefer-stateless-function: 0
  arrow-body-style: 0, react/prop-types: 0, import/prefer-default-export: 0
*/
import React from 'react';
//Components
import { FormGroup, FormFeedback, Input, Label } from 'reactstrap';
// Field form component to be used with Redux-form
const FieldForm = ({ placeholder, label, type, input, meta }) => {
  const formStyle = {
    textAlign: 'left'
  };

  return (
    <FormGroup style={formStyle}>
      <Label>{label}</Label>
      <Input type={type} placeholder={placeholder} {...input}
        valid={meta.touched ? !meta.invalid : true } />
      <FormFeedback> {meta.touched ? meta.error : ''} </FormFeedback>
    </FormGroup>
  );
};

export default FieldForm;
