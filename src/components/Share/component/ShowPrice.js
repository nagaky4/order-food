import React, { Component } from 'react'
import withConvertVND from '../../HOC/withConvertVND';

export class ShowPrice extends Component {

    render() {
        return (
            <div className={this.props.className}>
                <p>Thành tiền : {this.props.convertVND(this.props.getPrice(this.props.list))} VNĐ</p>
            </div>
        )
    }
}

export default withConvertVND(ShowPrice)
