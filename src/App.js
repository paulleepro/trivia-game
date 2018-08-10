import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { Route, Router } from 'react-router-dom';

import store, { history } from './store';

import Home from './containers/Home';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
            <Route exact path="/" component={Home} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
