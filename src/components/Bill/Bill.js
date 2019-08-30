import React, { Fragment } from 'react'

import { connect } from 'react-redux'
import compose from 'recompose/compose';

import CaculatePrice from '../Share/functional/CaculatePrice';
import ShowPrice from '../Share/component/ShowPrice';
import withConvertVND from '../HOC/withConvertVND';

import * as actions from '../../actions/index';

const Bill = (props) => {

    const onHandlePay = () => {
        alert('Cảm ơn quý khách ,hẹn gặp lại ^^');
        props.clearBill();
    }

    const showTable = () => {

        if (props.listBill.length > 0) {

            return props.listBill.map((iteam, index) => {
                return (
                    <Fragment key={index}>
                        <h3> Gọi lần {index + 1}</h3>
                        <table className="table table-bordered table-inverse" >
                            <thead className="thead-inverse">
                                <tr>
                                    <th>#</th>
                                    <th>Tên món</th>
                                    <th>Số phần</th>
                                    <th>Thành tiền</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    iteam.map((value, key) => {
                                        return (
                                            <tr key={key} >
                                                <td >{key + 1}</td>
                                                <td>{value.name}</td>
                                                <td>{value.number}</td>
                                                <td>{props.convertVND(value.price)} VNĐ</td>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </table>
                        <br />
                    </Fragment>
                )
            })

        } else {
            return <h1>Bạn chưa có gọi món nào cả</h1>
        }
    }

    const showMoney = () => {
        if (props.listBill.length > 0) {
            return (
                <Fragment>
                    <CaculatePrice render={(getPrice) => <ShowPrice className='billPrice' list={props.listBill} getPrice={getPrice} />} />
                    <button type="button" className="btn btn-primary" onClick={onHandlePay}>Tính tiền</button>
                </Fragment>
            )
        }
    }

    return (

        <div>
            {showTable()}
            {showMoney()}
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        listBill: state.listBillReducer
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        clearBill: () => {
            dispatch(actions._clearBill())
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withConvertVND
)(Bill)
