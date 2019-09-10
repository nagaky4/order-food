import React, { Fragment, useState } from 'react'

import { connect } from 'react-redux'
import compose from 'recompose/compose';

import CaculatePrice from '../Share/functional/CaculatePrice';
import ShowPrice from '../Share/component/ShowPrice';
import withConvertVND from '../HOC/withConvertVND';

import * as actions from '../../actions/index';
import Controller from '../../Controlller/Controller';
import Spiner from '../UI/spinner/Spiner';


const Bill = (props) => {

    const [loading, setLoading] = useState(false);
    const [errMess, setErrMess] = useState(null);
    const [err, setErr] = useState(false);

    const onHandlePay = async () => {

        if (props.authenUser.isAuthenicated) {
            setLoading(true);
            var data = {
                bill: {
                    ...props.listBill
                },
                email: props.authenUser.email,
                dateBook: new Date()
            }
            try {
                const res = await Controller.addBill(props.authenUser.token, data);
                if (res.status === 200) {
                    setLoading(false);
                    props.clearBill();
                }
            } catch (error) {
                setLoading(false);
                setErr(true);
            }

        } else {
            setErrMess('Bạn cần phải đăng nhập để thực hiện chức năng này!')
        }



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
                    <div>
                        <button type="button" className="btn btn-primary" onClick={onHandlePay}>Tính tiền</button>
                    </div>
                </Fragment>
            )
        }
    }

    const showLoadingSpiner = () => {
        if (loading) {
            return <Spiner />
        }
    }

    let summary = (
        <div className="marginTopMenu">
            {showTable()}
            {showLoadingSpiner()}
            {showMoney()}
            <h1 style={{color:'red'}}>{errMess}</h1>
        </div>
    )
    if (err) {
        summary = <h1>SOMETHING WENT WRONG!</h1>
    }

    return summary;
}


const mapStateToProps = (state) => {
    return {
        listBill: state.listBillReducer,
        authenUser: state.authenUser
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
