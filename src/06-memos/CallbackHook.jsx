import { useCounter } from "../hooks"
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
    const { counter, increment } = useCounter(10);
    return (
        <>
            <h1>Callback Hook: {counter}</h1>
            <hr />

            <ShowIncrement increment={increment} />


        </>
    )
}
