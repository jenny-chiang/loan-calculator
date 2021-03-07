import React from 'react'
import Nav from '../component/nav'
import RatePage from './ratePage'
import MainPage from "./mainPage"
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const Page = () => {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route path="/" exact component={MainPage}/>
                    <Route path="/rate" component={RatePage}/>
                </Switch>
            </div>
        </Router>

    )
}

export default Page