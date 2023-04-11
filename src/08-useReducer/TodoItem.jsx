
export const TodoItem = ({ todo, onDeleteTodo, handleToggleTodo }) => {
    return (
        <li key={todo?.id} className="list-group-item d-flex justify-content-between ">
            <span
                className={`align-selt-center ${(todo.done) ? 'text-decoration-line-through text-danger' : ''}`}
                onClick={() => handleToggleTodo(todo.id)}
            > {todo?.description}
            </span>
            <button className="btn  btn-danger "
                onClick={() => onDeleteTodo(todo.id)}
            >Borrar</button>
        </li>
    )
}
