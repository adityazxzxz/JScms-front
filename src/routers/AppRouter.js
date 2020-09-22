import React,{ useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'

import LoginPage from '../components/Login'
import Dashboard from '../components/Dashboard'
import NotFoundPage from '../components/NotFoundPage'
import UserContext from '../context/user-context'

import PrivateRoute from '../routers/PrivateRoute'
import PublicRoute from '../routers/PublicRoute'


const AppRouter = (props) => {
    const isLogin = true;
    console.log('props',props)
    return (
        <div>
            <UserContext.Provider>
                <Switch>
                    <PublicRoute path='/' component={LoginPage} exact={true} />
                    <PrivateRoute path='/dashboard' component={Dashboard} />
                    <Route component={NotFoundPage} />
                </Switch>
            </UserContext.Provider>
        </div>
    )
}

export default AppRouter;