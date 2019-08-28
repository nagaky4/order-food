import React, { Component } from 'react'

import ReactDom from 'react-dom';

import * as classes from './BillModal.module.css'

class BillModal extends Component {
    render() {
        return ReactDom.createPortal(
            <div className={classes.BillModalContainer}>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-2">Các món bạn đã gọi</h1>
                        <p className="lead">Jumbo helper text</p>
                        <hr className="my-2" />
                        <p>Thành tiền : </p>
                        <p className="lead">
                            <button type="button" className="btn btn-warning mr-2" onClick={this.props.fuCloseModal}>Đóng</button>
                            <button type="button" className="btn btn-primary" onClick={() => { alert('done') }} >Gọi</button>
                        </p>
                    </div>
                </div>
            </div>
            , document.getElementById('modal-bill'));
    }
}

export default BillModal
