import './App.css';
import { FormContainer } from './components/containers/FormContainer';
import { TodoListContainer } from './components/containers/TodoListContainer';

function App() {
  return (
    <div className="App">
      <FormContainer />
      <TodoListContainer />
    </div>
  );
}

export default App;
