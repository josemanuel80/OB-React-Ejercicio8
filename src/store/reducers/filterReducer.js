import { SET_VISIBILITY_FILTER } from '../actions/action';

export const filterReducer = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER: {
      return action.payload.filter;
    }
    default:
      return state;
  }
};
