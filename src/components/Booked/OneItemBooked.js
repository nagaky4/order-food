import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../../actions/index'
const OneItemBooked = (props) => {

    const onDeleteItem = (id) => {

        props.deleteItem(id);
    }
    return (
        <div className="list-group-item list-group-item-action">
            <div className="row">
                <div className="col-6">
                    {props.value.name} - ( {props.value.number} phần)
            </div>
                <div className="col-6">
                    <button type="button" onClick={() => onDeleteItem(props.value.id)} className="btn btn-danger">X</button>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        deleteItem: (id) => {
            dispatch(actions._deleteItem(id));
        }
    }
}
export default connect(null, mapDispatchToProps)(OneItemBooked);
