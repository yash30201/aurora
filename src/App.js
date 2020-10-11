import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/projectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SIgnUp';
import CreateProject from './components/projects/createProject';
import { useSelector } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div>Splash Screen</div>
  return children
}

export class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <AuthIsLoaded>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route path='/project/:id' component={ProjectDetails} />
              <Route path='/signin' component={SignIn} />
              <Route path='/signup' component={SignUp} />
              <Route path='/create' component={CreateProject} />
            </Switch>
          </div>
        </AuthIsLoaded>
      </BrowserRouter>
    );
  }
}

export default App;
