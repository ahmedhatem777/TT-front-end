import React from 'react';
import axios from 'axios';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import './home.styles.scss';
axios.defaults.withCredentials = true;

class HomePage extends React.Component{

    handleSignIn = (email, password) => {
        axios.post('http://localhost:4000/users/login', {email, password})
        .then( res => {
            console.log(res);
            this.props.setLoggedIn();
            this.props.history.push('/dashboard');
        })
        .catch( err => console.log(err));
    }

    handleSignUp = (name, email, password) => {
        axios.post('http://localhost:4000/users', {name, email, password })
            .then( res => {
                console.log(res);
                this.props.setLoggedIn();
                this.props.history.push('/dashboard');
            })
            .catch( err => console.log(err));
    }

    render() {
        return (
            <div className="row justify-content-around homepage-row">
                <div className="col-md-4">
                    <SignInForm handleSignIn={this.handleSignIn} />
                </div>
                <div className="col-md-4 sign-up-column">
                    <SignUpForm handleSignUp={this.handleSignUp} />
                </div>
            </div>

        )   
    }
}

export default HomePage;