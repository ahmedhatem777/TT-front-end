import React from 'react';
import axios from 'axios';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import UserContext from '../../userContext';
import { Redirect } from 'react-router-dom';
import './home.styles.scss';
axios.defaults.withCredentials = true;

class HomePage extends React.Component{
    state = {
        signInAlert: '',
        signUpAlert: '',
        signInButtonLoad: false,
        signUpButtonLoad: false
    }

    handleSignIn = (email, password) => {
        this.setState( () => ({signInButtonLoad: true}));
        axios.post('https://ttapi.ahmed-hatem.com/users/login/', {email, password})
            .then( res => {
                this.context.setLoggedIn(true);
                this.props.history.push('/dashboard');
            })
            .catch( err => {
                if (err.response) this.setState(() => ({ signInAlert: err.response.data }));
                this.setState(() => ({ signInButtonLoad: false }));
                console.log(err);
            })
    }

    handleSignUp = (name, email, password) => {
        this.setState(() => ({ signUpButtonLoad: true }));
        axios.post('https://ttapi.ahmed-hatem.com/users/', {name, email, password })
            .then( res => {
                this.context.setLoggedIn(true);
                this.props.history.push('/dashboard');
            })
            .catch(err => {
                if (err.response) this.setState(() => ({ signUpAlert: err.response.data }));
                this.setState(() => ({ signUpButtonLoad: false }));
            })
    }

    componentDidMount = () => {
        axios.get('https://ttapi.ahmed-hatem.com/cookie')
            .then(res => {
                console.log(res)
                this.context.setLoggedIn(true);
                //this.props.history.push('/dashboard');
            })
            .catch( err => console.log(err));
    }

    render() {
        return (
            this.context.loggedIn ?
                 <Redirect to="/dashboard"/>
            :
                <div className="row justify-content-around homepage-row">
                    <div className="col-md-4">
                        <SignInForm 
                            handleSignIn={this.handleSignIn} 
                            signInAlert={this.state.signInAlert} 
                            signInButtonLoad={this.state.signInButtonLoad} 
                        />
                    </div>
                    <div className="col-md-4 sign-up-column">
                        <SignUpForm 
                            handleSignUp={this.handleSignUp}
                            signUpAlert={this.state.signUpAlert}
                            signUpButtonLoad={this.state.signUpButtonLoad} 
                        />
                    </div>
                </div>
        )   
    }
}

HomePage.contextType = UserContext;

export default HomePage;