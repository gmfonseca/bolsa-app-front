import React from 'react'
import {Switch, Route, Redirect} from 'react-router'
import OrdemCrud from '../components/order/Ordem'
import TransacaoCrud from '../components/transacao/Transacao'
import AtivoCrud from '../components/ativo/Ativo'

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
        <PrivateRoute exact path='/assets' component={AtivoCrud}></PrivateRoute>
        <Redirect from='*' to='/'></Redirect>
    </Switch>