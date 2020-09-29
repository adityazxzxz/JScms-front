import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import Article from './Article'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'

const dashboard = () => {
    return (
        <div className="wrapper">
            <Navbar></Navbar>
            <Sidebar></Sidebar>
            
            <Switch>
            <Route path={`/dashboard/home`} component={Home} />
            <Route path={`/dashboard/article`} component={Article} />
            </Switch>
            <Footer></Footer>

            <aside className="control-sidebar control-sidebar-dark">
            </aside>
        </div>
    )
}

export default dashboard;