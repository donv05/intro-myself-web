import React, {Suspense} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
const SignInComponent = React.lazy(() => import('./views/loginManager/sign-in/signIn'));
const DashboardComponent = React.lazy(() => import('./views/layout/layout'));

function App() {
  return (
    <Suspense fallback={<div className="loader"></div>}>
      <Router>
        <div className="Layout">
          <Switch>
            <Route path="/web/dashboard" component={DashboardComponent}>
            </Route>
            <Route exact path="/" component={SignInComponent}>
            </Route>
          </Switch>
        </div>
      </Router>
    </Suspense>
  );
}

export default App;
