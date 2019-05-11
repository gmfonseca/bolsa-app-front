import React from 'react'
import {Switch, Route, Redirect} from 'react-router'
import OrdemCrud from '../components/order/Ordem'
import TransacaoCrud from '../components/transacao/Transacao'
import AtivoCrud from '../components/ativo/Ativo'
import InfoGetter from '../components/info/Info'

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
        <PrivateRoute exact path='/ordens' component={OrdemCrud}></PrivateRoute>
        <PrivateRoute exact path='/transacoes' component={TransacaoCrud}></PrivateRoute>
        <PrivateRoute exact path='/acoes' component={AtivoCrud}></PrivateRoute>
        <PrivateRoute exact path='/info' component={InfoGetter}></PrivateRoute>
        <Redirect from='*' to='/'></Redirect>
    </Switch>