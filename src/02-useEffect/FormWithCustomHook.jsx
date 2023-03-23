import { useEffect } from "react";
import { useForm } from "../hooks/useForm";

const FormWithCustomHook = () => {

    const { formState, onInputChange, onReset, username, email, password } = useForm({
        username: '',
        email: '',
        password: ''
    });
    // const { username, email, password } = formState;


    useEffect(() => {
        // console.log('useEffect se llamó !')
    }, []);

    useEffect(() => {
        // console.log('formState se modificó !')
    }, [formState]);

    useEffect(() => {
        // console.log('email se modificó !')
    }, [email]);

    return (
        <>
            <h1>Formilario con custom hook</h1>
            <hr />
            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input
                type="email"
                className="form-control mt-2"
                placeholder="cesar@gmail.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            <input
                type="password"
                className="form-control mt-2"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={onInputChange}
            />
            <button onClick={onReset} className="btn btn-primary mt-2">Borrar</button>
        </>
    )
}

export default FormWithCustomHook