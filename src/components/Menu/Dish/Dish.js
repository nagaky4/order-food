import React from 'react'
import { Link } from 'react-router-dom';

import ComposeAddToCart from '../../HOC/addToCart'
import compose from 'recompose/compose'

import * as classes from './Dish.module.css';
import withConvertVND from '../../HOC/withConvertVND';

export const Dish = (props) => {
    return (

        <div className="col-sm-4" key={props.value.id}>
            <div className="card text-center mt-2 mb-2 one-item">
                <Link to={'/menu/' + props.value.id} >
                    <img className={classes.StyleImage + " card-img-top"} src={props.value.images} alt="" />
                </Link>
                <div className="card-body">
                    <h4 className={classes.StyleCardTitle + " card-title"}>{props.value.name}</h4>
                    <p>{props.convertVND(props.value.price)} VNĐ</p>

                    {props.children}
                </div>
            </div>
        </div >
    )
}

export default compose(
    ComposeAddToCart,
    withConvertVND
)(Dish);
