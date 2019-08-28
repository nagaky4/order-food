import React, { Component } from 'react';

import ComposeGetListBooked from '../HOC/getListBooked';

import classes from './Book.module.css'
import OneItemBooked from './OneItemBooked';
import BillModal from '../Layout/BillModal';
// import * as actions from '../../actions/index';



class Book extends Component {


    constructor(props) {
        super(props);

        this.state = {
            isOpenModal: false
        }
    }

    getPrice = () => {
        let price = 0;
        if (this.props.listBooked.length > 0) {
            this.props.listBooked.forEach(value => {
                price += value.price;
            })
        }
        return price;

    }

    showListBooked = () => {
        if (this.props.listBooked.length > 0) {
            return this.props.listBooked.map(value => {
                return <OneItemBooked value={value} key={value.id} />
            })
        }
        else return "chưa có món nào";
    }

    onOpenModal = () => {
        this.setState({
            isOpenModal: true
        })
    }

    onCloseModal = () => {
        this.setState({
            isOpenModal: false
        })
    }

    render() {
        return (
            <div>
                <h1>Danh sách món bạn đã chọn</h1>
                <div className={"alert alert-primary mt-3"} role="alert">
                    Số món khác nhau : {this.props.listBooked.length}
                    <div>Tổng giá : {this.getPrice()} VNĐ</div>
                </div>

                <div className={classes.BookContainer} >
                    <div className="list-group">
                        {this.showListBooked()}
                    </div>
                </div>
                <button type="button" className="btn btn-warning mt-5" onClick={this.onOpenModal}  >Gọi món</button>
                {
                    this.state.isOpenModal === true && <BillModal fuCloseModal={this.onCloseModal} />
                }
            </div>
        )
    }
}

export default ComposeGetListBooked(Book)
