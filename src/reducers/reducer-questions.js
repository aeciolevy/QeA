// Reducer to questions
import * as types from '../actions/types';
import { SortArray } from '../utils/help';

export default function (state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case types.ADDQUESTION:
      return { ...state, byId: [...state.byId, payload] };
    case types.FETCHINGQUESTIONS:
      return { ...state, ...payload };
    case types.REMOVEQUESTIONS:
      return { ...state, byId: [] };
    case types.SORTQUESTIONS:
      return { ...state, byId: state.byId.sort(SortArray) };
    default:
      return state;
  }
}
