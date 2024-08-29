import Todos from "./components/Todos";
import Todo from "./models/todo";
function App() {
  const myTodos = [new Todo('TS'), new Todo('React-TS')]
  console.log(myTodos);
  
  return (
    <Todos items={myTodos}>Hello</Todos>
  );
}

export default App;
