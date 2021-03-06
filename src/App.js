
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from './components/_navigation/Menu';
import Home from './components/Home';
import RSVP from './components/RSVP';
import Error from './components/Error';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* <Menu /> */}
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/join" component={RSVP} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
};

export default App; 
