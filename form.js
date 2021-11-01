
function TodoForm({addTodo}){
    const [value, setValue]=React.useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if(!value) return;
        addTodo(value);
        setValue('');
      }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}
                placeholder= "Agregar nueva tarea ..."
                onChange={e=> setValue(e.target.value)}
                />
            <div class="mb-3">
                    <div className="form-text text-center fs-4" ><div class="spinner-border text-success" role="status"></div> Agrega nuevas tareas a la lista...<div class="spinner-border text-success" role="status"></div>
                    </div>
            </div>
        </form>  
    )
}