import React, { Component } from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Confirm from './components/other/confirm'
import Home from './components'
import { Provider } from "react-redux"
import store from './store/index'

class App extends Component {

  render() {
    return (
      <Provider store={ store }>
          <Router>
            <div>
              <Route path="/" component={Home} />
            </div>
        </Router>
      </Provider>
    );
  }
}

export default App;