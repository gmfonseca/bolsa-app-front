import React from 'react'
import {Switch, Route, Redirect} from 'react-router'
import OrdemCrud from '../components/order/Ordem'
import TransacaoCrud from '../components/transacao/Transacao'

import Home from '../components/home/Home'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
          <Component {...props} />
      }
    />
);


export default props =>
    <Switch>
        <Route exact path='/' component={Home}></Route>
        <PrivateRoute exact path='/home' component={Home}></PrivateRoute>
        <PrivateRoute exact path='/orders' component={OrdemCrud}></PrivateRoute>
        <PrivateRoute exact path='/transactions' component={TransacaoCrud}></PrivateRoute>
        <Redirect from='*' to='/'></Redirect>
    </Switch>