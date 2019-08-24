import { Router, Route, Switch, Link, NavLink } from 'react-router-dom'
import React from 'react'
import createHistory from 'history/createBrowserHistory'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import EditExpensePage from '../components/EditExpensePage'
import AddExpensePage from'../components/AddExpensePage'

import NotFoundPage from '../components/NotFoundPage'

import LogInPage from '../components/LogInPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createHistory()

const AppRouter = () =>(

    <Router history ={history}>
    
        <div>
           
            
          
           
            <Switch>
                <PublicRoute exact path="/" component={LogInPage} />
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
                <PrivateRoute path="/create" component={AddExpensePage} />
                <PrivateRoute path="/edit/:id" component={EditExpensePage} />
            
                <Route component={NotFoundPage} />

            </Switch>

        </div>





    </Router>
);


export default AppRouter