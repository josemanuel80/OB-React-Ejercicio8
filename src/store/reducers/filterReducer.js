export const filterReducer = (state, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER': {
      return action.payload.filter;
    }
    default:
      return state;
  }
};
