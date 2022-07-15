import { Todo } from './Todo';
import PropTypes from 'prop-types';

export const TodoList = ({ todos, onTodosClick }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return <Todo {...todo} onTodoClick={() => onTodosClick(todo.id)} />;
      })}
    </ul>
  );
};
TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
  onTodosClick: PropTypes.func.isRequired,
};
