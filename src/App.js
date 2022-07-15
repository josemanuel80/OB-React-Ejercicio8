import './App.css';
import { FormContainer } from './components/containers/FormContainer';
import { TodoListContainer } from './components/containers/TodoListContainer';
import { Filteroptions } from './components/pure/FilterOptions';

function App() {
  return (
    <div className="App">
      <TodoListContainer />
      <FormContainer />
      <Filteroptions />
    </div>
  );
}

export default App;
