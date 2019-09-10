
import React from 'react'
import axios from '../../axios';

import dataFake from '../../DB/dataFake'

export default function InitDb() {


    const onHandleClick = () => {
        const foods = dataFake;
        axios.post('foods.json',foods).then(res => console.log(res)).catch(err => console.log(err));
    }

    return (
        <div className="mt-5">
            <button type="button" className="btn btn-primary" onClick={onHandleClick}>Init data</button>
        </div>
    )
}
