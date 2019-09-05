import React from 'react'
import FormLogin from './FormLogin';

import { connect } from 'react-redux';

import * as actions from '../../actions/index';


const Login = (props) => {

    const submit = values => {
        var authData = {
            ...values,
            returnSecureToken: true
        }
        console.log(authData);
        props.submitLogin(authData);

    }

    return (
        <div className="marginTopMenu">
            <div className="jumbotron">
                <h1 className="display-3">Login</h1>
                <p className="lead">Jumbo helper text</p>
                <hr className="my-2" />
                <FormLogin onSubmit={submit} />
            </div>
        </div>
    )

}


const mapDispatchToProps = (dispatch, props) => {
    return {
        submitLogin: (authData) => {
            dispatch(actions._loginHandle(authData));
        }
    }
}


export default connect(null, mapDispatchToProps)(Login)
