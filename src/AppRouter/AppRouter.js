import React from 'react'
import { Route, Switch } from 'react-router-dom';


import Login from '../components/Authen/Login/Login';
import Logout from '../components/Authen/Logout/Logout';
import InitDb from '../components/Utilities/InitDb';
import Bill from '../components/Bill/Bill';
import Home from '../components/Home/Home';
import Menu from '../components/Menu/Menu';
import ChooseDish from '../components/Menu/Dish/ChooseDish';

export default function AppRouter() {
    return (
        <>
            <Route exact path="/" component={Home} />
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/logout" component={Logout} />
            </Switch>
            <Switch>
                <Route path="/menu" exact component={Menu} />
                <Route path="/menu/:id" exact component={ChooseDish} />

            </Switch>
            <Route path="/init" exact component={InitDb} />
            <Route path="/order-now" exact component={Bill} />
        </>
    )
}
