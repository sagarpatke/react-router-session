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

export default class Dashboard extends React.Component {
  render() {
    return (
      <Paper style={styles.paper}>
        <h1>Dashboard</h1>
        <Link to="/"><RaisedButton label="Logout" primary={true} /></Link>
      </Paper>
    );
  }
}
