import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/navbar'; 
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/projectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SIgnUp';
import CreateProject from './components/projects/createProject';


export class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path = '/' component = {Dashboard} />
            <Route path = '/project/:id' component = {ProjectDetails} />
            <Route path = '/signin' component = {SignIn} />
            <Route path = '/signup' component = {SignUp} />
            <Route path = '/create' component = {CreateProject} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
