import { connect } from 'react-redux';
import { toggleTodo } from '../../store/actions/action';
import { TodoList } from '../pure/TodoList';

const todoFilter = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL': {
      return todos;
    }
    case 'SHOW_ACTIVE': {
      return todos.filter((todo) => !todo.completed);
    }
    case 'SHOW_COMPLETED': {
      return todos.filter((todo) => todo.completed);
    }
    default:
      return todos;
  }
};

const mapStateToProps = (state) => {
  return {
    todos: todoFilter(state.todosState, state.filterState),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodosClick: (id) => dispatch(toggleTodo(id)),
  };
};

export const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
