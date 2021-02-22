import React, {useState} from 'react';
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
import UserContext from './userContext';
import './App.scss';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
    return (
      <BrowserRouter>
        <div className="main-div">

          <UserContext.Provider value={{loggedIn, setLoggedIn}}>
            <Header />
            <div className="container-fluid">
              <Switch>

                <Route exact path="/" component={HomePage} />

                <Route path="/about" component={AboutPage} />

                <AuthRoute path="/dashboard" component={Dashboard} />

                <AuthRoute path="/addtask" component={AddTaskPage} />

                <AuthRoute path="/showprofile" component={ShowProfilePage} />

                <AuthRoute path="/edittask/:id" component={EditTaskPage} />

                <AuthRoute path="/settings" component={SettingsPage} />

                <Route component={NotFoundPage} />

              </Switch>
            </div>
          </UserContext.Provider>
          <Footer />
        </div>
      </BrowserRouter>
    )
}

export default App;
