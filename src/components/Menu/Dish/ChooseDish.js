import React from 'react'
import DetailDish from './DetailDish'


import data from '../../../DB/dataFake';

const ChooseDish = props => {

    var paramId = props.match.params.id;
    var dish = data.filter(item => item.id === paramId)[0];

    return (
        <DetailDish value={dish} {...props} />
    )
}

export default ChooseDish;