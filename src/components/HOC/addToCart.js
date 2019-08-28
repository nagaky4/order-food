import React, { useState, useRef, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import * as actions from '../../actions/index';

import NotifyPortal from '../Layout/NotifyPortal'

const addToCart = (Wrapped) => {

    return (props) => {
        const inputEl = useRef(null);

        const [isDisable, setIsDisable] = useState(true);
        const [isBooked, setIsBooked] = useState(false);

        const onAddToList = () => {
            setIsBooked(true);
            setIsDisable(true);
            var item = {
                id: props.value ? props.value.id : null,
                name: props.value ? props.value.name : null,
                number: parseInt(inputEl.current.value),
                price: props.value ? props.value.price * parseInt(inputEl.current.value) : null
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
            var value = e.target.value;
            console.log('e ', value);

            if (parseInt(value) > 0) {
                setIsDisable(false);
            }
        }

        console.log('inputEl', inputEl.current ? true : false);
        return (

            <Wrapped {...props}>
                <Fragment >
                    <div className="form-group">
                        <label htmlFor=""></label>
                        <input ref={inputEl}
                            className="form-control" type="number"
                            min="0" max="10"
                            //  value={inputEl.current.value}
                            onChange={onHanleChange}
                        />
                        <small id="helpId" className="form-text text-muted">Số lượng</small>
                    </div>
                    <div className="form-group">
                        <button disabled={isDisable}
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