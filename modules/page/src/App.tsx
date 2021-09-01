import React, { Suspense } from 'react';
import {
  Route,
  Redirect,
  BrowserRouter as Router,
  Switch,
  Link,
} from 'react-router-dom';
import './App.css';

const FooPage = React.lazy(() => import('./pages/Foo'));
const BarPage = React.lazy(() => import('./pages/Bar'));
const <%= name[0].toUpperCase() + name.slice(1).toLowerCase() %>Page = React.lazy(() => import('./pages/<%= name[0].toUpperCase() + name.slice(1).toLowerCase() %>'));

const App: React.FC = () => {
  return (
    <>
      <p>
        <code>It works!</code>
      </p>
      <div>
        <Router>
          <ul>
            <li><Link to="/foo">Foo Page</Link></li>
            <li><Link to="/bar">Bar Page</Link></li>
          </ul>
          <Suspense fallback={null}>
            <Switch>
              <Route path="/foo" component={() => <FooPage />} />
              <Route path="/bar" component={() => <BarPage />} />
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
