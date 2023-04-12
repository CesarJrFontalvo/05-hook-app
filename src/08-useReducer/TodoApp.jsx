import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"
import { useTodo } from "../hooks/useTodo"

export const TodoApp = () => {

    const { todos, todosCount, todosPendingCount, handleDeleteTodo, handleNewTodo, handleToggleTodo } = useTodo();

    return (
        <>
            <h1>TodoApp: {todosCount}, <small>pendientes: {todosPendingCount}</small> </h1>
            <hr />

            <div class="row ">
                <div class="col-7">
                    <TodoList
                        todos={todos}
                        onDeleteTodo={handleDeleteTodo}
                        handleToggleTodo={handleToggleTodo}
                    />
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />

                    <TodoAdd
                        onNewTodo={handleNewTodo}
                    />
                </div>


            </div>

        </>
    )
}
