import React from 'react'
import FormLogin from './FormLogin';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

import * as actions from '../../../actions/authenicated';


const Login = (props) => {



    const submit = values => {
        var authData = {
            ...values,
            returnSecureToken: true
        }
        props.submitLogin(authData);
    }
    let summary = (<div className="jumbotron">
        <h1 className="display-3">Login</h1>
        <hr className="my-2" />
        <FormLogin onSubmit={submit} />
    </div>);
    if (props.isAuthenicated) {
        summary = <Redirect to='/' />
    }
 
    return summary;

}

const mapStateToProps = (state) => {
    return {
        isAuthenicated: state.authenUser.isAuthenicated
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        submitLogin: (authData) => {
            dispatch(actions._loginHandle(authData));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)
