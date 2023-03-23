import { useEffect, useState } from "react";
import { Message } from "./Message";

const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'cesar',
        email: 'cesar@gmail.com'
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target
        setFormState({
            ...formState,
            [name]: value
        })

    }

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
            <h1>Formilario simple</h1>
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

            {
                (username === 'cesar2') && <Message /> 
            }
        </>
    )
}

export default SimpleForm