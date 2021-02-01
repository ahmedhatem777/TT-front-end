import React from 'react';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import './home.styles.scss';

const HomePage = () => {
    return (
        <div className="row justify-content-around homepage-row">
            <div className="col-md-4">
                <SignInForm />
            </div>
            <div className="col-md-4 sign-up-column">
                <SignUpForm />
            </div>
        </div>
        
    )    
}

export default HomePage;