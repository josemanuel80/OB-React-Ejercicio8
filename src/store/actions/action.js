let newId = 0;

export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    payload: { text, id: newId++ },
  };
};
export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    payload: { id },
  };
};
export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    payload: { filter },
  };
};
