import { useRef } from "react"

export const FocusScreen = () => {
    const inputRef = useRef();

    const onClick = () => {
        inputRef.current.select();
    }

    return (
        <>
            <h1>
                Focus Screen
            </h1>
            <hr />


            <input
            ref={inputRef}
                className='form-control mt-2'
                type="text"
                placeholder='ingrese su nombre'
            />

            <input
                className='form-control mt-2'
                type="text"
                placeholder='ingrese su nombre'
            />
            <button
                class="btn btn-primary mt-2"
                onClick={onClick}
            >
                set focus
            </button>
        </>
    )
}
