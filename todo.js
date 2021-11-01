function Todo({todo, index, remove}){
    function handle(){
        remove(index);
    }
    return <div className="todo" onClick={handle}>{todo.text} <button type="button" className="btn btn-outline-warning">- Eliminar -</button></div>
}