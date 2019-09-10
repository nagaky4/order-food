import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CartIcon from './CartIcon';

import Aux from '../HOC/Auxiliary';

export const Nav = (props) => {

    const { isAuthenicated } = props;
    let navAuthen = null;
    if (isAuthenicated) {
        navAuthen = <NavLink className="btn btn-warning" exact to="/logout" activeClassName="active">Đăng xuất</NavLink>;
    } else {
        navAuthen = <NavLink className="btn btn-outline-success" exact to="/login" activeClassName="active">Đăng nhập</NavLink>;
    }
    return (
        <Aux>
            <nav className="navbar navbar-expand-sm navbar-light fixed-top container" style={{ 'backgroundColor': '#e3f2fd' }} >
                <Link className="navbar-brand" to="/">Quán ăn miền trung </Link>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item" >
                            <NavLink className="nav-link" exact to="/" activeClassName="active" >Trang chủ</NavLink>
                        </li>
                        <li className="nav-item" >
                            <NavLink className="nav-link" exact to="/menu" activeClassName="active" >Món ăn</NavLink>
                        </li>
                        <li className="nav-item" >
                            <NavLink className="nav-link" exact to="/order-now" activeClassName="active">Hóa đơn</NavLink>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <CartIcon />
                        {/* <input className="form-control mr-sm-2" type="text" placeholder="Tìm kiếm" /> */}
                        {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                        </button> */}
                         {navAuthen}
                    </form>
                </div>
            </nav>
        </Aux>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuthenicated: state.authenUser.isAuthenicated
    }
}

export default connect(mapStateToProps, null)(Nav)
