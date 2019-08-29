import React, { Component } from 'react'
import ReactDom from 'react-dom';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import compose from 'recompose/compose';

import * as actions from '../../../actions/index'
import * as classes from './BillModal.module.css'

import ComposeGetListBooked from '../../HOC/getListBooked';
import ShowPrice from '../../Share/component/ShowPrice';
import CaculatePrice from '../../Share/functional/CaculatePrice';
import Backdrop from '../Backdrop/Backdrop';



class BillModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isRedirect: false
        }
    }

    loadRowTable = () => {
        if (this.props.listBooked && this.props.listBooked.length > 0) {
            return this.props.listBooked.map((value, index) => {
                return (
                    <tr key={value.id}>
                        <td>{index + 1}</td>
                        <td>{value.name}</td>
                        <td>{value.number}</td>
                        <td>{value.price} VNĐ</td>
                    </tr>
                )
            })
        }
    }

    onHanleBook = () => {

        let check = window.confirm('Bạn có muốn gọi thực đơn này không?')
        if (check) {
            this.setState({
                isRedirect: true
            })
        }

    }

    render() {
        console.log('state redirect ', this.state.isRedirect);
        console.log('render modal');
        if (this.state.isRedirect === true) return <Redirect to="/order-now" />

        return ReactDom.createPortal(
            <>
                <Backdrop show={this.props.isOpenModal} closeModal={this.props.closeModal} />
                {this.props.isOpenModal ? (

                    <div className={classes.BillModalContainer}>
                        <div className="jumbotron jumbotron-fluid">
                            <div className="container">
                                {this.props.listBooked.length > 0 ? (
                                    <>
                                        <h1 className="display-2">Các món bạn đã gọi</h1>
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
                                        <hr className="my-2" />
                                        <CaculatePrice render={(getPrice) => <ShowPrice listBooked={this.props.listBooked} getPrice={getPrice} />} />
                                        <p className="lead">
                                            <button type="button" className="btn btn-warning mr-2" onClick={this.props.closeModal}>Đóng</button>
                                            <button type="button" className="btn btn-primary" onClick={this.onHanleBook} >Gọi</button>
                                        </p>
                                    </>
                                ) : (<div>Bạn chưa đặt món nào cả nè</div>)}
                            </div>
                        </div>
                    </div>
                ) : ''}
            </>
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
        }
    }
}


export default compose(
    ComposeGetListBooked,
    connect(mapStateToProps, mapDispatchToProps)
)(BillModal)