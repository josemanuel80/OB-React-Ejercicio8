import { Todo } from './Todo';

export const TodoList = ({ todos, onTodosClick }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return <Todo {...todo} onTodoClick={() => onTodosClick(todo.id)} />;
      })}
    </ul>
  );
};
