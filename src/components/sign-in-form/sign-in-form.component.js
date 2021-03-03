import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import './sign-in-form.styles.scss';

// Sign in form used in the homepage
const SignInForm = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Card className="card text-white bg-primary sign-in-card">
            <Card.Header> <strong>SIGN IN</strong></Card.Header>
            <Card.Body>
                <Form onSubmit={ 
                    e => { 
                        e.preventDefault();
                        props.handleSignIn(email, password);
                    }
                }>
                    <div className="form-group">
                        <label> <small>EMAIL</small></label>
                        <input
                            required
                            type="email"
                            maxLength="254"
                            className="form-control"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label ><small>PASSWORD</small></label>
                        <input
                            required
                            minLength="7"
                            maxLength="64"
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>

                    <div>
                        {!!props.signInAlert && 
                        <Alert variant="danger" className="text-center">
                            {props.signInAlert}
                        </Alert>
                        }
                        <Button
                            className="form-submit-button"
                            variant="secondary"
                            type="submit"
                        >
                            {props.signInButtonLoad ?
                                <Spinner animation="border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </Spinner>
                            :
                                'SIGN IN'
                            }
                        </Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default SignInForm;