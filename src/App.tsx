import React, {useState} from 'react';
import './App.css';

import {Filter} from "./Filter/Filter";

type FilterType = 'All' | 'Rubls' | 'Dollars'

function App() {



    const [money, setMoney] = useState([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ])

    const [filter, setfilter] = useState<FilterType>('All')

    let currentMoney = money;

    if (filter === "Rubls") {
        currentMoney = money.filter((filterMoney) => filterMoney.banknots === 'RUBLS')
    }

    if (filter === "Dollars") {
        currentMoney = money.filter((filterMoney) => filterMoney.banknots === 'Dollars')
    }

    const onClickFilterHandler = (nameButton: FilterType) => {
        setfilter(nameButton)
    }



    return (
        <>

            <Filter
                currentMoney={currentMoney}
                onClickFilterHandler={onClickFilterHandler}

            />
        </>
    );
}

export default App;
