/* eslint react/jsx-filename-extension: 0, react/prefer-stateless-function: 0
  arrow-body-style: 0, react/prop-types: 0, import/prefer-default-export: 0,
  func-names: 0
*/
import React from 'react';
import Questions from './questions';
import { Title, AlertStyled } from './styleds';
import Forms from './forms';
import Buttons from './buttons';
import Tooltip from './tooltip';

const Main = (props) => {
  const { filtered, flash, handleRemove, onSubmit} = props;
  const { handleSeeAll, handleSort } = props;
  return (
    <div>
      {filtered.length > 0 ? filtered.map((el, index) =>
        <Questions key={index} data={el}/>) :
        <AlertStyled color='danger'> No questions yet </AlertStyled>
      }
      <Buttons
        handleRemove={handleRemove}
        handleSeeAll={handleSeeAll}
        handleSort={handleSort}
      />
      <Title id="newQuestion"> Create a new question </Title>
      <Tooltip target="newQuestion">
        Here you can create new questions and their answers
      </Tooltip>
      {flash ?
        <AlertStyled color={flash.isError ? 'danger' : 'success'}>
          {flash.message}
        </AlertStyled> : null}
      <Forms onSubmit={onSubmit} />
    </div>
  );
}

export default Main;
