import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import './sign-up-form.styles.scss';

// Sign up form used in the homepage
const SignUpForm = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Card className="card text-white bg-primary sign-up-card">
            <Card.Header> <strong>REGISTER</strong></Card.Header>
            <Card.Body>
                <Form onSubmit={
                    e => { 
                        e.preventDefault();
                        const passCon = document.getElementById('confirm-password');
                        if (passCon.value !== password){
                            passCon.setCustomValidity(`Passwords don't match!`);
                        }
                        else {
                            passCon.setCustomValidity('')
                            props.handleSignUp(name, email, password); 
                        }    
                    }
                }>
                    <div className="form-group">
                        <label> <small>NAME</small></label>
                        <input
                            required
                            type="name"
                            maxLength="64"
                            className="form-control" 
                            placeholder="Your Name"
                            value={name}
                            onChange={ e => setName(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label> <small>EMAIL</small></label>
                        <input 
                            required
                            maxLength="254"
                            type="email" 
                            className="form-control" 
                            id="exampleInputEmail1" 
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
                            onChange={e => setPassword(e.target.value) }
                        />
                    </div>

                    <div className="form-group">
                        <label ><small>CONFIRM PASSWORD</small></label>
                        <input
                            required
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            maxLength="64"
                            id="confirm-password"
                            onChange={
                                e => {
                                    e.target.value !== password ?
                                        e.target.setCustomValidity(`Passwords don't match!`)
                                    :
                                        e.target.setCustomValidity('')
                                }
                            }
                        />
                    </div>

                    <div>
                        {!!props.signUpAlert &&
                            <Alert variant="danger" className="text-center">
                                {props.signUpAlert}
                            </Alert>
                        }
                        <Button 
                            className="form-submit-button" 
                            variant="secondary" 
                            type="submit"
                        >
                            {
                                props.signUpButtonLoad ?
                                    <Spinner animation="border" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </Spinner>
                                    :
                                    'SIGN UP'
                            }
                        </Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default SignUpForm;