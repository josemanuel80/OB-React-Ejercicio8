export const Todo = ({ text, id, completed, onTodoClick }) => {
  return (
    <li onClick={onTodoClick} style={{ color: completed ? 'blue' : 'green' }}>
      {id} - {text}
    </li>
  );
};
