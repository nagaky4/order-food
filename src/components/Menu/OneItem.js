import React from 'react'
import { Link } from 'react-router-dom';

import ComposeAddToCart from '../HOC/addToCart'


const OneItem = (props) => {
    return (

        <div className="col-3" key={props.value.id}>
            <div className="card text-center mt-2 mb-2">
                <Link to={'/menu/' + props.value.id} >
                    <img className="card-img-top " src={props.value.images} alt="" />
                </Link>
                <div className="card-body">
                    <h4 className="card-title">{props.value.name}</h4>
                    <p>{props.value.price} VNĐ</p>

                    {props.children}

                </div>
            </div>
        </div >
    )
}




// var mapDispatchToProps = (dispatch, props) => {
//     return {
//         addToList: (item) => {
//             dispatch(actions._addToList(item));
//         }
//     }
// }


export default ComposeAddToCart(OneItem);
