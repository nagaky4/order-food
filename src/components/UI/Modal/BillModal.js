import React, { Component } from 'react'
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import compose from 'recompose/compose';

import * as actions from '../../../actions/index'
import * as classes from './BillModal.module.css'

import ComposeGetListBooked from '../../HOC/getListBooked';
import ShowPrice from '../../Share/component/ShowPrice';
import CaculatePrice from '../../Share/functional/CaculatePrice';
import Backdrop from '../Backdrop/Backdrop';
import withConvertVND from '../../HOC/withConvertVND';

import Aux from '../../HOC/Auxiliary';


class BillModal extends Component {

    loadRowTable = () => {
        if (this.props.listBooked && this.props.listBooked.length > 0) {
            return this.props.listBooked.map((value, index) => {
                return (
                    <tr key={value.id}>
                        <td>{index + 1}</td>
                        <td>{value.name}</td>
                        <td>{value.number}</td>
                        <td>{this.props.convertVND(value.price)} VNĐ</td>
                    </tr>
                )
            })
        }
    }

    onHanleBook = () => {

        this.props.addToBill(this.props.listBooked);
        this.props.clearListBooked();
        this.props.closeModal();

    }

    render() {
        return ReactDom.createPortal(
            <Aux>
                <Backdrop show={this.props.isOpenModal} closeModal={this.props.closeModal} />
                {this.props.isOpenModal ? (

                    <div className={classes.BillModalContainer}>
                        <div className="jumbotron jumbotron-fluid">
                            <div className="container">
                                {this.props.listBooked.length > 0 ? (
                                    <Aux>
                                        <div className={classes.TitleModal}>Các món bạn đã gọi</div>
                                        <div className={classes.TableContainer}>
                                            <table className="table table-inverse table-inverse">
                                                <thead className="thead-inverse">
                                                    <tr>
                                                        <th>STT</th>
                                                        <th>Tên món</th>
                                                        <th>Số phần</th>
                                                        <th>Thành tiền</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    {this.loadRowTable()}
                                                </tbody>
                                            </table>
                                        </ div>
                                        <hr className="my-2" />
                                        <CaculatePrice render={(getPrice) => <ShowPrice list={this.props.listBooked} getPrice={getPrice} />} />
                                        <p className="lead">
                                            <button type="button" className="btn btn-warning mr-2" onClick={this.props.closeModal}>Đóng</button>
                                            <Link to="/order-now" >
                                                <button type="button" className="btn btn-primary" onClick={this.onHanleBook} >Gọi</button>
                                            </Link>
                                        </p>
                                    </Aux>
                                ) : (<div>Bạn chưa đặt món nào cả nè</div>)}
                            </div>
                        </div>
                    </div>
                ) : ''}
            </Aux>
            , document.getElementById('modal-bill'));
    }
}

const mapStateToProps = (state) => {
    return {
        isOpenModal: state.isOpenModalReducer
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        closeModal: () => {
            dispatch(actions._closeModal())
        },
        clearListBooked: () => {
            dispatch(actions._clearListBooked());
        },
        addToBill: (item) => {
            dispatch(actions._addToBill(item));
        }
    }
}


export default compose(
    ComposeGetListBooked,
    connect(mapStateToProps, mapDispatchToProps),
    withConvertVND
)(BillModal)
