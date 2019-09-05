import React from 'react'
import { Field, reduxForm } from 'redux-form'

import * as classes from './Login.module.css'

const FormLogin = (props) => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <Field name="email" component="input" type="email" className={"form-control " + classes.InputStyle} placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <Field name="password" component="input" type="password" className={"form-control " + classes.InputStyle} placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )

}


export default reduxForm({ form: 'login-form' })(FormLogin);