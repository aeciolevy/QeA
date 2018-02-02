import * as types from '../actions/types';

export default function (state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case types.ADDQUESTION:
      return { ...state, byId: [...state.byId, payload] };
    case types.FETCHINGQUESTIONS:
      return { ...state, ...payload };
    case types.REMOVEQUESTIONS:
      return { ...state, byId: [] };
    default:
      return state;
  }
}
