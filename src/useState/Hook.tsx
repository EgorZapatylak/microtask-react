import {useState} from "react";


export const Hook = () => {

    // let a = 1;

    let [a, setA] = useState(1)

    const onClickHandlerPlus = () => {
      setA(++a);
        console.log(a);
    }
    const onClickHandlerMinus = () => {
        setA(--a);
        console.log(a);
    }

    const onClickZero = () => {
        setA(0)
    }

    return (
        <>
            <h1>{a}</h1>
        <button onClick={onClickHandlerPlus}>Plus</button>
        <button onClick={onClickHandlerMinus}>Minus</button>
        <button onClick={onClickZero}>Reset</button>
        </>
    )
}