import React from 'react'


const CaculatePrice = (props) => {

    const caculatePrice = (list) => {
        let price = 0;
        if (list && list.length > 0) {
            list.forEach(value => {
                price += value.price;
            })
        }
        return price;
    }

    const getPrice = (list) => {
        let price = 0;
        if (list.length > 0) {
            if (Array.isArray(list[0])) {
                list.forEach(item => {
                    price += caculatePrice(item);
                })
            }
            else {
                price = caculatePrice(list);
            }
        }

        return price;
    }


    return (
        <div>
            {props.render(getPrice)}
        </div>
    )

}

export default CaculatePrice
