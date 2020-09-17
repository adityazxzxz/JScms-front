import React from 'react'
import {Route, Router, Switch} from 'react-router-dom'
import { createBrowserHistory } from "history";

import LoginPage from '../components/Login'

export const history = createBrowserHistory()

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path='/' component={LoginPage} exact={true} />
                <Route path='/test' component={LoginPage}/>
            </Switch>
        </div>
    </Router>
)

export default AppRouter;