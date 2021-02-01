import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/header.component';
import HomePage from './pages/Home/home.page';
import AboutPage from './pages/About/about.page';
import Dashboard from './pages/Dashboard/dashboard.page';
import Footer from './components/footer/footer.component';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="main-div">
        <Header />
        <div className="container-fluid">
          <Switch>

            <Route exact path="/">
              <HomePage />
            </Route>

            <Route exact path="/about">
              <AboutPage />
            </Route>

            <Route exact path="/dashboard">
              <Dashboard />
            </Route>


          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>    
  );
}

export default App;
