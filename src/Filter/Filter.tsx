import {useState} from "react";

type moneyTypeProps = {
    banknots: string,
    value: number,
    number: string
}

type moneyType = {
    currentMoney: Array<moneyTypeProps>
    onClickFilterHandler: (nameButton: FilterType) => void
}

type FilterType = 'All' | 'Rubls' | 'Dollars'

export const Filter = (props: moneyType) => {


    return (
        <>
            <ul>
                {props.currentMoney.map((el, index) => {
                    return (
                        <li key={index}>
                            <span>  {el.banknots}</span>
                            <span>  {el.value}</span>
                            <span>  {el.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => props.onClickFilterHandler('All')}>All</button>
                <button onClick={() => props.onClickFilterHandler('Rubls')}>RUBLS</button>
                <button onClick={() => props.onClickFilterHandler('Dollars')}>Dollars</button>
            </div>
        </>
    )
}