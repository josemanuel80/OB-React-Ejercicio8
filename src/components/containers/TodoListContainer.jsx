import { connect } from 'react-redux';
import { toggleTodo } from '../../store/actions/action';
import { TodoList } from '../pure/TodoList';

const mapStateToProps = (state) => {
  return {
    todos: state.todosState,
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
