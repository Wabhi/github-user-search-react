import React from 'react';
import DashBoard from './Pages/Dashboard'
import Login from './Pages/Login'
import Error from './Pages/Error'
import PrivateRout from './Pages/PrivateRout'
import AuthWrapper from './Pages/AuthWrapper'
import {BrowserRouter as Router,Switch,Route} from  'react-router-dom'
function App() {
  return (
    <AuthWrapper>
      <Router>
        <Switch>
          <PrivateRout path="/" exact={true}>
            <DashBoard/>
          </PrivateRout>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="*">
            <Error/>
          </Route>
        </Switch>
      </Router>
    </AuthWrapper>
  );
}

export default App;
