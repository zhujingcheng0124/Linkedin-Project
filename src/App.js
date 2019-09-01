import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Auth from './containers/Auth/Auth';
import Layout from './hoc/Layout/Layout';
import JobGrid from './containers/JobGrid/JobGrid';
import Logout from './containers/Auth/Logout/Logout';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/auth" component={Auth} />
            <Route path="/logout" component={Logout} />
            <Route path="/" exact component={JobGrid} />
          </Switch>
        </Layout>
      </div>
    );
  }
  
}

const mapStateToProps = state => {
  return {
      isAuthenticated: state.auth.token !== null
  };
};

export default App;