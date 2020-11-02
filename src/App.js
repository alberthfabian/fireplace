import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import { ServerProvider } from './context';
import WhatsApp from './components/WhatsApp';
import PageNotFound from './components/PageNotFound';
import Home from './pages/Home';
import "./App.css";

const App = () => (
  <ServerProvider>
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route component={PageNotFound}/>
        </Switch>
        <WhatsApp/>
      </Layout>
    </BrowserRouter>
  </ServerProvider>
);

export default App;