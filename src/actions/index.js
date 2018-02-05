/* eslint react/jsx-filename-extension: 0, react/prefer-stateless-function: 0
  arrow-body-style: 0, react/prop-types: 0, import/prefer-default-export: 0,
  func-names: 0
*/
import { flashMessage, flashErrorMessage } from 'redux-flash';
import * as type from './types';
import { get, post, del } from '../utils/fetch';

const URL = 'https://wt-fd79c4f10f1b0dc8687b21648ee28821-0.run.webtask.io/QeA';

export function addQuestion (data) {
  return async function (dispatch) {
    const response = await post(`${URL}/question?webtask_no_cache=1`, data);
    if (response.status === 'ok') {
      dispatch({ type: type.ADDQUESTION, payload: data });
      dispatch(flashMessage(response.message, { timeout: 3000 }));
    } else {
      dispatch(flashErrorMessage(response.message, { timeout: 3000 }));
    }
  };
}

export function fetchQuestions () {
  return async function (dispatch) {
    const response = await get(`${URL}/questions?webtask_no_cache=1`);
    dispatch({ type: type.FETCHINGQUESTIONS, payload: response });
  };
}

export function removeQuestions () {
  return async function (dispatch) {
    const obj = { empty: [] }
    const response = await del(`${URL}/question?webtask_no_cache=1`, obj);
    if (response.status === "ok") {
      dispatch({ type: type.REMOVEQUESTIONS });
      dispatch(flashErrorMessage(response.message, { timeout: 3000 }));
    } else {
      dispatch(flashErrorMessage(response.message, { timeout: 3000 }));
    }
  };
}

export function sortQuestion () {
  return function (dispatch) {
    dispatch({type: type.SORTQUESTIONS})
  }
}
