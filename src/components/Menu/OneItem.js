import React from 'react'
import { Link } from 'react-router-dom';

import ComposeAddToCart from '../HOC/addToCart'

import * as classes from './OneItem.module.css';

const OneItem = (props) => {
    return (

        <div className="col-4" key={props.value.id}>
            <div className="card text-center mt-2 mb-2 one-item">
                <Link to={'/menu/' + props.value.id} >
                    <img className={classes.StyleImage + " card-img-top" } src={props.value.images} alt="" />
                </Link>
                <div className="card-body">
                    <h4 className={classes.StyleCardTitle +" card-title"}>{props.value.name}</h4>
                    <p>{props.value.price} VNĐ</p>

                    {props.children}

                </div>
            </div>
        </div >
    )
}

export default ComposeAddToCart(OneItem);
