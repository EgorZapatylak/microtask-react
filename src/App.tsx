import React, {useState} from 'react';
import './App.css';

import {Button} from "./Button/Button";


function App() {

    const students = [
        {id: 1, name: 'James', age: 8},
        {id: 2, name: 'Robert', age: 18},
        {id: 3, name: 'John', age: 28},
        {id: 4, name: 'Michael', age: 38},
        {id: 5, name: 'William', age: 48},
        {id: 6, name: 'David', age: 58},
        {id: 7, name: 'Richard', age: 68},
        {id: 8, name: 'Joseph', age: 78},
        {id: 9, name: 'Tomas', age: 88},
        {id: 10, name: 'Charles', age: 98},
        {id: 11, name: 'Christopher', age: 108}
    ]



    const Button1foo = (name:string, age: number, adrres: string) => {
        console.log(name,age,adrres)
    }

    const Button2foo = (name:string) => {
        console.log(name)
    }

    const Button3foo = () => {
        console.log('Im stupid Button')

    }


    return (
        <>
           
            <Button name={'My Button-1'} callBack={() => Button1foo('Im VASYA', 21, 'live in Minsk')}/>
            <Button name={'My Button-2'} callBack={() => Button2foo ('Im IVAN')}/>
            <Button name={'Stupid Button'} callBack={Button3foo}/>

        </>
    );
}

export default App;
