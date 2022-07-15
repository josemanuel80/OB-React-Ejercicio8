export const todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      return [
        ...state,
        { text: action.payload.text, id: action.payload.id, completed: false },
      ];
    }
    case 'TOGGLE_TODO': {
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo,
      );
    }
    default:
      return state;
  }
};
