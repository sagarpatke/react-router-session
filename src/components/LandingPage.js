import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';

const styles = {
  paper: {
    width: '70%',
    height: '200px',
    margin: 'auto',
    textAlign: 'center',
    padding: '20px'
  }
};

export default class LandingPage extends React.Component {4
  constructor() {
    super();
    console.log('inside constructor');
  }

  componentWillMount() {
    console.log('inside componentWillMount');
  }

  render() {
    console.log('inside render');
    return (
      <Paper style={styles.paper}>
        <h1>Welcome to My Application</h1>
        <Link to="/app"><RaisedButton label="Login" primary={true} /></Link>
      </Paper>
    );
  }

  componentDidMount() {
    console.log('inside componentDidMount');
  }
}
