/* eslint react/jsx-filename-extension: 0, react/prefer-stateless-function: 0
  arrow-body-style: 0, react/prop-types: 0, import/prefer-default-export: 0,
  func-names: 0
*/
import React from 'react';
// Componet
import { ButtonBox } from './styleds';

const Buttons = (props) => {
  // To call the props method to remove questions
  const handleClick = () => props.handleRemove();
  // To call the props method to change the view
  const handleSeeAll = () => props.handleSeeAll();
  // to call the props method to sort the quesitons
  const handleSorting = () => props.handleSort();
  return (
    <ButtonBox>
      <button
        onClick={() => handleSorting()}
        className="btn btn-outline-dark btn-sm">
        Sort
      </button>
      <button
        className="btn btn-outline-danger btn-sm"
        onClick={() => handleClick()}
      >
         Remove All
       </button>
      <button
        className="btn btn-outline-secondary btn-sm"
        onClick={() => handleSeeAll()}
      >
        See all
      </button>
    </ButtonBox>
  );
};

export default Buttons;
