import React, { Component } from 'react'

export class ShowPrice extends Component {

    render() {
        return (
            <div>
                <p>Thành tiền : {this.props.getPrice(this.props.listBooked)} VNĐ</p>
            </div>
        )
    }
}

export default ShowPrice
