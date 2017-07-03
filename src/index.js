import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import injectTapEventPlugin from 'react-tap-event-plugin';

import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';

import {BrowserRouter as Router, Route} from 'react-router-dom';

injectTapEventPlugin();

function handleTouchTap() {
  console.log('User Tapped Button');
}

ReactDOM.render(<MuiThemeProvider>
  <Router>
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route path="/app" component={Dashboard} />
    </div>
  </Router>
</MuiThemeProvider>, document.getElementById('root'));
