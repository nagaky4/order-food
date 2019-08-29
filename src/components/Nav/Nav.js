import React, { Component } from 'react';
import { Route, NavLink, Link } from 'react-router-dom';

import Home from '../Home/Home';
import Menu from '../Menu/Menu';
import DetailDish from '../Menu/DetailDish';

import CartIcon from './CartIcon';

import data from '../DB/dataFake';
import Bill from '../Bill/Bill';


class Nav extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-sm navbar-light" style={{ 'backgroundColor': '#e3f2fd' }} >
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
                                <NavLink className="nav-link" exact to="/order-now" activeClassName="active">Thanh toán</NavLink>
                            </li>


                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <CartIcon />
                            <input className="form-control mr-sm-2" type="text" placeholder="Tìm kiếm" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Tìm kiếm</button>
                        </form>
                    </div>
                </nav>

                <Route exact path="/" component={Home} />
                <Route path="/menu" exact component={Menu} />
                <Route path="/menu/:id" exact render={(props) => {
                    var paramId = props.match.params.id;
                    var value = data.filter(item => item.id === paramId)[0];
                    return <DetailDish value={value} />
                }} />
                <Route path="/order-now" exact component={Bill} />
            </>


        )
    }
}



export default Nav
