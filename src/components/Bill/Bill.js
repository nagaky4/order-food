import React, { Fragment } from 'react'

import { connect } from 'react-redux'
import CaculatePrice from '../Share/functional/CaculatePrice';
import ShowPrice from '../Share/component/ShowPrice';

const Bill = (props) => {

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
                                                <td>{value.price} VNĐ</td>


                                            </tr>

                                        )
                                    })
                                }

                            </tbody>
                        </table>
                        <br />
                    </Fragment>
                )
            }
            )

        } else {
            return <h1>Bạn chưa có gọi món nào cả</h1>
        }
    }

    const showMoney = () => {
        if (props.listBill.length > 0) {
            return (
                <>
                    <CaculatePrice render={(getPrice) => <ShowPrice list={props.listBill} getPrice={getPrice} />} />
                    <h2>Tổng tiền :  4000VND</h2>
                    <button type="button" className="btn btn-primary">Tính tiền</button>
                </>
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

export default connect(mapStateToProps, null)(Bill)
