import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import * as actions from '../../actions/index';

import NotifyPortal from '../Layout/NotifyPortal'

const addToCart = (Wrapped) => {

    return (props) => {

        const [numOfItem, setNumOfItem] = useState(0);
        const [isBooked, setIsBooked] = useState(false);

        const onAddToList = () => {
            setIsBooked(true);
            setNumOfItem(0);
            var item = {
                id: props.value ? props.value.id : null,
                name: props.value ? props.value.name : null,
                number: parseInt(numOfItem),
                price: props.value ? props.value.price * parseInt(numOfItem) : null
            }
            props.addToList(item);
        }

        useEffect(() => {
            var timeOutIsBooked = null;
            timeOutIsBooked = setTimeout(() => {
                setIsBooked(false);
            }, 1000);
            return () => {
                return clearTimeout(timeOutIsBooked);
            }
        }, [isBooked])

        const onHanleChange = (e) => {
            setNumOfItem(parseInt(e.target.value));
        }
        return (

            <Wrapped {...props}>
                <Fragment >
                    <div className="form-group">
                        <label htmlFor=""></label>
                        <input
                            className="form-control" type="number"
                            min="0" max="10"
                            value={numOfItem}
                            onChange={onHanleChange}
                        />
                        <small id="helpId" className="form-text text-muted">Số lượng</small>
                    </div>
                    <div className="form-group">
                        <button disabled={numOfItem <= 0 ? true : false}
                            type="button"
                            onClick={onAddToList}
                            className="btn btn-primary">Thêm</button>
                    </div>
                </Fragment>
                {isBooked && <NotifyPortal />}
            </Wrapped >

        )

    }
}


var mapDispatchToProps = (dispatch, props) => {
    return {
        addToList: (item) => {
            dispatch(actions._addToList(item));
        }
    }
}

const ComposeAddToCart = compose(connect(null, mapDispatchToProps), addToCart);

export default ComposeAddToCart;