import React, { Component } from 'react'


class CaculatePrice extends Component {

    getPrice = (listBooked) => {
        let price = 0;
        if (listBooked && listBooked.length > 0) {
            listBooked.forEach(value => {
                price += value.price;
            })
        }
        return price;
    }

    render() {
        return (
            <div>
                {this.props.render(this.getPrice)}
            </div>
        )
    }
}

export default CaculatePrice
