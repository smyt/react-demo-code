import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, CartPage } from '../pages';
import Header from '../catalog-header'
import GoodsCart from '../goods-cart'
import './app.scss'

const App = () => {
  return (
    <main role="main">
      <Header />
      <Switch>
        <Route path="/"
               component={HomePage}
               exact />
        <Route path="/cartPage"
               component={CartPage} />
      </Switch>
      <GoodsCart />
    </main>
  )
};

export default App;