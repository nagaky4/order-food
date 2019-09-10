import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

import * as actions from '../../../actions/authenicated';

const Logout = (props) => {

    props.logOut();


    let summary = '';
    if (!props.isAuthenicated) {
        summary = <Redirect to="/" />
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
        logOut: () => {
            dispatch(actions._logout());
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Logout)