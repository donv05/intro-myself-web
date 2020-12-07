import React, {Suspense} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NoMatch from './views/components/noMatch/noMatch'
import { ToastContainer } from 'react-toastify';
import './App.scss';

const SignInComponent = React.lazy(() => import('./views/loginManager/sign-in/signIn'));
const DashboardComponent = React.lazy(() => import('./views/components/layout'));

function App() {
  return (
    <Suspense fallback={<div className="lds-ripple"><div></div><div></div></div>}>
        <Router>
            <div className="u-main">
                <Switch>
                    <Route path="/web" component={DashboardComponent}>
                    </Route>
                    <Route exact path="/login" component={SignInComponent}>
                    </Route>
                    <Redirect from="*" to ="/login"></Redirect>
                    <Route exact path="*">
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
