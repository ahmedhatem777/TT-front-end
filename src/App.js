import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthRoute from './components/auth-route/auth-route.component';
import Header from './components/header/header.component';
import HomePage from './pages/Home/home.page';
import AboutPage from './pages/About/about.page';
import Dashboard from './pages/Dashboard/dashboard.page';
import AddTaskPage from './pages/Add-Task/add-task.page';
import EditTaskPage from './pages/Edit-Task/edit-task.page';
import ShowProfilePage from './pages/Show-Profile/show-profile.page';
import SettingsPage from './pages/Settings/settings.page';
import NotFoundPage from './pages/Not-Found/not-found.page';
import Footer from './components/footer/footer.component';
import './App.scss';

class App extends React.Component {
  
  state= {
    loggedIn: false
  }

  setLoggedIn = () => {
    this.setState({ loggedIn: true });
  }

  unSetLoggedIn = () => {
    this.setState({ loggedIn: false });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="main-div">
          <Header loggedIn={this.state.loggedIn} />
          <div className="container-fluid">
            <Switch>

              <Route exact path="/" render={ routeProps => <HomePage {...routeProps} loggedIn={this.state.loggedIn} setLoggedIn={this.setLoggedIn} />} />

              <Route path="/about" component={AboutPage} />

              <AuthRoute loggedIn={this.state.loggedIn} unSetLoggedIn={this.unSetLoggedIn} path="/dashboard" component={Dashboard} />

              <AuthRoute loggedIn={this.state.loggedIn} unSetLoggedIn={this.unSetLoggedIn} path="/addtask" component={AddTaskPage} />

              <AuthRoute loggedIn={this.state.loggedIn} unSetLoggedIn={this.unSetLoggedIn} path="/showprofile" component={ShowProfilePage} />

              <AuthRoute loggedIn={this.state.loggedIn} unSetLoggedIn={this.unSetLoggedIn} path="/edittask/:id" component={EditTaskPage} />

              <AuthRoute loggedIn={this.state.loggedIn} unSetLoggedIn={this.unSetLoggedIn} path="/settings" component={SettingsPage} />

              <Route component={NotFoundPage} />

            </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
  
}

export default App;
