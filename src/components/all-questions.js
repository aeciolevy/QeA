/* eslint react/jsx-filename-extension: 0, react/prefer-stateless-function: 0
  arrow-body-style: 0, react/prop-types: 0, import/prefer-default-export: 0,
  func-names: 0
*/
import React from 'react';
import Questions from './questions';
import { AlertStyled } from './styleds';

const AllQuestions = (props) => {
  const { data, handleSeeAll } = props;
  const handleSee = () => handleSeeAll();
  return (
    <div>
      <div>
        <button
          onClick={() => handleSee()}
          className="btn btn-primary"
        >
          Back
        </button>
      </div>
      {data.length > 0 ? data.map((el, index) =>
        <Questions key={index} data={el}/>) :
        <AlertStyled color='danger'> No questions yet </AlertStyled>
      }
    </div>
   );
};

export default AllQuestions;
