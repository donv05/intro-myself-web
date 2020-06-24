import React, {Suspense, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NoMatch from './views/layout/noMatch/noMatch'
const SignInComponent = React.lazy(() => import('./views/loginManager/sign-in/signIn'));
const DashboardComponent = React.lazy(() => import('./views/layout/layout'));

function App() {
  return (
    <Suspense fallback={<div className="lds-ripple"><div></div><div></div></div>}>
      <Router>
        <div className="Layout">
          <Switch>
            <Route path="/web" component={DashboardComponent}>
            </Route>
            <Route exact path="/login" component={SignInComponent}>
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
          <ToastContainer hideProgressBar={true}/>
        </div>
      </Router>
    </Suspense>
  );
}

export default App;
