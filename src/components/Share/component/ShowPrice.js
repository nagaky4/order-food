import React, { Component } from 'react'

export class ShowPrice extends Component {

    render() {
        return (
            <div>
                <p>Thành tiền : {this.props.getPrice(this.props.list)} VNĐ</p>
            </div>
        )
    }
}

export default ShowPrice
