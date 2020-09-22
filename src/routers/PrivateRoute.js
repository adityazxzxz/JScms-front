import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isLogin } from '../utils'

const PrivateRoute = ({
    component:Component,
    ...rest
}) => (
    <Route {...rest} component={(props) => {
        console.log(props)
        return ( isLogin() ? (<div><Component {...props}/></div>) : (<Redirect to="/"/>) )
    }} />
);

export default PrivateRoute;



