/* eslint react/jsx-filename-extension: 0, react/prefer-stateless-function: 0
  arrow-body-style: 0, react/prop-types: 0, import/prefer-default-export: 0
*/
import React from 'react';
import { Field, reduxForm } from 'redux-form';
// Components
import FieldForm from './field-form';
import { FormBox } from './styleds';

const required = value => (value ? undefined : 'Required');

const Forms = (props) => {
  const { handleSubmit, reset, submitting } = props;
  const btnStyle = { float: 'right' }
  const submit = (data) => {
    props.submit(data);
    setTimeout(() => reset(), 500)
  }
  return (
    <FormBox>
      <form onSubmit={handleSubmit(submit)}>
        <Field
          type="text"
          name="question"
          label="Question"
          placeholder="Can I add my own questions?"
          validate={required}
          component={FieldForm}
        />
        <Field
          type="textarea"
          name="answer"
          label="Answer"
          placeholder="Yes, of course 😀"
          validate={required}
          component={FieldForm}
        />
        <button
          type="submit"
          className="btn btn-outline-success"
          style={btnStyle}
          disabled={submitting}
        >
          Create Question
        </button>
      </form>
    </FormBox>
  );
};

export default reduxForm({ form: 'questionForm' })(Forms);
