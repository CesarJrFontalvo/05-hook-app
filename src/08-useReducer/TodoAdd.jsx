import { useForm } from "../hooks/useForm"

export const TodoAdd = ({  onNewTodo }) => {

    const { description = [], onInputChange, onReset } = useForm([]);
    
    const onFormsubmit = (event) => {
        event.preventDefault();

        if (description[0].lenght <= 1 ) return;

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description
        }

        onNewTodo(newTodo);
        onReset();
    }
 

    return (
        <form onSubmit={onFormsubmit}>
            <input
                type="text"
                placeholder="¿Que hay que hacer ?"
                className="form-control"
                name="description"
                value={description}
                onChange={onInputChange}
            />

            <button type="submit" className="btn btn-success mt-2" > Agregar</button>
        </form>
    )
}
