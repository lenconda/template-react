import React, { Suspense } from 'react';
import {
  Route,
  Redirect,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import './App.css';

const <%= name[0].toUpperCase() + name.slice(1).toLowerCase() %>Page = React.lazy(() => import('./pages/<%= name[0].toUpperCase() + name.slice(1).toLowerCase() %>'));

const App = () => {
  return (
    <>
      <p>
        <code>It works!</code>
      </p>
      <div>
        <Router>
          <Suspense fallback={null}>
            <Switch>
              <Route path="/<%= name.toLowerCase() %>" component={() => <<%= name[0].toUpperCase() + name.slice(1).toLowerCase() %>Page />} />
              <Redirect from="/" to="/foo" />
            </Switch>
          </Suspense>
        </Router>
      </div>
      <p>Generated by <code>dollie.js</code></p>
    </>
  );
};

export default App;
