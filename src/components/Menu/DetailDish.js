import React from 'react';
import ComposeAddToCart from '../HOC/addToCart'


const DetailDish = (props) => {
    return (

        <div>
            <div className="jumbotron">
                <h1 className="display-3">{props.value.name}</h1>
                <p className="lead">{props.value.price} VNĐ</p>
                <img src={props.value.images} className="img-fluid" style={{ 'width': '400px', 'height': 'auto' }} alt="" />
                <hr className="my-2" />
                <p>{props.value.detail}</p>
                <div className="lead">
                    {props.children}
                </div>
            </div>
        </div>
    )

}

export default ComposeAddToCart(DetailDish);
