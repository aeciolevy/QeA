/* eslint react/jsx-filename-extension: 0, react/prefer-stateless-function: 0
  arrow-body-style: 0, react/prop-types: 0, import/prefer-default-export: 0,
  func-names: 0
*/
import * as type from './types';
import { flashMessage } from 'redux-flash';
import db from '../data/questions.json';

export function addQuestion (data) {
  return function (dispatch) {
    dispatch({ type: type.ADDQUESTION, payload: data });
    dispatch(flashMessage('Question added!', { timeout: 3000 }));
  };
}

export function fetchQuestions () {
  return function (dispatch) {
    const data = db;
    dispatch({ type: type.FETCHINGQUESTIONS, payload: data });
  };
}

export function removeQuestions () {
  return function (dispatch) {
    dispatch({ type: type.REMOVEQUESTIONS });
  };
}

export function sortQuestion () {
  return function (dispatch) {
    dispatch({type: type.SORTQUESTIONS})
  }
}
