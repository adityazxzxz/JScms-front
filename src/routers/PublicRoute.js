import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isLogin } from '../utils'

const PublicRoute = ({
    component:Component,
    ...rest
}) => (
    <Route {...rest} component={(props) => {
        return ( isLogin() ? (<Redirect to="/dashboard"/>) : (<div><Component {...props}/></div>))
    }} />
);

export default PublicRoute;



