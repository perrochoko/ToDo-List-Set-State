function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build todo',
      isCompleted: false,
    },
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text:text, isCompleted:false}];
    setTodos(newTodos);
  }
  const removeTodo = index=> {
    let temp = [...todos];
    temp.splice(index,1);
    setTodos(temp);
  }

  return (
      <div className="app">
        <div className="todo-list">
            <TodoForm addTodo={addTodo}/> 
          {todos.map((todo, i) => 
            <Todo index={i} key={i} todo={todo} remove={removeTodo}/>)}

        </div>  
      </div>
    );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
