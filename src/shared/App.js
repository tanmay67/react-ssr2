import React, { Component } from 'react';
import routes from './routes';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import NotFound from './NotFound';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Switch>
            {routes.map(({ path, exact, component: C, ...rest }) => (
              <Route
                path={path}
                key={path}
                exact={exact}
                render={(props) => <C {...props} {...rest} />}
              />
            ))}
            <Route render={(props) => <NotFound {...props} />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
