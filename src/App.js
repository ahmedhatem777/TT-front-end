import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/header.component';
import HomePage from './pages/Home/home.page';
import AboutPage from './pages/About/about.page';
import Dashboard from './pages/Dashboard/dashboard.page';
import AddTaskPage from './pages/Add-Task/add-task.page';
import ShowProfilePage from './pages/Show-Profile/show-profile.page';
import EditProfilePage from './pages/Edit-Profile/edit-profile.page';
import NotFoundPage from './pages/Not-Found/not-found.page';
import Footer from './components/footer/footer.component';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="main-div">
        <Header />
        <div className="container-fluid">
          <Switch>

            <Route exact path="/" component={HomePage} />

            <Route exact path="/about" component={AboutPage} />

            <Route exact path="/dashboard" component={Dashboard} />

            <Route exact path="/addtask" component={AddTaskPage} />

            <Route exact path="/showprofile" component={ShowProfilePage} />

            <Route exact path="/editprofile" component={EditProfilePage} />

            <Route exact path="/*" component={NotFoundPage} />

          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>    
  );
}

export default App;
