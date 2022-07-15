import PropTypes from 'prop-types';

export const Todo = ({ text, id, completed, onTodoClick }) => {
  return (
    <li
      onClick={onTodoClick}
      style={{
        color: completed ? 'blue' : 'green',
        textDecoration: completed ? 'line-through' : 'none',
      }}
    >
      {id} - {text}
    </li>
  );
};
Todo.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
  onTodoClick: PropTypes.func.isRequired,
};
