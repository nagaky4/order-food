import React, { Component } from 'react';

import { connect } from 'react-redux'
import compose from 'recompose/compose';

import * as actions from '../../actions/index';
import classes from './Book.module.css'

import ComposeGetListBooked from '../HOC/getListBooked';

import OneItemBooked from './OneItemBooked';
import CaculatePrice from '../Share/functional/CaculatePrice';
import ShowPrice from '../Share/component/ShowPrice';


class Book extends Component {


    onOpenModal = () => {
        this.props.openModal();
    }

    onCloseModal = () => {
        this.props.closeModal()
    }

    showListBooked = () => {
        if (this.props.listBooked.length > 0) {
            return this.props.listBooked.map(value => {
                return <OneItemBooked value={value} key={value.id} />
            })
        }
        else return "chưa có món nào";
    }

    render() {
        return (
            <div>
                <h1>Danh sách món bạn đã chọn</h1>
                <div className={"alert alert-primary mt-3"} role="alert">
                    Số món khác nhau : {this.props.listBooked.length}
                    <CaculatePrice render={(getPrice) => <ShowPrice list={this.props.listBooked} getPrice={getPrice} />} />
                </div>

                <div className={classes.BookContainer} >
                    <div className="list-group">
                        {this.showListBooked()}
                    </div>
                </div>
                <button disabled={this.props.listBooked.length > 0 ? false : true} type="button" className="btn btn-warning mt-5" onClick={this.onOpenModal}  >Gọi món</button>
            </div>

        )
    }
}


const mapDispatchToProps = (dispatch, props) => {
    return {
        openModal: () => {
            dispatch(actions._openModal())
        },
        closeModal: () => {
            dispatch(actions._closeModal())
        }
    }
}

export default compose(
    ComposeGetListBooked,
    connect(null, mapDispatchToProps)
)(Book);
